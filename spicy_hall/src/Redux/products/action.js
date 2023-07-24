import axios from "axios";
import {
  COMMENT_ADD,
  IsError,
  IsLoading,
  LIKE_ADD,
  PRODUCT_REQUEST,
  PRODUCT_REQUEST_NON_VEG,
  PRODUCT_REQUEST_VEG,
  SINGLE_PRODUCT_REQUEST,
  // PRODUCT_REQUEST,
  // PRODUCT_REQUEST_ARRIVAL,
  // PRODUCT_REQUEST_BRACELETS,
  // PRODUCT_REQUEST_EARRINGS,
  // PRODUCT_REQUEST_RINGS,
  // SINGLE_PRODUCT_REQUEST,
  TOTALPAGE,
} from "./actionTypes";
const Url="https://spicy-hall.onrender.com/recipes"


// const Url="http://localhost:3000/recipes"

export const getProducts = (obj, page) => (dispatch) => {
  dispatch({ type: IsLoading });
  axios
    .get(
      `${Url}`,
      obj
    )
    .then((data) => {
      // console.log(data.headers["x-total-count"])
      dispatch({ type: TOTALPAGE, payload: data.headers["x-total-count"] });
      console.log(data,"ddd")
      dispatch({ type: PRODUCT_REQUEST, payload: data.data });
    })
    .catch((error) => {
      dispatch({ type: IsError });
    });
};

// export const getProductsVeg = () => (dispatch) => {
//   dispatch({ type: IsLoading });
//   axios
//     .get( `${Url}`)
//     .then((data) => {
//       dispatch({ type:PRODUCT_REQUEST_VEG, payload: data.data });
//       // console.log(data.data)
//     })
//     .catch((error) => {
//       dispatch({ type: IsError });
//     });
// };
// export const getProductsNonVeg = () => (dispatch) => {
//   dispatch({ type: IsLoading });
//   axios
//     .get( `${Url}`)
//     .then((data) => {
//       dispatch({ type: PRODUCT_REQUEST_NON_VEG, payload: data.data });
//       // console.log(data.data)
//     })
//     .catch((error) => {
//       dispatch({ type: IsError });
//     });
// };

export const getSingleProducts = (id) => (dispatch) => {
  console.log(id,"inside seinglefunction")
  dispatch({ type: IsLoading });
  axios
    .get( `${Url}/${id}`)
    .then((data) => {

      dispatch({ type: SINGLE_PRODUCT_REQUEST, payload: data.data });
      console.log(data.data)
    })
    .catch((error) => {
      dispatch({ type: IsError });
    });
};





export const postComment = ({ id, commentData }) => (dispatch) => {
  console.log("2nd",id);
  dispatch({ type: IsLoading });

  // Replace 'YOUR_TOKEN_HERE' with the actual token value you have
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGJjY2YzNjdhMGRmNmFlNjBjN2M3YmEiLCJ1c2VybmFtZSI6InJvaGl0IiwiaWF0IjoxNjkwMDk2NDc4LCJleHAiOjE2OTA3MDEyNzh9.pmloPIvpOhJnFWU3V6BlA5gh_2f4MmcdLU2MJfcY8MM';

  // Add the token to the request headers
  const headers = {
    Authorization: `Bearer ${token}`
  };

  // const id=_id.toString()
// console.log(token,id)
  axios
    .patch(`${Url}/comment/${id}`, commentData, { headers }) // Make sure `Url` is defined and points to the correct API endpoint
    .then((data) => {
      console.log(data, "response");
      dispatch({ type: COMMENT_ADD, payload: data.data });
    })
    .catch((error) => {
      dispatch({ type: IsError });
    });
};



// export const getProductsBracelets = () => (dispatch) => {
//   dispatch({ type: IsLoading });
//   axios
//     .get( `${Url}`)
//     .then((data) => {
//       dispatch({ type: PRODUCT_REQUEST_BRACELETS, payload: data.data });
//       // console.log(data.data)
//     })
//     .catch((error) => {
//       dispatch({ type: IsError });
//     });
// };







// //material--Diamond,Pearl.Gold,Gemstone,Solitaire
