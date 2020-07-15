import axios from 'axios';

export const updateResults = ( query ) => {
  return dispatch => {
	axios.get('http://api.tvmaze.com/search/shows?q=' + query)
      .then(res => {
        console.log(res.data)
        dispatch(updateDataSucess(res.data));
      })
      .catch(err => {
        console.log(err)
      });
  };
};

const updateDataSucess = (data) => ({
    type: 'updateResults',
    payload: {
      data: data
    }
  });