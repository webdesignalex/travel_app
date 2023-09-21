import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import React from "react";
import COLORS from "../consts/colors";

export default function DetailPage({ navigation, route }) {
  const place = route.params;
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={"rgba(0,0,0,0)"} />
      <ImageBackground source={place.image} style={styles.imageCard}>
        <View style={styles.header}>
          <Ionicons
            name="arrow-back"
            size={28}
            color={COLORS.white}
            onPress={() => navigation.goBack()}
          />
          <MaterialIcons name="more-vert" size={28} color={COLORS.white} />
        </View>
        <View style={styles.imageDetails}>
          <Text style={{ color: COLORS.white, fontSize: 20 }}>
            {place.name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons name="star" size={28} color={COLORS.orange} />
            <Text style={{ color: COLORS.white }}>5.0</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.cardContainer}>
        <View style={styles.circleButton}>
          <Entypo name="heart" size={30} color={COLORS.red} />
        </View>
        <View style={styles.cardContent}>
          <View style={styles.locationHolder}>
            <MaterialIcons name="place" size={35} color={COLORS.primary} />
            <Text style={{ color: COLORS.primary, marginTop: 5, fontSize: 15 }}>
              {place.location}
            </Text>
          </View>
          <Text
            style={{ color: COLORS.dark, fontSize: 20, fontWeight: "bold" }}
          >
            About the trip
          </Text>
          <Text style={{ fontSize: 12, marginTop: 10 }}>{place.details}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{flex:1,alignItems:'center',flexDirection:"row"}}>
            <Text style={{color:COLORS.white,fontSize:18,fontWeight:'bold'}}>$100</Text>
            <Text style={{color:COLORS.grey,fontSize:12,fontWeight:'bold',marginLeft:2}}>/PER DAY</Text>

        </View>
        <View style={styles.booknwButton}>
            <Text style={{color:COLORS.primary,fontSize:15,fontWeight:'bold'}}>BOOK NOW</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageCard: {
    flex: 0.7,
  },
  header: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 60,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  imageDetails: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: 40,
  },
  cardContainer: {
    backgroundColor: COLORS.white,
    width: "100%",
    flex: 0.3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    top: -30,
  },
  circleButton: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.white,
    borderRadius: 50,
    top: -30,
    position: "absolute",
    right: 20,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  locationHolder: {
    flexDirection: "row",
    marginTop: 30,
  },
  cardContent: {
    marginHorizontal: 20,
  },
  bottomContainer: {
    height: 70,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    paddingHorizontal:20,
    justifyContent:'space-between',
    alignItems:'center',

    
    
  },
  booknwButton:{
    backgroundColor:COLORS.white,
    width:150,
    height:50,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  }
});
