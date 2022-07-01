import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../logo.svg';
import AppModal from './AppModal';

const Navbar = () => {
  const [modalMenuIcon, setModalMenuIcon] = useState('');
  const [modalMenuList, setModalMenuList] = useState('');
  const [modalMenuOpen, setModalMenuOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState('none');

  const menuToggle = () => {
    if (!modalMenuOpen) {
      setModalMenuIcon('navbar__menu-button-modal');
      setModalMenuList('navbar__menu-nav-modal');
    } else {
      setModalMenuIcon('');
      setModalMenuList('');
    }

    setModalMenuOpen(!modalMenuOpen);
  };

  const closeModalWindow = () => {
    if (modalMenuOpen) {
      setModalMenuIcon('');
      setModalMenuList('');
      setModalMenuOpen(!modalMenuOpen);
    }
  };

  const handleShowModal = (type) => {
    closeModalWindow();
    setTypeModal(type);
    setIsOpenModal(true);
  };
  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <div className="section__side">
      <div className="navbar__brand">
        <img src={Logo} alt="Natours logo" />
      </div>
      <nav className="nav">
        <button className={'navbar__menu-button '.concat(modalMenuIcon)} type="button" aria-label="Toggle navigation" onClick={menuToggle}>
          <span className="navbar__menu-bar" />
        </button>
        <ul className={'navbar__menu-list '.concat(modalMenuList)}>
          <li className="navbar__menu-item"><NavLink to="/" className="nav-link" onClick={closeModalWindow}>TOURS</NavLink></li>
          <li className="navbar__menu-item"><NavLink to="/reservations" className="nav-link" onClick={closeModalWindow}>MY RESERVATIONS</NavLink></li>
          <li className="navbar__menu-item"><button type="button" className="nav-link btn__link" onClick={() => handleShowModal('reserve-tour')}>RESERVE</button></li>
          <li className="navbar__menu-item"><button type="button" className="nav-link btn__link" onClick={() => handleShowModal('add-tour')}>ADD ITEM</button></li>
          <li className="navbar__menu-item"><NavLink to="/delete" className="nav-link" onClick={closeModalWindow}>DELETE ITEM</NavLink></li>
        </ul>
      </nav>
      <AppModal isOpen={isOpenModal} handleClose={handleCloseModal} type={typeModal} />
    </div>
  );
};

export default Navbar;
