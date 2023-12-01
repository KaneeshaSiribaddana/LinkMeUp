import React from 'react'
import { TouchableOpacity, Image } from 'react-native';
import { Stack, useRouter } from "expo-router";

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {

  const { push } = useRouter();

  const router = useRouter();
  return (
    <TouchableOpacity style={[styles.btnContainer,]} >
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn