const baseURL = 'http://localhost:3001/api/v1';

const GET_TOURS_FROM_API = 'GET_TOURS_FROM_API';
const ADD_TOUR_TO_API = 'ADD_TOUR_TO_API';
const REMOVE_TOUR_FROM_API = 'REMOVE_TOUR_FROM_API';

const initialState = [];

const getToursAPI = () => async (dispatch) => {
  await fetch(`${baseURL}/tours`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: GET_TOURS_FROM_API,
        payload: data,
      });
    });
};

const addTourAPI = (tourInfo) => async (dispatch) => {
  await fetch(`${baseURL}/tours`, {
    method: 'POST',
    body: JSON.stringify({
      name: tourInfo.name,
      description: tourInfo.description,
      duration: tourInfo.duration,
      capacity: tourInfo.capacity,
      guides: tourInfo.guides,
      image_url: tourInfo.image_url,
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
