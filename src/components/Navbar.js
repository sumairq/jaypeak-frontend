import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../logo.svg';

const Navbar = () => {
  const [modalMenuIcon, setModalMenuIcon] = useState('');
  const [modalMenuList, setModalMenuList] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const links = [
    { id: 1, path: '/', text: 'TOURS' },
    { id: 2, path: '/reservations', text: 'MY RESERVATIONS' },
    { id: 3, path: '/reserve', text: 'RESERVE' },
    { id: 4, path: '/add', text: 'ADD ITEM' },
    { id: 5, path: '/delete', text: 'DELETE ITEMS' },
  ];

  const menuToggle = () => {
    if (!modalOpen) {
      setModalMenuIcon('navbar__menu-button-modal');
      setModalMenuList('navbar__menu-nav-modal');
    } else {
      setModalMenuIcon('');
      setModalMenuList('');
    }

    setModalOpen(!modalOpen);
  };

  const closeModalWindow = () => {
    if (modalOpen) {
      setModalMenuIcon('');
      setModalMenuList('');
      setModalOpen(!modalOpen);
    }
  };

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
          {
            links.map((link) => <li key={link.id} className="navbar__menu-item"><NavLink to={link.path} className="nav-link" onClick={closeModalWindow}>{link.text}</NavLink></li>)
          }
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
