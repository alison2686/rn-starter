import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, FlatList } from 'react-native'
import ColorCounter from '../ColorCounter'

const SquareScreen = () => {
  return (
    <View>
        <ColorCounter color='Red' />
        <ColorCounter color='Blue' />
        <ColorCounter color='Green' />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default SquareScreen