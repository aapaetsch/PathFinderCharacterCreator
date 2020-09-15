import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Text, ThemeProvider } from 'react-native-elements';
import AuthModal from '../components/authenticate';

const theme = {
  Button: {
    raised: true,
    titleStyle: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 40
    },
    buttonStyle: {
      backgroundColor: '#f0ae45',
      borderRadius: '20px',
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
    containerStyle: {
      marginTop: '5%',
      marginBottom: '5%',
      width: '66%',
      height: '10%',
    
    }
  },
  Text: {
    style: {
      color: '#fff',
      textAlign: 'center'
    }
  }
};

export default class Landing extends Component {
    constructor(props) {
      super(props);
      this.state = {
        authType: null,
        showAuth: false
      }
    }

    showAuth = (type) => {
      this.setState({ authType: type, showAuth: true }, () => console.log(this.state));
    }

    hideAuth = () => {
      this.setState({ showAuth: false });
    }

    render () {
        return (
            <View style={styles.container}>
              <ThemeProvider theme={theme}>
                <View style={styles.around}>
                  <Text h1>
                    Pathfinder 2 Character Creator
                  </Text>
                </View>
                <Button 
                  title="Login"
                  onPress={ () => this.showAuth('Login')}
                  />
                <Button 
                  title="Sign Up"
                  onPress={ () => this.showAuth('Sign Up')}/>
              </ThemeProvider>
              <AuthModal 
                type={this.state.authType}
                visible={this.state.showAuth}
                close={this.hideAuth}
                />
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
  }
  
});