import React from 'react'
import {TouchableOpacity,Image } from 'react-native'

import styles from './notficationBtn.style'

const NotificationBtn = ({iconUrl,dimension,handlePress}) => {
  return (
    <TouchableOpacity style={[styles.btnContainer,styles.btnNotification]}onPress={handlePress}>
      <Image
      source={iconUrl}
      resizeMode='cover'
      style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default NotificationBtn