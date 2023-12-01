import React, { useState, useEffect } from 'react';
import { View, Text, Button, Dimensions, Linking, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from "expo-router";

import { BarCodeScanner } from 'expo-barcode-scanner';
import { QrCodeWithLogo } from '../components'


import { COLORS, icons, images, SIZES } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const QrScanner = ({ route, navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet Scanned');
  const [showQrCode, setShowQrCode] = useState(true);
  const [selectedToggle, setSelectedToggle] = useState(0);

  const windowWidth = Dimensions.get('window').width;


  // const handleToggle = (button) => {
  //   setActiveButton(button);
  //   setShowQrCode(!showQrCode);
  // };
  const askCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == 'granted')
    })()
  }

  useEffect(() => {
    askCameraPermission();
    if (selectedToggle === 1||selectedToggle === 0) {
      setShowQrCode(!showQrCode);
    }
  }, [selectedToggle]);

  const handleBarCode = ({ type, data }) => {
    setScanned(true);
    setText(data);

    // Open the scanned URL using Linking.openURL
    Linking.openURL(data)
      .catch(error => {
        console.error('Error opening URL:', error);
        // Handle any errors that occur while opening the URL
      });
  }

  if (hasPermission == null) {
    return (
      <SafeAreaView style={{ backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerStyle: { backgroundColor: COLORS.lightWhite, },
            headerTintColor: COLORS.primary, // Change the back button color to red
            headerBackTitleVisible: false,
            headerShadowVisible: false,
            headerTitle: ''
          }}

        />
        <View style={{ padding: SIZES.medium, backgroundColor: COLORS.lightWhite }}>
          <Text>Requesting Permission to Camera</Text>
          <Button
            title="Go Back"
            onPress={() => navigation.goBack()}
          />
        </View>
      </SafeAreaView>

    );
  }

  if (hasPermission == false) {
    return (

      <SafeAreaView style={{ backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerStyle: { backgroundColor: COLORS.lightWhite, },
            headerTintColor: COLORS.primary, // Change the back button color to red
            headerBackTitleVisible: false,
            headerTitle: ''
          }}

        />
        <View style={{ padding: SIZES.medium, backgroundColor: COLORS.lightWhite }}>
          <Text>No Access to Camera</Text>
          <Button
            title="Allow Camera"
            onPress={() => askCameraPermission()}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <ScrollView style={{backgroundColor: COLORS.lightWhite}}>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, padding: SIZES.medium }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerTintColor: COLORS.primary, // Change the back button color to red
            headerBackTitleVisible: false,
            headerTitle: ''
          }}

        />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',marginBottom:20 }}>
          <View
            style={{
              width: '90%',
              height: 50,
              borderWidth: 1,
              borderRadius: 15,
              flexDirection: 'row',
              borderColor:COLORS.gray
            }}
          >
            <TouchableOpacity style={{ width: '50%', height: '96', backgroundColor: selectedToggle == 0 ? '#2348ff' : 'white', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => {
                setSelectedToggle(0);
              }}>
              <Text style={{ color: selectedToggle == 1 ? '#2348ff' : COLORS.lightWhite, fontSize: 14, fontWeight: 600 }}>My QR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '50%', height: '96', backgroundColor: selectedToggle == 1 ? '#2348ff' : COLORS.lightWhite, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => {
                setSelectedToggle(1);
              }}>
              <Text style={{ color: selectedToggle == 0 ? '#2348ff' : COLORS.lightWhite, fontSize: 14, fontWeight: 600 }}>Scan</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          {showQrCode ? (
            <View style={styles.qrBox}>
              <View>
                <BarCodeScanner
                  onBarCodeScanned={scanned ? undefined : handleBarCode}
                  style={{ height: windowWidth, width: windowWidth, borderRadius: 30 }}
                />
              </View>
            </View>
          ) : (
            <QrCodeWithLogo />
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );

}
const styles = {
  qrBox: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 30,

  },
  qrcamera: {

  }
}

export const navigationOptions = {
  headerStyle: { backgroundColor: COLORS.lightWhite },
  headerShadowVisible: false,
  headerTintColor: 'red', // Change the back button color to red
  headerBackTitleVisible: false, // Hide the back button title
};
;

export default QrScanner;