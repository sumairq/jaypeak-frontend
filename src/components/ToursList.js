import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import TourItem from './TourItem';
import { getToursAPI } from '../redux/tours/toursReducer';

/* eslint-disable jsx-a11y/control-has-associated-label */
const ToursList = () => {
  const dispatch = useDispatch();
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });
  const toursList = useSelector((store) => store.toursReducer);

  useEffect(() => {
    dispatch(getToursAPI());
  }, []);

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dimensions]);

  const setSliderWidth = (numSlides) => {
    if (dimensions.width > 1152) return `${numSlides.length * 33.3}%`;
    if (dimensions.width > 832) return `${numSlides.length * 50}%`;
    return `${numSlides.length * 100}%`;
  };

  const setSliderMarginLeft = () => {
    if (dimensions.width > 1152) return '-33.3%';
    if (dimensions.width > 832) return '-50%';
    return '-100%';
  };

  useEffect(() => {
    const ulSlider = document.getElementById('tours__list-slider');
    const liSlides = ulSlider.childNodes;
    if (liSlides > 1) {
      if (liSlides > 2) {
        ulSlider.insertBefore(ulSlider.lastChild, ulSlider.firstChild);
        ulSlider.style.width = setSliderWidth(liSlides.length);
        ulSlider.style.marginLeft = setSliderMarginLeft(liSlides.length);
      } else {
        ulSlider.style.width = setSliderWidth(liSlides.length);
        ulSlider.style.marginLeft = '0%';
      }
    }
  }, [toursList, dimensions]);

  const setAnimateMarginLeft = () => {
    if (dimensions.width > 1152) return '-66.6%';
    if (dimensions.width > 832) return '-100%';
    return '-200%';
  };

  const nextprevSlideC2 = () => {
    const ulSlider = document.getElementById('tours__list-slider');
    ulSlider.animate({ marginLeft: '-100%' }, 1000);
    setTimeout(() => {
      ulSlider.insertBefore(ulSlider.firstChild, null);
      ulSlider.style.marginLeft = '0%';
    }, 1000);
  };

  const prevSlideCX = () => {
    const ulSlider = document.getElementById('tours__list-slider');
    if ((ulSlider.childElementCount > 2 && dimensions.width <= 832)
        || (ulSlider.childElementCount > 2 && dimensions.width <= 1152)
        || (ulSlider.childElementCount > 3 && dimensions.width > 1152)) {
      ulSlider.animate({ marginLeft: '0%' }, 1000);
      setTimeout(() => {
        ulSlider.insertBefore(ulSlider.lastChild, ulSlider.firstChild);
        ulSlider.style.marginLeft = setSliderMarginLeft();
      }, 1000);
    } else if (ulSlider.childElementCount === 2 && dimensions.width <= 832) nextprevSlideC2();
  };

  const nextSlideCX = () => {
    const ulSlider = document.getElementById('tours__list-slider');
    if ((ulSlider.childElementCount > 2 && dimensions.width <= 832)
        || (ulSlider.childElementCount > 3 && dimensions.width > 832)) {
      ulSlider.animate({ marginLeft: setAnimateMarginLeft() }, 1000);
      setTimeout(() => {
        ulSlider.insertBefore(ulSlider.firstChild, null);
        ulSlider.style.marginLeft = setSliderMarginLeft();
      }, 1000);
    } else if (ulSlider.childElementCount > 2 && dimensions.width <= 1152) prevSlideCX();
    else if (ulSlider.childElementCount === 2 && dimensions.width <= 832) nextprevSlideC2();
  };

  return (
    <>
      <div className="slider__container">
        <ul className="tours__list roww" id="tours__list-slider">
          {
            toursList.length > 0
              ? toursList.map((tour) => <TourItem key={tour.id} tourItem={tour} />)
              : (
                <h6>
                  There are not Tours yet.
                  Create a new one by clicking on the &quot;Add Item&quot; option.
                </h6>
              )
          }
        </ul>
      </div>
      <div className="slider__arrows">
        <button type="button" className="arrow__left" onClick={prevSlideCX}><IoMdArrowDropleft /></button>
        <button type="button" className="arrow__right" onClick={nextSlideCX}><IoMdArrowDropright /></button>
      </div>
    </>
  );
};

export default ToursList;
