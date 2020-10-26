import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Text from '../../shared/Text';
import * as Location from 'expo-location';

class home extends Component<any,{
    location?:{
        latitude: number;
        longitude: number;
        altitude: number | null;
        accuracy: number | null;
        altitudeAccuracy: number | null;
        heading: number | null;
        speed: number | null;
    }
}> {
    async componentDidMount(){
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        this.setState({...(this.state || {}), location:location.coords});
    }

    getRegion(){
        if(!(this.state && this.state.location))
        return undefined;
        return {
            latitude: this.state.location.latitude,
            longitude:  this.state.location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }
    }
    render() {
        return (
            <View style={styles.container}>
            <MapView style={styles.mapStyle}  region={this.getRegion()} provider={'google'}>
                {
                    this.state && this.state.location && 
                    <Marker coordinate={{...this.state.location}} />
                }
            </MapView>
            </View>
        );
    }
}
export const routeConfigs = {
    name: "home",
    component: home,
    options:{
        headerShown:false
    }
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:'center',
      alignItems:'center'
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
})
export default home;