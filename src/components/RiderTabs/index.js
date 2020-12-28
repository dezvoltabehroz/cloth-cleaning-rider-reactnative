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
                            style={tabs.length == 2 ? [styles.innerContainer, { marginHorizontal: 40 }] : [styles.innerContainer, { marginHorizontal: 10 }]}
                            onPress={() => onTabChange(i)}>
                            <Text style={{ fontFamily: "Roboto-Medium", fontSize: 12, color: i === active ? '#29B1DB' : '#7A7A7A' }}>{tab}</Text>
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
        height: 35,
        display: 'flex',
        justifyContent: 'center'
    },
    innerContainer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },

})

export default RiderTabs;
