import React from 'react';
import { Text } from 'react-native';
import { List } from '@ant-design/react-native';

const CharListItem = props => {
  return (
    <List.Item arrow="horizontal" onPress={ () => console.log('List item Pressed:',props)}>
      {props.name}
      <List.Item.Brief>Some Description</List.Item.Brief>
    </List.Item>
  )
}

export default CharListItem;

