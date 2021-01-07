import { Dimensions, StyleSheet } from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    containerStyle: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0,
        borderTopWidth: 0,
        paddingBottom: 0
    },
    inputContainerStyle: {
        backgroundColor: 'rgb(240,240,240)',
        marginBottom: 0,
        height: 35,
        paddingLeft: '5%',
        borderBottomWidth: 0,
        borderRadius: 30
    },
    headingTextStyle: {
        fontSize: 14, color: 'white', fontWeight: 'bold'
    },
    textStyle: {
        fontSize: 12, color: 'white',
    },
    seperatorStyle: {
        width: 15
    },
    listSeperatorStyle: {
        height: 15
    },
    headerImageStyle: {
        height: 45,
        backgroundColor: '#29B1DB',
        width: screenWidth,
    },
    tabContainer: {
        // alignItems: 'center',
        justifyContent: 'space-between',
    },
    upperListContainer: {
        marginHorizontal: '5%',
        backgroundColor: 'white',
        marginBottom: '5%',
        height: 60,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: "#EEE",
        borderWidth: 1,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        marginTop: '2.5%',
    },
    headingStyle: {
        fontSize: 16,
        fontFamily: 'Roboto-Medium'
    },
    lowerListContainer: {
        // borderColor:'black',
        // borderWidth:1,
        marginHorizontal: '5%',
        marginTop: '5%'
    },
    lineStyle: {
        marginHorizontal: '5%',
        borderWidth: 0.3,
        color: '#7A7A7A',
    },
})