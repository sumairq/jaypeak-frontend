import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import MyBookingItem from './MyBookingItem';
import { getBookingsAPI } from '../redux/bookings/bookingsReducer';

const MyBookings = () => {
  const dispatch = useDispatch();
  const myBookingsList = useSelector((store) => store.bookingsReducer);

  useEffect(() => {
    dispatch(getBookingsAPI(1));
  }, []);

  return (
    <div className="section__main">
      <ul className="tours__list roww">
        {
          myBookingsList.length > 0 && myBookingsList.map(
            (booking) => <MyBookingItem key={uuidv4()} bookingItem={booking} />,
          )
        }
      </ul>
    </div>
  );
};

export default MyBookings;
