import config from '../../Constants';

const baseURL = config.url.API_URL;

const GET_BOOKINGS_FROM_API = 'GET_BOOKINGS_FROM_API';
const ADD_BOOKING_TO_API = 'ADD_BOOKING_TO_API';

const initialState = [];

const getBookingsAPI = (userId) => async (dispatch) => {
  await fetch(`${baseURL}/bookings/${userId}`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: GET_BOOKINGS_FROM_API,
        payload: data,
      });
    });
};

const addBookingAPI = (bookingInfo, userId, tourId) => async (dispatch) => {
  await fetch(`${baseURL}/bookings`, {
    method: 'POST',
    body: JSON.stringify({
      start_date: bookingInfo.start_date,
      end_date: bookingInfo.end_date,
      quantity: bookingInfo.quantity,
      total_price: bookingInfo.total_price,
      tour_id: tourId,
      user_id: userId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: ADD_BOOKING_TO_API,
        payload: data,
      });
    });
};

const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING_TO_API:
      return [...state, action.payload];
    case GET_BOOKINGS_FROM_API:
      return action.payload;
    default:
      return state;
  }
};

export {
  getBookingsAPI,
  addBookingAPI,
};

export default bookingsReducer;
