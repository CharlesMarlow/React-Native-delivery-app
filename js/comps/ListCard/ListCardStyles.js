import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        backgroundColor: 'rgba(244, 247, 246, 1)',
        marginBottom: 12,
        paddingBottom: 30,
    },

    boxShadow: {
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.8,
    },

    wrapper: {
        backgroundColor: 'rgba(44, 183, 161, 1)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6,
        paddingBottom: 6,
    },

    row: {
        justifyContent: 'space-between'
    },

    cardTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },

    est: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'flex-end'
    },

    content: {
        paddingLeft: 12,
        paddingRight: 12,
    },   

    idTxt: {
        color: 'rgba(153, 153, 153, 1)',
        fontSize: 8,
        fontWeight: 'bold',
        paddingTop: 7,
    },

    clientName: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    },

    clientAddress: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
    },

    icon: {
        height: 45,
        width: 45,
        borderRadius: 30,
        backgroundColor: 'rgba(57, 229, 200, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 225,
        bottom: 34
    }
})
