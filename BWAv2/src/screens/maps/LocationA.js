import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, Image, View, StatusBar, PermissionsAndroid } from "react-native";
import { Container, Text } from "native-base";

import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';

class LocationA extends Component {
    state = {
        latitude: null,
        longitude: null,
        error: null,
        concat: null,
        coords:[],
        x: 'false',
        cordLatitude:10.8417196,
        cordLongitude:106.6667826,
    };

    requestAccessLocationPermission = async  () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Access Your location Permission',
                    message:
                        'Bikeworld app need access your location ' +
                        'to take awesome suggest.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can access location');
            } else {
                console.log('Permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    componentDidMount() {
        var getPermission = this.requestAccessLocationPermission();
        console.log(getPermission);
        if(getPermission){
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position.valueOf());
                    this.setState({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        error: null,
                    });
                    this.mergeLot();
                },
                (error) => this.setState({ error: error.message }),
                {
                    enableHighAccuracy: false,
                    timeout: 200000,
                    maximumAge: 1000
                },
            );
        }
    }

    mergeLot(){
        if (this.state.latitude != null && this.state.longitude!=null)
        {
            let concatLot = this.state.latitude +","+this.state.longitude
            this.setState({
                concat: concatLot
            }, () => {
                //this.getDirections(concatLot, "10.842006, 106.667183");
                this.getDirections("10.8416627,106.6670889", "10.842006,106.667183");
            });
        }

    }

    async getDirections(startLoc, destinationLoc) {

        try {
            let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }&key=AIzaSyCB4alAIVw34Frga0lRDhYycIjwUg9PRSc`);
            let respJson = await resp.json();
            let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
            let coords = points.map((point, index) => {
                return  {
                    latitude : point[0],
                    longitude : point[1]
                }
            });
            console.log('coords');
            console.log(coords);
            this.setState({coords: coords});
            this.setState({x: "true"});
            return coords
        } catch(error) {
            console.log("AAA" + error.toString());
            this.setState({x: "error"});
            return error
        }
    }
    render() {

        return (
            <MapView style={styles.map} initialRegion={{
                latitude:10.8416627,
                longitude:106.6670889,
                latitudeDelta: 0.015*1,
                longitudeDelta: 0.0121*1,
            }}>

                {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
                    coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
                    title={"Your Location"}
                />}

                {!!this.state.cordLatitude && !!this.state.cordLongitude && <MapView.Marker
                    coordinate={{"latitude":this.state.cordLatitude,"longitude":this.state.cordLongitude}}
                    title={"Your Destination"}
                />}
                {!!this.state.cordLatitude && !!this.state.cordLongitude && <MapView.Marker
                    coordinate={{"latitude":10.842006,"longitude":106.667183}}
                    title={"Your Destination2"}
                />}

                {!!this.state.latitude && !!this.state.longitude && this.state.x === 'true' && <MapView.Polyline
                    coordinates={this.state.coords}
                    strokeWidth={2}
                    strokeColor="red"/>
                }

                {!!this.state.latitude && !!this.state.longitude && this.state.x === 'error' && <MapView.Polyline
                    coordinates={[
                        {latitude: this.state.latitude, longitude: this.state.longitude},
                        {latitude: this.state.cordLatitude, longitude: this.state.cordLongitude},
                    ]}
                    strokeWidth={2}
                    strokeColor="red"/>
                }
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

export default LocationA;