import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import HomePage from './src/pages/homePage';
import Landing from './src/pages/landing';
import Authentication from './src/pages/authenticate';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authenticated: false,
      currentPage: 'Landing',
      isReady: false,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      antfill: require('@ant-design/icons-react-native/fonts/antfill.ttf'),
      antoutline: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
      ...Ionicons.font,
    })
    this.setState({ isReady: true });
  }

  switchPage = (page) => {
    this.setState({currentPage: page});
  }

  logout = () => {
    this.setState({authenticated: false, currentPage: 'Landing'});
  }

  render() {
    if (this.state.isReady) {
      return (
        <View style={styles.container}>
          {
            this.state.currentPage === 'Landing'
              ? <Landing switchPage={this.switchPage}/>
              : (this.state.currentPage === 'Login' || this.state.currentPage === 'Sign Up')
              ? <Authentication type={this.state.currentPage} close={this.switchPage}/>
              : (this.state.currentPage === 'Character List')
                ? <HomePage logout={this.logout} />
                : <View></View>
          }

          <StatusBar style="auto"/>
        </View>
      )
    } else {
      return <AppLoading />
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5e0000',
    justifyContent: 'center',
    width: '100%'
  },
});
