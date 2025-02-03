import axios from "axios";

export const doubleValue = (payload) => {
    return {
        type: 'DOUBLE_VALUE',
        payload,
    }
}

export const increment = (info = 1) => ({ type: 'INCREMENT', payload: info });
export const decrement = () => ({ type: 'DECREMENT' });



export const fetchDataRequest = () => ({
  type: "FETCH_DATA_REQUEST",
});

export const fetchDataSuccess = (data) => ({
  type: "FETCH_DATA_SUCCESS",
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: "FETCH_DATA_FAILURE",
  payload: error,
});

// Thunk function to fetch users
export const fetchData = () => async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};