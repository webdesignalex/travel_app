import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  ScrollView,
  TextInput,
  FlatList,
  ImageBackground,
  Pressable,
  TouchableOpacity
} from "react-native";
import React from "react";
import COLORS from "../consts/colors";
import places from "../consts/places";
import {
  AntDesign,
  Ionicons,
  EvilIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");
export default function HomePage({navigation}) {
  const category = [
    <MaterialIcons name="flight" size={25} color={COLORS.primary} />,
    <MaterialIcons name="beach-access" size={25} color={COLORS.primary} />,
    <MaterialIcons name="near-me" size={25} color={COLORS.primary} />,
    <MaterialIcons name="place" size={25} color={COLORS.primary} />,
  ];

  const CategoryList = () => {
    return (
      <View style={styles.categoryContainer}>
        {category.map((icon, index) => (
          <View key={index} style={styles.iconList}>
            {icon}
          </View>
        ))}
      </View>
    );
  };
  const CardofPlaces = ({ place }) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('DetailPage',place)}>
        <ImageBackground style={styles.imageCard} source={place.image}>
          <Text style={{ color: COLORS.white, fontSize: 18 }}>
            {place.name}
          </Text>
          <View style={styles.bottomContainer}>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="place" size={20} color={COLORS.white} />
              <Text style={{ color: COLORS.white }}>{place.location}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <AntDesign name="star" size={20} color={COLORS.white} />
              <Text style={{ color: COLORS.white }}>5.0</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const RecommendedPlaces = ({ place }) => {
    return (
      <ImageBackground style={styles.recommendIMage} source={place.image}>
        <Text style={{ color: COLORS.white, fontSize: 18 }}>{place.name}</Text>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <MaterialIcons name="place" size={20} color={COLORS.white} />
          <Text style={{ color: COLORS.white }}>{place.location}</Text>
        </View>
        <Text style={{ color: COLORS.white, fontSize: 12 }}>
          {place.details}
        </Text>
      </ImageBackground>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={styles.iconContainer}>
        <AntDesign name="bars" size={28} color={COLORS.white} />
        <Ionicons name="notifications-sharp" size={28} color={COLORS.white} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 120,
            paddingHorizontal: 20,
          }}
        >
          <View>
            <Text style={styles.text}>Explore the</Text>
            <Text style={styles.text}>Beautiful Places</Text>
            <View style={styles.inputContainer}>
              <View style={styles.iconContent}>
                <EvilIcons name="search" size={25} />
                <TextInput
                  placeholder="search places"
                  style={{ color: COLORS.grey }}
                />
              </View>
            </View>
          </View>
        </View>
        <CategoryList />
        <Text style={styles.placeText}>Places</Text>
        <FlatList
          contentContainerStyle={{ paddingLeft: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={places}
          renderItem={({ item }) => <CardofPlaces place={item} />}
        />
        <Text style={styles.placeText}>Recommended</Text>
        <FlatList
          snapToInterval={width - 20}
          contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={places}
          renderItem={({ item }) => <RecommendedPlaces place={item} />}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  iconContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: COLORS.primary,
    justifyContent: "space-between",
  },
  text: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    height: 60,
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: "absolute",
    top: 90,
  },
  iconContent: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconList: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  placeText: {
    fontSize: 17,
    color: COLORS.dark,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  imageCard: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  recommendIMage: {
    width: width - 30,
    height: 200,
    overflow: "hidden",
    padding: 20,
    marginRight: 20,
    borderRadius: 10,
  },
});
