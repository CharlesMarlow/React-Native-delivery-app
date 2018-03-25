import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

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
      color: '#ffffff',
      fontSize: 40,
      fontWeight: 'bold'
    },
  
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      alignItems: 'center',
      justifyContent: 'center',
      // marginTop: 12
    },

    card: {
      width: 227.3,
      height: 100.6
    },

    contentContainer: {
      paddingTop: 26,
      paddingLeft: 16,
      paddingRight: 16
    }
  });
  