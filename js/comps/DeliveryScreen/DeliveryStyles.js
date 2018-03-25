import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    scheduluedTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    timeRange: {
        backgroundColor: 'rgba(244, 120, 139, 1)',
        padding: 9
    },

    roundButton: {
        padding: 15,
        backgroundColor: 'rgba(66, 97, 144, 1)',
        borderRadius: 30,
        width: 295,
        height: 50,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 21
    },

    roundButtonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 17
    },

    mapContainer: {
        flex: 0.48,
        backgroundColor: 'lightblue'
    },

    detailsContainer: {
        flex: 0.52,
        paddingHorizontal: 25
    },

    veg: {
        // color: 'rgba(255, 255, 255, 0.3)',
        backgroundColor: 'rgb(57, 229, 200)',
        width: 70,
        height: 70, 
        left: 17,
        top: 0,
        borderRadius: 35
    },

    idText: {
        fontSize: 8,
        color: 'rgba(153, 153, 153, 1)',
        fontWeight: 'bold',
        paddingTop: 49
    },

    originMarker: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: 'rgba(66, 97, 144, 1)'
    },

    destinationMarker: {
        height: 21,
        width: 21,
        borderRadius: 21 / 2,
        backgroundColor: 'rgba(57, 229, 200, 1)'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 16
    },

    subtitle: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    distance: {
        color: 'rgba(244, 120, 139, 1)',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 7,
    },

    phone: {
        backgroundColor: 'rgba(66, 97, 144, 1)',
        width: 51, 
        height: 51,
    },

    separator: {
        height: 3,
        backgroundColor: 'rgba(222, 224, 220, 1)',
        marginTop: 15,
        marginBottom: 12
    },

    shadow: {
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.8,
    }
});