import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, ColorPropType } from 'react-native';
import { Text } from 'react-native-elements';
import Button from '@ant-design/react-native/lib/button';
import Authenticate from '../pages/authenticate';

export default class Landing extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showAuth: false
      }
    }

    showAuth = (type) => {
      this.props.switchPage(type);
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.around}>
                  <Text h1 style={styles.title}>
                    Trailfinder 2 Character Creator
                  </Text>
                </View>
                <View style={styles.btnWrapper}>
                  <Button 
                    onPress={ () => this.showAuth('Login')}
                    type="primary"
                    style={styles.btnAuth}
                    >
                    <Text>Login</Text>
                  </Button>
                </View>

                <View style={styles.btnWrapper}>
                  <Button 
                    type="primary"
                    onPress={ () => this.showAuth('Sign Up')}
                    style={styles.btnAuth}
                    >
                    <Text>Sign Up</Text>
                  </Button>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5e0000',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  around: {
    marginBottom: '15%'
  },
  title: {
    color: '#fff',
    textAlign: 'center'
  },
  btnAuth: {
    backgroundColor: '#f0ae45',
      borderRadius: 20,
      width: '100%',
      height: '100%',
      shadowRadius: 60,
      shadowOpacity: 0.3,
      shadowColor: "#fff",
      shadowOffset: {
        widht: 1,
        height: 3
      }
  },
  btnWrapper: {
    marginTop: '5%',
      marginBottom: '5%',
      width: '66%',
      height: '10%',
  }
  
});