import { PropTypes } from 'prop-types';

const MyBookingItem = ({ bookingItem }) => {
  const getCustomeDate = (str) => {
    const date = new Date(str);
    return date.toDateString();
  };

  const setCurrencyFormat = (numStr) => (
    parseFloat(numStr).toLocaleString('en-US', { style: 'currency', currency: 'USA' }).replace('USA', 'USD')
  );

  return (
    <li className="list__item column">
      <div className="card">
        <div className="card__picture">
          <img src={bookingItem.tour.image_url} alt={'tour image '.concat(bookingItem.tour.id)} />
        </div>
        <h2 className="card__heading">
          <span className="card__heading-span">{bookingItem.tour.name}</span>
        </h2>
        <div className="card__details">
          <ul>
            <li>
              <span className="text__details">Start date:</span>
              {getCustomeDate(bookingItem.start_date)}
            </li>
            <li>
              <span className="text__details">End date:</span>
              {getCustomeDate(bookingItem.end_date)}
            </li>
            <li>
              <span className="text__details">Quantity:</span>
              {bookingItem.quantity}
            </li>
            <li>
              <span className="text__details">Total price:</span>
              {setCurrencyFormat(bookingItem.total_price)}
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

MyBookingItem.propTypes = {
  bookingItem: PropTypes.shape({
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    total_price: PropTypes.string.isRequired,
    tour: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MyBookingItem;
