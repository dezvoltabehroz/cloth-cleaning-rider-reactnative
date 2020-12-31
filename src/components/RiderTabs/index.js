import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const RiderTabs = ({ tabs, active, onTabChange }) => (
    <View style={styles.container}>
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: 'row' }}>
            {
                tabs.map((tab, i) => (
                    <React.Fragment key={i}>
                        <TouchableOpacity
                            style={tabs.length == 2 ? [styles.innerContainer, { paddingHorizontal: 35, backgroundColor: i === active ? '#F8F8F8' : 'white' }] : [styles.innerContainer, { marginHorizontal: 10 }]}
                            onPress={() => onTabChange(i)}>
                            <Text style={{ fontFamily: "Roboto-Medium", fontSize: 14, color: i === active ? '#29B1DB' : '#7A7A7A' }}>{tab}</Text>
                        </TouchableOpacity>
                        {
                            i !== tabs.length - 1 ?
                                < View style={{ borderRadius: 0, borderColor: 'black', borderWidth: 0, marginVertical: 20 }} /> : null
                        }
                    </React.Fragment>
                ))
            }
        </ScrollView>
    </View>
);
const styles = StyleSheet.create({
    container: {
        height: 60,
        overflow: 'hidden',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center'
    },
    innerContainer: {
        flex: 0.55,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

})

export default RiderTabs;
