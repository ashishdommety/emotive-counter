import axios from 'axios'; //  import axios

import * as appleSearch from './index';

export const getApples = function getApples(){
  return function(dispatch){
    dispatch(appleSearch.start());
    axios.get('https://pixabay.com/api/?key=5207088-f6eeef2e4b8e5be697c01704f&q=apples&image_type=photo&pretty=true')
      .then((response) => {
        dispatch(appleSearch.end());
        console.log(response.data);
      })
      .catch((err) => {
        dispatch(appleSearch.broken())
      })
  }
}
