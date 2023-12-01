import React from 'react'
import { Linking, View, Text, Image, TouchableOpacity } from 'react-native'
import { COLORS, icons, images, SIZES, Dimensions } from '../../../constants';

import styles from './social.style'

const Social = () => {

  const handleInstagramPress = () => {
    const url = 'https://www.instagram.com/___kaniya__';
    Linking.openURL(url);
  };
  const handleFacebookPress = () => {
    const url = 'https://web.facebook.com/profile.php?id=100008943966767';
    Linking.openURL(url);
  };
  const handleTiktokPress = () => {
    const url = 'https://www.tiktok.com/@coloxo.lk'; // Ensure this is a valid web URL
    Linking.openURL(url);
  };

  return (
    <View style={{
      flex: 1,
      padding: SIZES.medium
    }}>
      <View>
        <Text style={{fontSize:16,fontWeight:700}}>Social</Text>
      </View>
      <View style={{ marginTop: 20 }} >
        <TouchableOpacity onPress={handleInstagramPress}>
          <View style={[styles.outer, styles.alignRight]}>
            <Image style={{ width: 40, height: 40 }} source={images.imginstagram} />
            <Text style={styles.socialText}>___kaniya__</Text>
            <Image style={{ width: 20, height: 20 }} source={images.visitLink} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFacebookPress}>
          <View style={[styles.outer, styles.alignRight]}>
            <Image style={{ width: 40, height: 40 }} source={images.imgfacebook} />
            <Text style={styles.socialText}>Kaneesha Siribaddana</Text>
            <Image style={{ width: 20, height: 20 }} source={images.visitLink} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTiktokPress}>
          <View style={[styles.outer, styles.alignRight]}>
            <Image style={{ width: 40, height: 40 }} source={images.imgtiktok} />
            <Text style={styles.socialText}>Kaneesha Siribaddana</Text>
            <Image style={{ width: 20, height: 20 }} source={images.visitLink} />
          </View>
        </TouchableOpacity>
      </View>
    </View>


  )
}

export default Social