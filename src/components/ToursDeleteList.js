import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TourDeleteItem from './TourDeleteItem';
import { getToursAPI } from '../redux/tours/toursReducer';

const ToursDeleteList = () => {
  const dispatch = useDispatch();
  const deleteList = useSelector((state) => state.toursReducer);

  useEffect(() => {
    dispatch(getToursAPI());
  }, []);

  return (
    <div className="section__main">
      <ul className="tours_list">
        {
          deleteList && deleteList.map((tour) => <TourDeleteItem key={tour.id} tourItem={tour} />)
        }
      </ul>
    </div>
  );
};

export default ToursDeleteList;
