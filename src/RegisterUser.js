import React, { Component } from 'react';
import { Text, View, TouchableOpacityBase } from "react-native";
import Mytextinput from './Component/Mytextinput'
export default class RegisterUser extends Component {
    constructor(props){
        super(props);
        this.state ={
            
            student_name: '',
            student_contact: '',
            student_address: '',
        }
    }
    render() {
        return (
                <View>
                    <Mytextinput 
                    placeholder={"Enter User Name"}
                    onChangeText={this.setState({student_name})}
                    />

                    
                </View>
        )
    }
}
