import { Link, useLocation } from 'react-router-dom';

const TourItemDetails = () => {
  const { state } = useLocation();

  const setCurrencyFormat = (number) => (
    number.toLocaleString('en-US', { style: 'currency', currency: 'USA' })
  );

  return (
    <div className="section__main tour__details">
      <div className="tour__details-image">
        <img src={state.image_url} alt={'Tour photo '.concat(state.id)} />
      </div>
      <div className="tour__details-features">
        <h2 className="details__title">{state.name}</h2>
        <p className="details__description">{state.description}</p>
        <ul className="details__list">
          <li>
            <span>Duration:</span>
            <span>{`${state.duration} days tour`}</span>
          </li>
          <li>
            <span>Up to:</span>
            <span>{`${state.capacity} people`}</span>
          </li>
          <li>
            <span>Tour guides:</span>
            <span>{state.guides}</span>
          </li>
          <li>
            <span>Sleep in:</span>
            <span>{state.lodging}</span>
          </li>
          <li>
            <span>Difficulty:</span>
            <span>{state.difficulty}</span>
          </li>
          <li>
            <span>Price:</span>
            <span>{setCurrencyFormat(state.price)}</span>
          </li>
        </ul>
        <div className="details__options">
          <Link to="/reserve" state={state} className="link__btn btn__reserve">RESERVE</Link>
        </div>
      </div>
    </div>
  );
};

export default TourItemDetails;
