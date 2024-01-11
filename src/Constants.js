// Constants.js
const prod = {
  url: {
    API_URL: 'https://jaypeak-tours.onrender.com/api/v1',
  },
};
const dev = {
  url: {
    API_URL: 'http://localhost:3001/api/v1',
  },
};
const config = process.env.NODE_ENV === 'development' ? dev : prod;

export default config;
