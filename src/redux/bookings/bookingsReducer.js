const baseURL = 'http://localhost:3001/api/v1';

const GET_BOOKINGS_FROM_API = 'GET_TOURS_FROM_API';
const ADD_BOOKING_TO_API = 'ADD_TOUR_TO_API';

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

const addBookingAPI = (bookingInfo, userId) => async (dispatch) => {
  await fetch(`${baseURL}/bookings`, {
    method: 'POST',
    body: JSON.stringify({
      start_date: bookingInfo.name,
      description: bookingInfo.description,
      duration: bookingInfo.duration,
      capacity: bookingInfo.capacity,
      guides: bookingInfo.guides,
      image_url: bookingInfo.image_url,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: 'ADD_TOUR_TO_API',
        payload: data,
      });
    });
};

const removeTourAPI = (tourId) => async (dispatch) => {
  await fetch(`${baseURL}/tours/${tourId}`, {
    method: 'DELETE',
    body: JSON.stringify({
      id: tourId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.response === 'Tour item deleted successfully') dispatch({ type: 'REMOVE_TOUR_FROM_API', payload: tourId });
    });
};

const toursReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOUR_TO_API:
      return [...state, action.payload];
    case REMOVE_TOUR_FROM_API:
      return state.filter((tour) => tour.id !== action.payload);
    case GET_TOURS_FROM_API:
      return action.payload;
    default:
      return state;
  }
};

export {
  getToursAPI,
  addTourAPI,
  removeTourAPI,
};

export default toursReducer;
