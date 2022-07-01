import { PropTypes } from 'prop-types';
import { Modal } from 'react-bootstrap';
import TourAddModal from './TourAddModal';
import TourReserveModal from './TourReserveModal';

const ProjectModal = ({ isOpen, handleClose, type }) => (
  <Modal show={isOpen} onHide={handleClose}>
    { type === 'add-tour' && <TourAddModal handleClose={handleClose} /> }
    { type === 'reserve-tour' && <TourReserveModal handleClose={handleClose} /> }
  </Modal>
);

ProjectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default ProjectModal;
