import React, { Component } from 'react';
import { Text, View, FlatList} from "react-native";
import { viewAllUser } from './Services/SqliteService'
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'StudentDb.db' });

export default class ViewAllUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FlatListItems: [],
        };
    }
    
    ListViewItemSeparator = () => {
        return (
            <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
        );
    };
    componentDidMount(){
        viewAllUser((snapshot)=>{
            console.log("mjjjjjjjjj",snapshot);
            this.setState({
                FlatListItems: snapshot,
                });
        })
    }
    render() {
        return (
            <View>
                <FlatList
                    data={this.state.FlatListItems}
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View key={item.user_id} style={{ backgroundColor: 'white', padding: 20 }}>
                            <Text>Id: {item.student_id}</Text>
                            <Text>Name: {item.name}</Text>
                            <Text>Contact: {item.contact}</Text>
                            <Text>Address: {item.address}</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}
