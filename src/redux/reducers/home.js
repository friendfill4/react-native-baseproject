import Immutable from 'seamless-immutable';
import {Types} from '../actions/home';
const initialState = Immutable({
  postCategories:[],
  homeSections:[],
  posts:[],
  loadingPostCategories: false,
  loadingHomeSections: false,
  loadingPosts: false,
  fetchPostCategoriesFailed:false,
  fetchHomeSectionsFailed:false,
  fetchPostsFailed:false
});

const home = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.POST_CATEGORY_REQUEST:
      return {
        ...state,
        postCategories: [],
        loadingPostCategories: true,
        fetchPostCategoriesFailed:false
      };

    case Types.POST_CATEGORY_SUCCESS:
      return {
        ...state,
        postCategories: payload.data,
        loadingPostCategories: false,
        fetchPostCategoriesFailed:false
      };

    case Types.POST_CATEGORY_FAILURE:
      return {
        ...state,
        postCategories:[],
        loadingPostCategories: false,
        fetchPostCategoriesFailed:true
      };
      case Types.HOME_SECTION_REQUEST:
        return {
          ...state,
          homeSections: [],
          loadingHomeSections: true,
          fetchHomeSectionsFailed:false
        };
  
      case Types.HOME_SECTION_SUCCESS:
        return {
          ...state,
          homeSections: payload.data,
          loadingHomeSections: false,
          fetchHomeSectionsFailed:false
        };
  
      case Types.HOME_SECTION_FAILURE:
        return {
          ...state,
          homeSections:[],
          loadingHomeSections: false,
          fetchHomeSectionsFailed:true
        };
      case Types.POSTS_REQUEST:
        return {
          ...state,
          posts: [],
          loadingPosts: true,
          fetchPostsFailed:false
        };
  
      case Types.POSTS_SUCCESS:
        return {
          ...state,
          posts: payload.data,
          loadingPosts: false,
          fetchPostsFailed:false
        };
  
      case Types.POSTS_FAILURE:
        return {
          ...state,
          posts:[],
          loadingPosts: false,
          fetchPostsFailed:true
        };
    default:
      return state;
  }
};

export {
  home
};
