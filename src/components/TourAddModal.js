import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Modal, Button, Form, Alert,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import createTourResolver from '../validations/createTourResolver';
import { addTourAPI } from '../redux/tours/toursReducer';

const TourAddModal = ({ handleClose }) => {
  const dispatch = useDispatch();
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm({ resolver: createTourResolver });

  const onSubmit = (formData) => {
    dispatch(addTourAPI(formData));
    reset();
    handleClose();
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>CREATE NEW TOUR ITEM</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control {...register('name')} />
            {
              errors?.name && (
                <Form.Text>
                  <Alert variant="danger">
                    { errors.name.message }
                  </Alert>
                </Form.Text>
              )
            }
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={4} {...register('description')} />
            {
              errors?.description && (
                <Form.Text>
                  <Alert variant="danger">
                    { errors.description.message }
                  </Alert>
                </Form.Text>
              )
            }
          </Form.Group>
          <Form.Group>
            <Form.Label>Days of Duration</Form.Label>
            <Form.Control type="number" {...register('duration')} />
            {
              errors?.duration && (
                <Form.Text>
                  <Alert variant="danger">
                    { errors.duration.message }
                  </Alert>
                </Form.Text>
              )
            }
          </Form.Group>
          <Form.Group>
            <Form.Label>Max Capacity</Form.Label>
            <Form.Control type="number" {...register('capacity')} />
            {
              errors?.capacity && (
                <Form.Text>
                  <Alert variant="danger">
                    { errors.capacity.message }
                  </Alert>
                </Form.Text>
              )
            }
          </Form.Group>
          <Form.Group>
            <Form.Label>Guides Available</Form.Label>
            <Form.Control type="number" {...register('guides')} />
            {
              errors?.guides && (
                <Form.Text>
                  <Alert variant="danger">
                    { errors.guides.message }
                  </Alert>
                </Form.Text>
              )
            }
          </Form.Group>
          <Form.Group>
            <Form.Label>Lodging</Form.Label>
            <Form.Select {...register('lodging')} aria-label="Lodging select">
              <option value="Cozy hotels">Cozy hotels</option>
              <option value="Provided tends">Provided tends</option>
            </Form.Select>
            {
              errors?.lodging && (
                <Form.Text>
                  <Alert variant="danger">
                    { errors.lodging.message }
                  </Alert>
                </Form.Text>
              )
            }
          </Form.Group>
          <Form.Group>
            <Form.Label>Difficulty Level</Form.Label>
            <Form.Select {...register('difficulty')} aria-label="Difficulty level select">
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </Form.Select>
            {
              errors?.difficulty && (
                <Form.Text>
                  <Alert variant="danger">
                    { errors.difficulty.message }
                  </Alert>
                </Form.Text>
              )
            }
          </Form.Group>
          <Form.Group>
            <Form.Label>Price (USD)</Form.Label>
            <Form.Control {...register('price')} />
            {
              errors?.price && (
                <Form.Text>
                  <Alert variant="danger">
                    { errors.price.message }
                  </Alert>
                </Form.Text>
              )
            }
          </Form.Group>
          <Form.Group>
            <Form.Label>Image Url</Form.Label>
            <Form.Control type="url" {...register('image_url')} />
            {
              errors?.image_url && (
                <Form.Text>
                  <Alert variant="danger">
                    { errors.image_url.message }
                  </Alert>
                </Form.Text>
              )
            }
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          CANCEL
        </Button>
        <Button variant="primary" onClick={handleSubmit(onSubmit)}>
          SAVE
        </Button>
      </Modal.Footer>
    </>
  );
};

TourAddModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default TourAddModal;
