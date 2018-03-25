// React
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

// Comps & styles
import { styles } from './SplashStyles';

export default class SplashScreen extends React.Component {

 render() {
     
   // screen assets
   let title = 'SUPPLIER DELIVERY';
   let locationIcon = require('../../../assets/img/location.png')

   return (
     <View style={styles.container}>
       <Image style={styles.img} source={ locationIcon }/>
       <Text style={styles.text}>{ title }</Text>
     </View>
   );
 }
}


