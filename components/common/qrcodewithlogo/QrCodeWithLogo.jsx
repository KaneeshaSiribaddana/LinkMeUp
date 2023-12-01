import React, { useRef } from 'react';
import { captureRef } from 'react-native-view-shot';
import { View, Text, TouchableOpacity, Dimensions, Image, Platform,
    PermissionsAndroid,
    ToastAndroid } from 'react-native';
import { QRCode } from 'react-native-custom-qr-codes-expo';
import ViewShot from 'react-native-view-shot';
import Svg, { Image as SvgImage } from 'react-native-svg';

import { COLORS, icons, images, SIZES } from '../../../constants';

const QrCodeWithLogo = () => {
    const windowWidth = Dimensions.get('window').width;
    const qrCodeRef = useRef(null);
    const logoSize = 50; // Adjust the logo size as needed

    const handleCapture = async () => {
        try {
            if (qrCodeRef.current) {
                const uri = await qrCodeRef.current.capture();
                // Now 'uri' contains the path to the captured image

                // You can share or save the image using the uri
            }
        } catch (error) {
            console.error('Error capturing QR code:', error);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ViewShot ref={qrCodeRef} options={{ format: 'jpg', quality: 1 }}>
                {
                    /* <QRCode
                        value="https://www.instagram.com/___kaniya__"
                        size={300}
                        logo={require('../../../assets/images/social/facebook.png')}
                        logoSize={60}
                        innerStyle='dot'
                    /> */
                    <QRCode content='https://www.instagram.com/___kaniya__'
                        logo={require('../../../assets/images/social/facebook.png')}
                        logoSize={60}
                        innerEyeStyle='circle'
                        codeStyle='dot'
                        linearGradient={['#20A4F3', '#182B3A']} gradientDirection={[180, 0, 0, 0]}
                    />
                }
            </ViewShot>
            <TouchableOpacity onPress={handleCapture}>
                <Text>Share QR Code</Text>
            </TouchableOpacity>
        </View>
    );
};

export default QrCodeWithLogo;
