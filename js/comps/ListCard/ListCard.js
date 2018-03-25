// React
import React, {Component} from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Vendors
import moment from 'moment';

// Comps & styles
import { styles } from './ListCardStyles';

// check moment after done

function card(props) {

    // screen data
    var { data } = props;
    var date = new Date(data.from);

    // screen assets
    let locationIcon = require('../../../assets/img/location.png')

    return (
        <TouchableOpacity onPress={() => { props.onCardPress(data)}}>
            <View style={[styles.boxShadow, styles.container]}>
                <View style={styles.wrapper}>
                    <View style={styles.row}>
                        <Text style={styles.est}>Arrive Between</Text>
                        <Text style={styles.cardTitle}>
                            {moment(date).format('H:mm')} - {moment(data.to).format('H:mm')}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.cardTitle}>
                            {moment(date).format('dddd')}
                        </Text>
                        <Text style={styles.cardTitle}>
                            {moment(date).format('DD.MM.YYYY')}
                        </Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.idTxt}>ID {data.humanId}</Text>
                    <Text style={styles.clientName}>{data.client.name}</Text>
                    <Text style={styles.clientAddress}>
                        {data.address.street} {data.address.number} ,{data.address.city}
                    </Text>
                </View>
                <Image style={[styles.boxShadow, styles.icon]} source={ locationIcon }/>
            </View>
        </TouchableOpacity>
    )
}

export default card

