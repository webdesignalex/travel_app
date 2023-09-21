import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Pressable,
} from "react-native";
import React from "react";
import COLORS from "../consts/colors";
import HomePage from "./HomePage";

export default function OnBoardPage({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/onboardImage.jpg")}
        style={styles.image}
      >
        <Text style={styles.text}>Discover</Text>
        <Text style={styles.text}>World With Us</Text>
        <Text style={{ color: COLORS.white, lineHeight: 21 }}>
          Discover world with us. You can go everywhere you want. You can make
          your travel dream with us!
        </Text>
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => navigation.navigate("HomePage")}>
            <Text style={styles.button}>Get Started</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: "center",
    lineHeight: 20,
  },
  text: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer:{
    backgroundColor:COLORS.white,
    width:'30%',
    height:55,
    borderRadius:10,
    marginVertical:5
  },
  button:{
    paddingLeft:10,
    paddingTop:10
  },
});
