import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native"
import PropTyeps from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

// const weatherOptions = {
//     Haze: {
//         iconName:,
//         gradient:
//     }
// }

export default function Weather({temp, condition}){
    return (
    <LinearGradient colors={["#4DA0B0","#D39D38"]}style={styles.container} color="white">
        <View style={styles.halfContainer}>
            <StatusBar barStyle="light=content"/>
            <MaterialCommunityIcons size={96} name="weather-sunny"/>
            <Text style={styles.temp}>{temp}℃</Text>
        </View>
        <View style={styles.halfContainer}/>
    </LinearGradient>
    );
}

Weather.PropTyeps = {
    temp : PropTyeps.number.isRequired,
    condition: PropTyeps.oneOf(
        ["Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer:{
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    }
});