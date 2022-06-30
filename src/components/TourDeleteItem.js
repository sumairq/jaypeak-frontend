import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeTourAPI } from '../redux/tours/toursReducer';

const TourDeleteItem = ({ tourItem }) => {
  const dispatch = useDispatch();

  const removeTourFromStore = (e) => {
    dispatch(removeTourAPI(+e.target.getAttribute('data-id')));
  };

  return (
    <li className="list_item list_item-delete">
      <div className="item__title">
        <p>{tourItem.name}</p>
      </div>
      <div className="item__title">
        <button type="button" className="btn__link" data-id={tourItem.id} onClick={removeTourFromStore}>REMOVE</button>
      </div>
    </li>
  );
};

TourDeleteItem.propTypes = {
  tourItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default TourDeleteItem;
