import { actorsConstants } from "../constants/index";

let initialState = {
  actors: [],
  page: null,
  searchValue: '',
  isLoading: false
};

const actors = (state = initialState, action) => {
  switch (action.type) {
    case actorsConstants.GET_ACTORS:
      return {
        ...state,
        actors: action.payload.actors,
        page: action.payload.page
      };

    case actorsConstants.SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      }

    case actorsConstants.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state;
  }
};

export default actors;
