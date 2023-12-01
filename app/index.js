import { useState } from "react";
import { Text, View, ScrollView, Image, ImageBackground, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";


import QrScanner,{navigationOptions} from './QrScanner';

import { COLORS, icons, images, SIZES, Dimensions } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome, UserHeader, Social, Bio } from '../components'
import { TouchableOpacity } from "react-native-gesture-handler";
const Home = () => {
    const { push } = useRouter();

    const router = useRouter();

    const windowDimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
    const imageSize = windowDimensions.height * 0.3;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite, },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn style={{ backgroundColor: COLORS.white }} iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ height: '80%' }}>
                                <ScreenHeaderBtn style={styles.btnNotification} iconUrl={images.notification} dimension="70%" />
                            </View>
                            <TouchableOpacity onPress={
                                () => {
                                    router.push(`/QrScanner`)
                                }
                            }>
                                <ScreenHeaderBtn style={{ marginLeft: 20, backgroundColor: 'none' }} iconUrl={images.scanner} dimension="100%" />
                            </TouchableOpacity>

                        </View>
                    ),
                    headerTitle: ''
                }}

            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>

                    <View

                        style={{
                            backgroundColor: COLORS.lightWhite,
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            resizeMode: "cover",
                        }}>
                        <View style={{ marginTop: 10, marginBottom: 10, flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={[styles.engagementContainer, { borderRightColor: 'gray', borderRightWidth: 2 }]}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>153</Text>
                                        <Text>Engagers</Text>
                                    </View>
                                </View>
                                <View style={styles.engagementContainer}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>83</Text>
                                        <Text>Saved</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <Image
                            source={images.profile}
                            resizeMode='cover'
                            style={{
                                width: 150,
                                height: 150, // Adjust the size as needed
                                aspectRatio: 1, // To maintain a square image
                                borderWidth: 2,
                                borderColor: '#3c5ba9',
                                borderRadius: 150 / 2,
                            }}
                        />
                        <View style={{ borderRadius: 30, marginLeft: 30, marginRight: 30, alignItems: 'center' }}>

                            <Text style={{ marginTop: 10, fontSize: 16, fontWeight: 600 }}>@___kaniya__</Text>
                            <Text style={{}}>Kaneesha Siribaddana</Text>
                        </View>

                    </View>


                </View>
                <Bio />
                <Social />
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}>
                </View>
            </ScrollView>


        </SafeAreaView>

    )
}

const styles = {
    engagementContainer: {
        flex: 1,
        height: 30,
        justifyContent: 'center',
    },

    btnNotification: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderRadius: 10,
        borderBottomWidth: 2, // Add border bottom width
        borderBottomColor: 'red', // Set border bottom color to red
    },
};
export default Home;  