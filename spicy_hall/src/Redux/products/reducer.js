
import {
  COMMENT_ADD,
    IsError,
    IsLoading,
    PRODUCT_REQUEST,
    PRODUCT_REQUEST_ARRIVAL,
    PRODUCT_REQUEST_BRACELETS,
    PRODUCT_REQUEST_EARRINGS,
    PRODUCT_REQUEST_NON_VEG,
    PRODUCT_REQUEST_RINGS,
    PRODUCT_REQUEST_VEG,
    SINGLE_PRODUCT_REQUEST,
    TOTALPAGE,
  } from "./actionTypes";
  
  // import { isError, isLoading } from "./actionTypes"
  // type statetype={
  //     isLoading: boolean;
  //     isError: boolean;
  //     products:[];
  // }
  const initialState = {
    isLoading: false,
    products: [],
    isError: false,
    singlePageData: {},
    totalpages: "",
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case IsLoading:
        return { ...state, isLoading: true, isError: false };
      case IsError:
        return { ...state, isLoading: false, isError: true };

      // case TOTALPAGE:
      //   return { ...state, isLoading: false, totalpages: action.payload };
      case PRODUCT_REQUEST:
        return {
          ...state,
          isLoading: false,
          isError: false,
          products: action.payload,
        };
      case PRODUCT_REQUEST_VEG:
        return {
          ...state,
          isLoading: false,
          isError: false,
          products: action.payload,
        };
      case PRODUCT_REQUEST_NON_VEG:
        return {
          ...state,
          isLoading: false,
          isError: false,
          products: action.payload,
        };
// Update the case statement to handle COMMENT_ADD
case COMMENT_ADD:
  return {
    ...state,
    isLoading: false,
    isError: false,
    singlePageData: action.payload,
  };

      case SINGLE_PRODUCT_REQUEST:
        return {
          ...state,
          isLoading: false,
          isError: false,
          singlePageData: action.payload,
        };
      default:
        return state;
    }
  };
  