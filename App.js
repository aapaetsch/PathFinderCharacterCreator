import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import HomePage from './src/pages/homePage';
import Landing from './src/pages/landing';
import Authentication from './src/pages/authenticate';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authenticated: false,
      currentPage: 'Landing'
    }
  }

  switchPage = (page) => {
    this.setState({currentPage: page});
  }

  logout = () => {
    this.setState({authenticated: false, currentPage: 'Landing'});
  }

  render() {
    
    return (
        <View style={styles.container}>
          {this.state.currentPage === 'Landing'
            ? <Landing switchPage={this.switchPage}/>
            : (this.state.currentPage === 'Login' || this.state.currentPage === 'Sign Up')
            ? <Authentication type={this.state.currentPage} close={this.switchPage}/>
            : (this.state.currentPage === 'Character List')
            ? <HomePage />
            : <View></View>
          }
        
          <StatusBar style="auto"/>
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
  },
});
