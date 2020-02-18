import React from 'react';
import { View ,Alert} from 'react-native';
import Mytextinput from './Component/Mytextinput'
import Mybutton from './Component/Mybutton'
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'Database.db' });
import {  registerStudent } from './Services/SqliteService'

export default class RegisterUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            name: '',
            contact: '',
            address: '',
        }
    }
   
    handleNavigation =()=>{
        this.props.navigation.navigate('Register')
    }
    RegisterStudent = () => {
        registerStudent(this.state.name,this.state.address,this.state.contact,this.props);

    };
    render() {
        
        return (
            <View>
                <View style={{ top: 100 }}>
                    <Mytextinput
                        placeholder={"Enter User Name"}
                        onChangeText={(text) => { this.setState({ name: text }) }}
                        style={{ padding: 10 }}
                    />
                    <Mytextinput
                        placeholder={"Enter Contact Details"}
                        onChangeText={(text) => { this.setState({ contact: text }) }}
                        maxLength={10}
                        keyboardType="numeric"
                        style={{ padding: 10 }}
                    />
                    <Mytextinput
                        placeholder={"Enter  Address"}
                        onChangeText={(text) => { this.setState({ address: text }) }}
                        maxLength={225}
                        numberOfLines={5}
                        multiline={true}
                        style={{ textAlignVertical: 'top', padding: 10 }}
                    />
                </View>
                
                <View style={{top:150}}>
                    <Mybutton
                        title="Submit"
                        onPress={() => this.RegisterStudent()}
                    />
                </View>
                   
            </View>
        )
    }
}
