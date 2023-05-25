import { StyleSheet, Text, View, Image } from "react-native";

export default function IntroScreen() {
  return (
    <View style={styles.body}>
      <Image
        source={require("../../assets/introPic.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Task Partner</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 95,
    height: 80,
  },

  body: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 40,
    fontWeight: 700,
    color: '#fff',
  },
});
