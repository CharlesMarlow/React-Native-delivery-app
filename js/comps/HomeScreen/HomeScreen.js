// React
import React from 'react';
import { Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

// Comps & styles
import SplashScreen from '../SplashScreen/SplashScreen';
import MainScreen from '../MainScreen/MainScreen';
import { styles } from './HomeStyles';

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isSplashOn: true
        }
    }

    // set splashScreen duration
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isSplashOn: false
            })
        }, 1000);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                {this.state.isSplashOn ?
                    <SplashScreen /> :<MainScreen 
                    navigation={this.props.navigation} />}
            </View>
        )
    }

}

// export default HomeScreen;

