import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, Button } from 'react-native';

const Mybutton = props => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#f05555',
        color: '#ffffff',
        padding: 10,
        marginTop: 36,
        marginLeft: 35,
        marginRight: 35,
    },
    text: {
        color: '#ffffff',
    },
});
export default Mybutton;