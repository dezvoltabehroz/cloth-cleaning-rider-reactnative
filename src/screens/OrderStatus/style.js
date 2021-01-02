import { Dimensions, StyleSheet } from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    headerImageStyle: {
        height: 40,
        width: screenWidth,
    },
    upperListContainer: {
        marginHorizontal: '5%',
        height: 70,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 1,
        borderColor: "#EEE",
        borderWidth: 0.3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
    },
    tabContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    upperContainer: {
        marginHorizontal: '5%',
        paddingVertical: '5%',
        paddingHorizontal: '5%',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        borderColor: "#EEE",
        borderWidth: 1,

    },
    checkButtonTextStyle: {
        color: 'white',
        textAlign: 'center'
    },
    checkoutInnerContainer: {
        marginHorizontal: '5%',
        bottom: '5%'
    },
    lineStyle: {
        borderWidth: 0.5,
        opacity: 0.3,
        marginVertical: '2.5%',
        borderColor: '#7A7A7A'
    },
    checkoutItemStyle: {
        flexDirection: 'row',
        marginVertical: '2.5%',
        justifyContent: 'space-between'
    },
    checkoutTextStyle: {
        color: '#7A7A7A',
        fontFamily: 'Roboto-Light'

    },
    totalTextStyle: {
        color: '#374B5C',
        fontSize: 14,
        fontFamily: 'Roboto-Medium'
    },
    totalPriceTextStyle: {
        color: '#0DA7DF',
        fontSize: 14,
        fontFamily: 'Roboto-Medium'
    },
    checkoutButtonContainer: {
        borderRadius: 35,
        height: 33,
        width: 140,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        justifyContent: 'center',
    },
    content: {
        backgroundColor: 'white',
        padding: 22,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    tipContainer: {
        height: 54,
        // backgroundColor: THEME.PRIMARY_COLOR,
        justifyContent: "center",
        alignItems: "center",
        width: screenWidth * 0.35,
        borderRadius: 7
    },

    iconContainer: {
        backgroundColor: '#E2E2E2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        height: 25,
        width: 25
    },
    discountTextStyle: {
        color: '#A50808'
    },
    headingText: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular'
    },
    listTextStyle: {
        fontSize: 12,
        color: '#7A7A7A',
        fontFamily: 'Roboto-Regular'
    },
    itemContainer: {
        // marginTop: '2.5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemNameContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    itemNameTextStyle: {
        color: '#000',
        marginVertical: '2.5%',
        fontSize: 12,
        fontFamily: 'Roboto-Regular'
    },
    itemQuantityContainer: {
        flexDirection: 'column',
        // justifyContent: 'space-between'
    },
    listSeperatorStyle: {
        height: 5,
        marginTop: '2%',
        borderTopWidth: 0.5,
        opacity: 0.3,
        borderTopColor: '#707070'
    },
    cardContainer: {
        paddingVertical: '5%',
        marginTop: '5%',
        backgroundColor: 'white',
        // marginHorizontal: '5%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        borderColor: "#EEE",
        borderWidth: 0.3,
        bottom: '10%',
        paddingHorizontal: '5%',
    },
    clearTextStyle: {
        color: '#0DA7DF',
        textAlign: 'center',
        fontFamily: 'Nunito-SemiBold'
    },
    clearButtonContainer: {
        borderRadius: 35,
        height: 33,
        width: 95,
        borderWidth: 1,
        borderColor: '#0DA7DF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5%'
    },
    saveButtonContainer: {
        borderRadius: 35,
        height: 33,
        width: 95,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        justifyContent: 'center',
    },
})