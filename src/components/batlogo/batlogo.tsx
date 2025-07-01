import { View, Text, Image, StyleSheet } from "react-native";
export function BatLogo() {
  return (
    <View>
      <Text style={styles.text}>BatPass Generator</Text>
      {/* <Image source={batLogo} /> */}
    </View>
  )
} 

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  }
})