import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().max(100).required('Tour name is required'),
  description: yup.string().required('Description is required'),
  duration: yup.number('Duration must be an integer number').min(1).required('Days of duration is required'),
  capacity: yup.number('Capacity must be an integer number').min(1).required('Max capacity is required'),
  guides: yup.number('Guides must be an integer number').min(1).required('Number of guides is required'),
  lodging: yup.string().max(100).required('Sleep host is required'),
  difficulty: yup.string().max(10).required('Difficulty level is required'),
  price: yup.number('Price must be an integer or decimal number').min(1).required('Price per person is required'),
  image_url: yup.string().url('It must be a valid url').required('Image url is required'),
});

export default yupResolver(schema);
