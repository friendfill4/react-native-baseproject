/**
 * IAbroad App
 * @author: Jay
 * @Url: https://www.friendfill.com
 */


export const Types = {
  POST_CATEGORY_REQUEST: 'home/POST_CATEGORY_REQUEST',
  POST_CATEGORY_SUCCESS: 'home/POST_CATEGORY_SUCCESS',
  POST_CATEGORY_FAILURE: 'home/POST_CATEGORY_FAILURE',
  HOME_SECTION_REQUEST: 'home/HOME_SECTION_REQUEST',
  HOME_SECTION_SUCCESS: 'home/HOME_SECTION_SUCCESS',
  HOME_SECTION_FAILURE: 'home/HOME_SECTION_FAILURE',
  POST_REQUEST: 'home/POST_REQUEST',
  POST_SUCCESS: 'home/POST_SUCCESS',
  POST_FAILURE: 'home/POST_FAILURE',
};

export const Creators = {

  fetchPostCategories: (email,password) => ({
    type: Types.POST_CATEGORY_REQUEST,
    payload: {},
  }),

  fetchPostCategoriesSuccess: data => ({
    type: Types.POST_CATEGORY_SUCCESS,
    payload: { data },
  }),

  fetchPostCategoriesFailure: (data) => ({
    type: Types.POST_CATEGORY_FAILURE,
    payload: { data }
  }),
  
  fetchHomeSections: (email,password) => ({
    type: Types.HOME_SECTION_REQUEST,
    payload: {},
  }),

  fetchHomeSectionsSuccess: data => ({
    type: Types.HOME_SECTION_SUCCESS,
    payload: { data },
  }),

  fetchHomeSectionsFailure: (data) => ({
    type: Types.HOME_SECTION_FAILURE,
    payload: { data }
  }),

  fetchPosts: (email,password) => ({
    type: Types.POST_REQUEST,
    payload: {},
  }),

  fetchPostsSuccess: data => ({
    type: Types.POST_SUCCESS,
    payload: { data },
  }),

  fetchPostsFailure: (data) => ({
    type: Types.POST_FAILURE,
    payload: { data }
  }),
};
