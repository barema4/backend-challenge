import chai from 'chai';
import server from '../../src';

const loginUserHelper = (loginData) =>
  chai
    .request(server)
    .post('/login')
    .send(loginData);

export default loginUserHelper;
