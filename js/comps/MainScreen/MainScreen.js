// React
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

// Services
import DeliveryService from '../../../services/DeliveryService';

// Vendors
import { Permissions, Location, Contacts }  from 'expo';

// Comps & styles
import ListCard from '../ListCard/ListCard';

// check for style import fault
// import MainStyles from './MainStyles';

export class MainScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      deliveries: [],
      locationResult: null, 
      locationRoute: null
    }
  }

  // fetch delivery data from service
  componentDidMount() {
    DeliveryService.getData()
      .then(data => this.setState({
        deliveries: data
      }))
      this._getLocationAsync();
  }

  // must handle completed as well
  onCardPress = (delivery) => {
    this.props.navigation.navigate('DeliveryScreen', {
      delivery, currLocation: JSON.parse(this.state.locationResult),
      handleCompletedDeliveries: this.handleCompletedDeliveries.bind(this)
    });
  }

  handleRouteResults = (result) => {
    this.setState({
      routeResult:result
    });
  }

  handleCompletedDeliveries = (id) => {
    var completedDeliveries = this.state.deliveries.slice();
    completedDeliveries.splice(completedDeliveries.findIndex(cd => cd.id === id), 1);
    this.setState({
      deliveries: completedDeliveries
    });
}

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
        this.setState({
            locationResult: 'Access denied',
        });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ 
      locationResult: JSON.stringify(location) 
    });
  }


  render() {

    // header assets
    let locationIcon = require('../../../assets/img/location.png')
    var ham = require('../../../assets/img/ham.png');

    var { deliveries } = this.state

    return (
      <ScrollView style={styles.container}>
   
          <View style={styles.nav}>
            <Image style={styles.ham} source={ ham } />
            <Text style={styles.navTxt}>Future Orders</Text>
            <Image style={styles.img} source={ locationIcon } />
  
        </View>
        <View style={styles.contentContainer}>
          {deliveries.map(delivery => {
            return (
              <ListCard key={delivery.id} data={delivery}
              onCardPress={(delivery) => {this.onCardPress(delivery)}}
              />
            )
          })}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

    nav: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgb(66, 97, 144)',
      height: 60,
      paddingHorizontal: 8,
      paddingVertical: 7.3,
    },
  
    img: {
      width: 24,
      height: 24
    },
  
    ham: {
      width: 40,
      height: 40
    },
    navTxt: {
      width: 100,
      height: 26,
      color: 'rgba(255, 255, 255, 0.3)',
      fontSize: 13.3
    },
  
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      width: 227.3,
      height: 100.6
    },
    container: {
      flex: 1,
      alignSelf: 'stretch',
    },
    contentContainer: {
      paddingTop: 26,
      paddingLeft: 16,
      paddingRight: 16
    }
  });
  


export default MainScreen;



