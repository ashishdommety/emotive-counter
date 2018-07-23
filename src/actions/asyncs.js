import axios from 'axios'; //  import axios

import * as appleSearch from './index';

const apiKey = 'pixabay api key here';

export const getApples = function getApples(){
  return function(dispatch){
    dispatch(appleSearch.start());
    axios.get('https://pixabay.com/api/?key='+ apiKey +'&q=apples&image_type=photo&pretty=true')
      .then((response) => {
        
        let images = [];
        let hits = response.data.hits;

        for(let i=0; i < response.data.hits.length; i++){
          images.push(hits[i].previewURL);
        }
        
        dispatch(appleSearch.end(images));
      })
      .catch((err) => {
        dispatch(appleSearch.broken());
      })
  }
}
