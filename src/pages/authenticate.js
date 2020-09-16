import React, {Component} from 'react';
// import { Button, Overlay, ThemeProvider, Text } from 'react-native-elements';
import { View, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import { Button, Toast, List, InputItem, WingBlank } from '@ant-design/react-native';
import { createForm } from 'rc-form';
import { signInWithProvider } from "../helpers/auth";
import { auth } from '../services/firebase';
import AntIcon from 'react-native-vector-icons/AntDesign';

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

    swapTitle = () => {
      if (this.props.type === 'Login') {
        return 'Sign Up';
      } else {
        return 'Login';
      }
    }

    swapPage = () => {
      this.props.close(this.swapTitle());
    }

    signInProvider = (provider) => {
      // signInWithProvider(provider)
      //   .then( (res) => console.log(res))
      //   .then( () => console.log(auth().currentUser))
      this.success();
    }

    render () {
      return (
        <View>
          <View style={styles.header}>
            <Text style={styles.headerTxt}>{this.props.type}</Text>
          </View>
          <WingBlank>
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
            <Button
              style={styles.btnWrapper}
              type='primary'
              onPress={this.success}>
              <Text style={styles.btnTxt}>{this.props.type}</Text>
            </Button>
            <Text style={styles.textStyles}>OR</Text>
            <Button
              style={styles.providerBtn}
              type='primary'
              onPress={() => this.signInProvider('goog')}>
              <AntIcon name='google' size={20}/>
              &nbsp;{this.props.type} With Google
            </Button>
            <Button
              style={styles.providerBtn}
              type='primary'
              onPress={() => this.signInProvider('git')}>
              <AntIcon name='github' size={20}/>
              &nbsp;{this.props.type} With Github
            </Button>
            <View style={styles.swapWrapper}>
                {
                  this.props.type === 'Login'
                    ? (<Text style={styles.swapTxt}>Don't have an account?    </Text>)
                    : (<Text style={styles.swapTxt}>Already have an account?    </Text>)
                }
              <TouchableOpacity onPress={this.swapPage}>
                <Text style={styles.linkBtnTxt}>{this.swapTitle()}</Text>
              </TouchableOpacity>
            </View>
          </WingBlank>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  textStyles: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    marginTop: '3%',
    marginBottom: '3%',
  },
  swapWrapper: {
    flexDirection: 'row',
    marginTop: '6%',
  },
  swapTxt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },
  linkBtnTxt: {
    color: '#f0ae45',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 20
  },
  headerTxt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
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
      width: 1,
      height: 3
    }
  },
  btnWrapper: {
    marginTop: '5%',
    marginBottom: '5%',
    // height: '60%',
  },
  providerBtn: {
    color: '#f0ae45',
    marginTop: '2%',
    marginBottom: '2%'
  }
})
