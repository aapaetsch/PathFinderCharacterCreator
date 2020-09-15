import React, {Component} from 'react';
// import { Button, Overlay, ThemeProvider, Text } from 'react-native-elements';
import { View, StyleSheet, Text  } from 'react-native';
import { Button, Toast, List, InputItem } from '@ant-design/react-native/';
import Input from '@ant-design/react-native/lib/input-item/Input';
import { createForm } from 'rc-form';

export default class Authentication extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: null,
        }
    }

    shouldComponentUpdate(nextProps) {
        return this.props !== nextProps;
    }
    componentDidMount(){
      console.log(this.props)
    }



    success = () => {
      this.props.close('Character List')
    }

    render () {
      return (
        <View styles={styles.loginWrapper}>
          <View style={styles.header}>
            <Text h1 style={styles.headerTxt}>{this.props.type}</Text>
          </View>
          <List>
            <InputItem 
              clear
              placeholder="User Name"
              />
            <InputItem
              clear
              placeholder="Password"
              />
              {
                this.props.type === 'Sign Up'
                && (<InputItem
                      clear
                      placeholder="Retype Password"
                      />)
              }


          </List>
          <View styles={styles.loginWrapper}>
          <Button 
            type='primary'
            onPress={this.success}
            >
            <Text style={styles.btnTxt}>{this.props.type}</Text>
          </Button>
          </View>

          
        </View>
        
      );
    }
}




const styles = StyleSheet.create({
  headerTxt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 35
  },
  header: {
    marginBottom: '20%'
  },
  btnTxt: {
    fontSize: 24,
    color: '#fff'
  },
  btnAuth: {
    backgroundColor: '#f0ae45',
    borderRadius: 20,
    
    height: '20%',
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
      height: '60%',
  },
  loginWrapper: {
    width: '100%',
  }
})