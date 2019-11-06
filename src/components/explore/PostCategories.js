/**
 * IAbroad App
 * @author: Jay
 * @Url: https://www.friendfill.com
 */

import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Image,
  View,
  Text,
} from 'react-native';
import colors from '../../styles/colors';
import iPhoneSize from '../../helpers/utils';

const size = iPhoneSize();
let cardWidth = 120;
let cardHeight = 80;
let cardMargin = 10;

if (size === 'small') {
  cardWidth = 180;
  cardHeight = 90;
  cardMargin = 4;
} else if (size === 'large') {
  cardWidth = 300;
  cardHeight = 120;
}

export default class PostCategories extends Component {
  get PostCategories() {
    const { postCategories } = this.props;
    return postCategories.map((category, index) => (
      <TouchableHighlight
        style={styles.card}
        key={`category-item-${category.id}`}
      >
        <View style={styles.card_content}>
          <Image
          source={{uri:category.icon_image_media.full_path}}
          style={styles.image}
          /> 
          <Text style={styles.text}>{category.name}</Text>
        </View>
      </TouchableHighlight>
    ));
  }

  render() {
    console.log(size);
  	return (
    <ScrollView
      contentContainerStyle={styles.wrapper}
      horizontal
      showHorizontalScrollIndicator={false}
    >
      {this.PostCategories}
    </ScrollView>
  	);
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: cardWidth,
    height: cardHeight,
    marginRight: cardMargin,
  },
  card_content:{
    flex:1,
    flexDirection:"column",
  },
  image: {
    flex: 1,
  },
  text:{
    width:cardWidth,
    height:cardHeight,
    top:0,
    textAlignVertical:'center',
    position:'absolute',
    backgroundColor:'#00000055',
    color:'#FFF',
    alignSelf: 'stretch',
    textAlign: 'center',
    justifyContent:'center'
  }
});
