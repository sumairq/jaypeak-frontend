import { PropTypes } from 'prop-types';
import {
  Modal, Button, Form, Alert,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import createTourResolver from '../validations/createTourResolver';

/* eslint-disable react/jsx-props-no-spreading */
const TourReserveModal = ({ handleClose }) => {
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm({ resolver: createTourResolver });

  const onSubmit = (formData) => {
    console.log(formData);
    reset();
    handleClose();
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>CREATE A NEW RESERVE</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Start Date</Form.Label>
            <Form.Control {...register('start_date')} />
            {
              errors?.start_date && (
                <Form.Text>
                  <Alert variant="danger">
                    { errors.start_date.message }
                  </Alert>
                </Form.Text>
              )
            }
          </Form.Group>
          <Form.Group>
            <Form.Label>End Date</Form.Label>
            <Form.Control {...register('end_date')} />
            {
              errors?.end_date && (
                <Form.Text>
                  <Alert variant="danger">
                    { errors.end_date.message }
                  </Alert>
                </Form.Text>
              )
            }
          </Form.Group>
          <Form.Group>
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" {...register('quantity')} />
            {
              errors?.quantity && (
                <Form.Text>
                  <Alert variant="danger">
                    { errors.quantity.message }
                  </Alert>
                </Form.Text>
              )
            }
          </Form.Group>
          <Form.Group>
            <Form.Label>Total Price</Form.Label>
            <Form.Control type="number" {...register('total_price')} />
            {
              errors?.total_price && (
                <Form.Text>
                  <Alert variant="danger">
                    { errors.total_price.message }
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

TourReserveModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default TourReserveModal;
