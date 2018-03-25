// React
import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, Linking,
        TouchableHighlight, Image, View, Text, Button, } from 'react-native';

// Vendors
import moment from 'moment';
import call from 'react-native-phone-call';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

// Services
import { mapsKey } from '../../../services/DeliveryService';

// Styles
import { styles } from './DeliveryStyles';

export class DeliveryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    componentWillMount() {
        const { delivery, currLocation } = this.props.navigation.state.params;

        const origin = {
            latitude: currLocation.coords.latitude,
            longitude: currLocation.coords.longitude
        };
        
        const deliveryDest = delivery.address.geometry.coordinates;
        const date = new Date(delivery.from);

        const destination = {
            latitude: deliveryDest[1],
            longitude: deliveryDest[0]
        }

        // check why is this problematic with CDM
        const routeDetails = null;
        this.setState({
            origin, destination, routeDetails, delivery
        })
    }

    handleRouteResults = (result) => {
        routeDetails = { distance: result.distance, duration: result.duration }
        this.setState({ routeDetails })
    }

    handleLayout = () => {
        this.mapRef.fitToCoordinates([this.state.origin, this.state.destination], { edgePadding: { top: 100, right: 100, bottom: 100, left: 100 }, animated: false })
    }

    handleCompleted = () => {
        const { params } = this.props.navigation.state;
        params.handleCompletedDeliveries(this.state.delivery.id)
        this.props.navigation.goBack()
    }

    // expo/vendor?
    handleCall = () => {
        call({ number: this.state.delivery.client.phone })
        .catch(console.error)
    }

    // link map with query
    LaunchGoogleMaps = () => {
        const { address } = this.state.delivery
        const MapQuery = `${address.street} ${address.number} ${address.city}`
        Linking.openURL(`https://maps.google.com?q=${MapQuery}`)
    }

    render() {
        
        // visual assets
        var vegImage   = require('../../../assets/img/veg.png');
        var phone = require('../../../assets/img/phone.png');

        return (
            <SafeAreaView style={styles.container}>
                <MapView
                    ref={mapRef => this.mapRef = mapRef}
                    onLayout={this.handleLayout}
                    style={styles.mapContainer}
                    initialRegion={{
                        ...this.state.origin,
                        latitudeDelta: 0.0022,
                        longitudeDelta: 0.0022
                    }}>
                    <MapView.Marker coordinate={this.state.origin}>
                        <View style={styles.originMarker} />
                    </MapView.Marker>
                    <MapView.Marker coordinate={this.state.destination}>
                        <View style={[styles.shadow, styles.destinationMarker]} />
                    </MapView.Marker>
                    <MapViewDirections
                        onReady={(result) => {
                            this.handleRouteResults(result)
                        }}
                        origin={ this.state.origin }
                        destination={ this.state.destination }
                        apikey={ mapsKey }
                        strokeWidth={4}
                        strokeColor={'rgba(57, 229, 200, 1)'}
                    />
                </MapView>

                <View style={styles.detailsContainer}>
                    <TouchableHighlight onPressOut={this.handleCompleted}
                        style={{ position: 'absolute', zIndex: 2, marginTop: -35, right: 26 }}>
                        <View>
                            <Image style={styles.veg} source={ vegImage }/>
                        </View>
                    </TouchableHighlight>

                    <View>
                        <Text style={styles.idText}>
                            ID {this.state.delivery.humanId}
                        </Text>
                        <Text style={styles.title}>
                            {this.state.delivery.client.name}
                        </Text>
                        <Text style={styles.subtitle}>
                            {this.state.delivery.address.street} {this.state.delivery.address.number} ,{this.state.delivery.address.city}
                        </Text>
                        <Text style={styles.distance}>
                            {this.state.routeDetails ? `${(this.state.routeDetails.distance + '').substring(0, 3)} KM away` : 'Could not get distance'}
                        </Text>
                    </View>
                    <TouchableHighlight onPressOut={this.handleCall} style={{ right: -17 }}>
                        <Image style={styles.phone} source={ phone }/>
                    </TouchableHighlight>

                    <View style={styles.separator}></View>
                    <View style={styles.scheduluedTime}>
                        <Text style={styles.title}>
                            {moment(this.state.delivery.from).format('dddd')}
                        </Text>
                        <View style={[styles.shadow, styles.timeRange]}>
                            <Text style={[styles.title, { color: 'rgba(255, 255, 255, 0.3)' }]}>
                                {moment(this.state.delivery.from).format('H:mm')} - {moment(this.state.delivery.to).format('H:mm')}
                            </Text>
                        </View>

                    </View>
                    <Text style={styles.title}>
                        {moment(this.state.delivery.from).format('DD.MM.YYYY')}
                    </Text>
                    <Text style={styles.distance}>
                        {this.state.routeDetails ? `Estimated Arrival Time ${moment().add(this.state.routeDetails.duration, 'minutes').format('H:mm')}` : 'Could not get duration'}

                    </Text>
                    <TouchableHighlight onPress={this.LaunchGoogleMaps} style={[styles.shadow, styles.roundButton]}>
                        <Text style={styles.roundButtonText}>Open in Google Maps</Text>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        )
    }
}

export default DeliveryScreen;


