import React, {Component} from 'react';
import { Button, Overlay, ThemeProvider, Text } from 'react-native-elements';
import { View, StyleSheet  } from 'react-native'
const theme = {
  Button: {
    raised: true,
    titleStyle: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
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
      textAlign: 'center'
    }
  }
}

export default class AuthModal extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: null,
        }
    }

    shouldComponentUpdate(nextProps) {
        return this.props !== nextProps;
    }

    componentDidMount() {
      console.log(this.props);
      this.setState({
        title: this.props.type,
      })
    }

    render () {
      return (
        <View>
            <Overlay
                isVisible={this.props.visible}
                onBackdropPress={this.props.close}
                >
                  <ThemeProvider theme={theme}>
                    <View>
                      <Text h2>{this.props.type}</Text>
                    </View>  
                    <Button 
                      title="sup"
                      onPress={this.props.close}
                      />
                  </ThemeProvider>
            </Overlay>
        </View>
      );
    }
}




const styles = StyleSheet.create({
  btnTxt: {
    color: "#fff",
    fontSize: 20
  }
})