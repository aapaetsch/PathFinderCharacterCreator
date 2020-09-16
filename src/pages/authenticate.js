import React, {Component} from 'react';
// import { Button, Overlay, ThemeProvider, Text } from 'react-native-elements';
import { View, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import { Button, Toast, List, InputItem, WingBlank } from '@ant-design/react-native';
import { signInWithProvider } from "../helpers/auth";
import { auth } from '../services/firebase';
import AntIcon from 'react-native-vector-icons/AntDesign';

export default class Authentication extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: null,
          email: null,
          password: null,
          password2: null
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
      signInWithProvider(provider)
        .then( (res) => console.log(res))
        .then( () => console.log(auth().currentUser))
        .then(() => this.success() );
    }

    changeEmail = (email) => {
      this.setState({email: email});
    }

    changePassword = (pass) => {
      this.setState({password: pass});
    }

    retypePassword = (pass2) => {
      this.setState( {password2: pass2});
    }

    onFinish = () => {
      console.log(this.state);
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
                onChange={res => this.changeEmail(res)}
                clear
                placeholder="Email">
                <AntIcon name='user' size={20}/>
              </InputItem>
              <InputItem
                onChange={res => this.changePassword(res)}
                clear
                placeholder="Password">
                <AntIcon name='lock1' size={20}/>
              </InputItem>
                {
                  this.props.type === 'Sign Up'
                  && (<InputItem
                        onChange={ res => this.retypePassword(res)}
                        clear
                        placeholder="Retype Password">
                        <AntIcon name='lock1' size={20}  color='#f0ae45'/>
                    </InputItem>
                    )
                }
            </List>
            <Button
              style={styles.loginBtn}
              type='primary'
              onPress={this.onFinish}>
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
            <Button
              style={styles.providerBtn}
              type='primary'
              onPress={() => this.signInProvider('apple')}>
              <AntIcon name='apple1' size={20}/>
              &nbsp;{this.props.type} With Apple
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
    alignSelf: 'center'
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
  loginBtn: {
    marginTop: '5%',
    marginBottom: '5%',
    backgroundColor: '#f0ae45',
    borderColor: '#f0ae45',
    // height: '60%',
  },
  providerBtn: {
    backgroundColor: '#f0ae45',
    borderColor: '#f0ae45',
    marginTop: '2%',
    marginBottom: '2%'
  }
})
