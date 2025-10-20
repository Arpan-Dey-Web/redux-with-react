import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "../constants/TodoConstant";

const initialState = {
  loading: false,
  todo: [],
  error: null,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        loading: false,
        todo: action.payload,
        error: null,
      };
    case GET_TODOS_FAILED:
      return {
        loading: false,
        todo: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
