import chai from 'chai';
import server from './index';

const { expect } = chai;

describe('Login route', () => {
  const loginTestHelper = async (loginData) =>
    chai
      .request(server)
      .post('/login')
      .send(loginData);

  it('should login a user with the right credentials', async () => {
    const loginResponse = await loginTestHelper({
      userName: 'Arnold',
      password: '1qaz2wsx',
    });

    expect(loginResponse).to.have.status(200);
    expect(loginResponse.body).to.have.property('userName').to.contain('Arnold');
  });

  it('should throw error if username and password do not much the user ', async () => {
    const loginResponse = await loginTestHelper({
      userName: 'Brian',
      password: '1qaz2wsx',
    });
    expect(loginResponse).to.have.status(404);
    expect(loginResponse.body).to.have.property('message').to.contain('Wrong username or password');
  });

  it('should throw an error if a field is missing ', async () => {
    const loginResponse = await loginTestHelper({
      userName: '',
      password: '1qaz2wsx',
    });
    expect(loginResponse).to.have.status(422);
  });
});