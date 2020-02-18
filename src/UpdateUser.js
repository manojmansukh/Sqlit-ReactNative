import React, { Component } from 'react';
import { Text } from "react-native";
import { searchUser } from './Services/SqliteService'

export default class UpdateUser extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    searchUser();

    render() {
        return (
            <Text>mj</Text>
        )
    }
}
