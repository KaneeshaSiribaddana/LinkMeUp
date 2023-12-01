import React from 'react'
import { Linking, View, Text, Image, TouchableOpacity } from 'react-native'
import { COLORS, icons, images, SIZES, Dimensions } from '../../../constants';

import styles from './bio.style'

const Bio = () => {
  return (
    <View style={{
      flex: 1,
      padding: SIZES.medium
    }}>
      <View>
        <Text style={{fontSize:16,fontWeight:700}}>Bio</Text>
      </View>
      <View style={{ marginTop: 20 }} >
       <Text style={{textAlign:'center'}}>Passionate software engineering student 🚀 | Coding enthusiast 💻 | Lifelong learner 📚 | Creating solutions one line at a time ⚙️ | Embracing challenges and growth 🌱 | Building a tech-driven future 🔮 | Explorer of code and creativity 🌌 | Let's connect and innovate! 🌟</Text>
      </View>
    </View>


  )
}

export default Bio