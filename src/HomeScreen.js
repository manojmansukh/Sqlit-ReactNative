import React, { Component } from 'react';
import { View } from 'react-native';
import Mybutton from './Component/Mybutton'
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'StudentDb.db' });
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        db.transaction(function (txn) {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='stud_Db'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS stud_Db', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS stud_Db(student_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), contact INT(10), address VARCHAR(255))',
                            []
                        );
                        console.log("db");
                        
                    }
                }
            );
        });
    }

    render() {
        console.log(this.props);

        return (
            <View style={{top:100}}>

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
