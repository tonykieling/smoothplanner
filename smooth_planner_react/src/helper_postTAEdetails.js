import axios from 'axios';

export default function postTAE(data) {
  console.log(data)
  axios.post('http://localhost:3001/api/v1/items', data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
