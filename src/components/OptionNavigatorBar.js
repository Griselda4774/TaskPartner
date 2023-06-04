import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { BackIcon, } from '../constants/Icons';

const OptionNavigatorBar = ({onPressFunction, icon, title}) => {
  return (
    <Pressable onPress={onPressFunction} style={styles.container}>
      <SvgXml xml={icon} width={24} height={24} style={{marginRight: 20,}}/>
      <Text style={styles.option_text}>{title}</Text>
      <View style={{alignItems: 'flex-end', flex: 1, marginRight: 5}}>
        <SvgXml xml={BackIcon} width={16} height={16} style={{transform: [{rotate: '180deg'}]}}/>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10,
    },

    option_text: {
        color: '#fff',
        fontWeight: 400,
        fontSize: 16,
    },
});

export default OptionNavigatorBar