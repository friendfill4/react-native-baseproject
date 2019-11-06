import api from './api';
export const fetchPostCategories = (payload) => {
    console.log("Fetch Post Categories API",payload);
    return api.get('post-category');        
}
export const fetchHomeSections = (payload) => {
    console.log("Fetch Home Sections API",payload);
    return api.get('home-section');        
}
export const fetchPosts = (payload) => {
    console.log("Fetch Posts API",payload);
    return api.get('post/index');        
}