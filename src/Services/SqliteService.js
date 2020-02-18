import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'StudentDb.db' });
import { View, Alert } from 'react-native';


export function databaseOpen() {
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

export function registerStudent(name, contact, address, props) {
    console.log(name);

    if (name) {
        if (contact) {
            if (address) {

                db.transaction(function (tx) {
                    tx.executeSql(
                        'INSERT INTO stud_Db (name, contact, address) VALUES (?,?,?)',
                        [name, contact, address],
                        (tx, results) => {
                            console.log('Results', results.rowsAffected);
                            if (results.rowsAffected > 0) {
                                Alert.alert(
                                    'Success',
                                    'You are Registered Successfully',
                                    [
                                        {
                                            text: 'Ok',
                                            onPress: () => props.navigation.navigate('HomeScreen')
                                        },
                                    ],
                                    { cancelable: false }
                                );
                            } else {
                                alert('Registration Failed');
                            }
                        }
                    );
                });
            } else {
                alert('Please fill Address');
            }
        } else {
            alert('Please fill Contact Number');
        }
    } else {
        alert('Please fill Name');
    }
}

export function viewAllUser(callback) {
    db.transaction(tx => {
        tx.executeSql('SELECT * FROM stud_Db', [], (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i) {
                temp.push(results.rows.item(i));
            }
            callback(temp)
        });
    });
}

export function searchUser(student_id, callback) {
    db.transaction(tx => {
        tx.executeSql('SELECT * FROM stud_Db where student_id = ?', [12], (tx, results) => {
            var len = results.rows.length;
            console.log('len', len);
            if (len > 0) {
                console.log(results.rows.item(0));
                
                callback(results.rows.item(0));
            } else {
                alert('No user found');
                this.setState({
                    userData: '',
                });
            }
        })
    })
}