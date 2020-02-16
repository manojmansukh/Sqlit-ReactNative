import React, { Component } from 'react';
import { TouchableOpacity, Text, Button, View } from 'react-native';
import Mybutton from './Component/Mybutton'
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    handleNavigation = () => { this.props.navigation.navigate('RegisterUser') }

    render() {
        return (
            <View>

                <Mybutton
                    title="Register"
                    onPress={() => this.props.navigation.navigate('Register')}
                />
                <Mybutton
                    title="Update"
                    onPress={() => this.props.navigation.navigate('Update')}
                />
                <Mybutton
                    title="View"
                    onPress={() => this.props.navigation.navigate('View')}
                />
                <Mybutton
                    title="View All"
                    onPress={() => this.props.navigation.navigate('ViewAll')}
                />
                <Mybutton
                    title="Delete"
                    onPress={() => this.props.navigation.navigate('Delete')}
                />

            </View>

        )
    }
}
