import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from "./Loading"
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "78cb44672b70346d875e57f7a3e79388";


export default class extends React.Component {
  state = {
    IsLoading : true
  };
  getWeather = async (latitude, longitude) =>{
    const { 
      data: {
        main : { temp },
        weather
      }
     } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
    this.setState({
      isLoading: false, 
      condition: weather[0].main,
      temp: temp
    });
  }
  getLocation = async () =>{
    try{ 
      await Location.requestForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading:false });
      // Send to API and get weather!
    } catch(error){
      Alert.alert("Can't find you.", "So sad");
    }
    
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading, temp, condition} = this.state;
    return isLoading? <Loading/> : 
    <Weather temp={Math.round(temp)} condition={condition}/>;
  } 
}


