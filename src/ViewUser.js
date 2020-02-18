import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Mybutton from './Component/Mybutton'
import Mytextinput from './Component/Mytextinput'
import { searchUser } from './Services/SqliteService'

export default class ViewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student_id: '',
            student_data: ''
        }
    }

    searchUser()

    render() {
        return (
            <View>
                <Mytextinput
                    placeholder="Enter Student Id"
                    onChangeText={(text) => { this.setState({ student_id: text }) }}
                    style={{ padding: 10 }}
                />
                <Mybutton
                    title="Search User"
                    onClick={this.searchUser()}
                />
                <View style={{ marginLeft: 35, marginRight: 35, marginTop: 10 }}>
                    {/* <Text>student Id: {this.state.userData.student_id}</Text>
                    <Text>student Name: {this.state.userData.name}</Text>
                    <Text>student Contact: {this.state.userData.contact}</Text>
                    <Text>student Address: {this.state.userData.address}</Text> */}
                </View>
            </View>
        )
    }
}
