import React from 'react'
import { Text, StyleSheet} from 'react-native'

const ComponentsScreen = () => {
  return (
    <Text styles={styles.textStyle}>This is the comonents screen</Text>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentsScreen