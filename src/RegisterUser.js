import React from 'react';
import { View ,Alert} from 'react-native';
import Mytextinput from './Component/Mytextinput'
import Mybutton from './Component/Mybutton'
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'Database.db' });

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
        console.log("mjjjjj",this.state.name,this.state.address,this.state.contact);
        var that = this;
        const { name } = this.state;
        const { contact } = this.state;
        const { address } = this.state;
        //alert(student_name, student_contact, student_address);
        if (name) {
            if (contact) {
                if (address) {
                    
                    db.transaction(function (tx) {
                        console.log("ererer");

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
                                                onPress: () => that.props.navigation.navigate('HomeScreen')
,
                                               // onPress: () => console.log('Cancel Pressed'),  
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
    };
    render() {
        console.log(this.props);
        
        return (
            <View>
                <View style={{ top: 100 }}>
                    <Mytextinput
                        placeholder={"Enter User Name"}
                        onChangeText={(text) => { this.setState({ name: text },()=>{console.log("this",this.state.name);
                        }) }}
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
