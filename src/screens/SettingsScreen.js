import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import GlobalStyle from '../components/GlobalStyle'
import { SvgXml } from 'react-native-svg'
import { BackIcon, BrushIcon, LanguageIcon, TextIcon } from '../constants/Icons'
import GoBackButton from '../components/GoBackButton'
import OptionNavigatorBar from '../components/OptionNavigatorBar'

const SettingsScreen = ({navigation}) => {

  const onGoBackPressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header_container, { marginTop: 65 }]}>
        <GoBackButton buttonStyle={{ marginTop: 7, marginLeft: 20 }} onPressFunction={onGoBackPressHandler} />
        <Text style={[GlobalStyle.screen_header_text, { marginLeft: 94 }]}>
          Settings
        </Text>
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 30 }}>
        <Text style={styles.section_title_text}>Settings</Text>
        <OptionNavigatorBar title="Theme" icon={BrushIcon} />
        <OptionNavigatorBar title="Typography" icon={TextIcon} />
        <OptionNavigatorBar title="Language" icon={LanguageIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },

  header_container: {
    flexDirection: "row",
  },

  section_title_text: {
    fontWeight: 400,
    fontSize: 16,
    color: "#AFAFAF",
    marginBottom: 10,
    fontFamily: "Lato-Regular",
  },
});

export default SettingsScreen