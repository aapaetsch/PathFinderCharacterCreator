import React, { Component } from 'react';
import { Button, StyleProvider } from 'native-base';
import { View, StyleSheet } from 'react-native';
import { Drawer } from '@ant-design/react-native';


export default class BaseStatsDrawer extends Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.props !== nextProps;
  }

  render () {
    return (
      <View style={{height: '100%', width: '100%'}}>
        <Drawer
          open={this.props.open}
          docked={true}
          style={styles.main}
          contentStyle={styles.content}
          overlayStyle={styles.overlay}
          sidebar={this.props.sidebar}
        >
          {this.props.children}
        </Drawer>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  content: {
    textAlign: 'center',
    backgroundColor: '#000000',
  },
  main: {
    minHeight: '100%',
    minWidth: '100%',
    backgroundColor: '#000000',
    color: '#A6A6A6'
  },
  overlay:{
    backgroundColor: '#000000',
    color: '#A6A6A6'
  }
})
