const initialState = {
    counter: 0,
    loading: false,
    data: [],
    error: null,
};

const countReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, counter: state.counter + action.payload };;
      case 'DECREMENT':
        return { ...state, counter: state.counter - 1 };
      case "FETCH_DATA_REQUEST":
        return { ...state, loading: true };
      case "FETCH_DATA_SUCCESS":
        return { ...state, loading: false, data: action.payload, error: null };
      case "FETCH_DATA_FAILURE":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

export default countReducer;