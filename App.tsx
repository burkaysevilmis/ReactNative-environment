import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Config from 'react-native-config'

const App = () => {
  console.log(Config.ENV)
  return (
    <View style={{flex:1,justifyContent:'center',}}>
      <Text style={{fontSize:50,color:'black'}}>{Config.ENV}</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})