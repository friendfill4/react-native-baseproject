/**
 * IAbroad App
 * @author: Jay
 * @Url: https://www.friendfill.com
 */

import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements'; 
import { PropTypes } from 'prop-types';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import colors from '../styles/colors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as HomeCreators } from '../redux/actions/home';
import PostCategories from '../components/explore/PostCategories';


class ExploreContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postCategories:[],
      loadingPostCategories: false,
      fetchPostCategoriesFailed:false
    };
    this.props.fetchPostCategories();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    const { data } = this.props;
    return (
      <View style={styles.wrapper}>
        <SearchBar
          placeholder="Type Here..."
        />
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.scrollViewContent}
        > 
          <Text style={styles.heading}>Explore Us</Text>
          <View style={styles.categories}>
            <PostCategories postCategories={this.props.postCategories} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollview: {
    paddingTop: 80,
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
  categories: {
    marginBottom: 40,
    paddingLeft:20,
    paddingRight:20,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    marginBottom:5,
    color: colors.gray04,
  },
});


const mapStateToProps = (state) => {
  console.log("<MAP>",state);
  return {
    postCategories:state.home.postCategories,
    loadingPostCategories:state.home.loadingPostCategories,
    fetchPostCategoriesFailed:state.home.fetchPostCategoriesFailed,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({},HomeCreators), dispatch);
ExploreContainer.propTypes = {
  fetchPostCategories:PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);