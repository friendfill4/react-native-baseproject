/**
 * IAbroad App
 * @author: Jay
 * @Url: https://www.friendfill.com
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import colors from '../styles/colors';

export default class SearchBar extends Component {
  render() {
  	return (
    <View style={styles.wrapper}>
      <View style={styles.searchContainer}>
        <Icon
          name="ios-search"
          size={25}
          color={colors.gray02}
          style={styles.searchIcon}
        />
        <TextInput underlineColorAndroid="transparent"  style={styles.textInput} placeholder='Try "Cape Town'>
        </TextInput>
      </View>
    </View>
  	);
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '100%',
    height: 80,
    zIndex: 99,
  },
  searchContainer: {
  	display: 'flex',
  	borderWidth: 1,
  	borderColor: colors.gray03,
  	backgroundColor: colors.white,
  	shadowColor: 'rgba(0,0,0,0.1)',
  	shadowOffset: { width: 0, height: 5 },
  	shadowOpacity: 0.7,
  	shadowRadius: 10,
  	borderRadius: 3,
  	height: 40,
  	marginTop: 28,
  	marginLeft: 21,
    marginRight: 21,
    flexDirection:'row',
  },
  searchIcon: {
    alignSelf:'center',
    alignContent:'center',
    flex:0.1,
    textAlign:"center"
  },
  textInput: {
    padding:6,
    flex:1,
    textAlignVertical:'center',
    color: colors.gray02,    
  },
});
