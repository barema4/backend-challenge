import chai from 'chai';
import loginTestHelper from './helpers/LoginHelper';

const { expect } = chai;

describe('Login route', () => {
  it('should login a user with the right credentials', async () => {
    const loginResponse = await loginTestHelper({
      userName: 'Rubarema',
      password: '1qaz2wsx',
    });

    expect(loginResponse).to.have.status(200);
    expect(loginResponse.body)
      .to.have.property('userName')
      .to.contain('Rubarema');
  });

  it('should throw error if username and password do not much the user ', async () => {
    const loginResponse = await loginTestHelper({
      userName: 'Brian',
      password: '1qaz2wsx',
    });
    expect(loginResponse).to.have.status(404);
    expect(loginResponse.body)
      .to.have.property('message')
      .to.contain('Wrong username or password');
  });

  it('should throw an error if a field is missing ', async () => {
    const loginResponse = await loginTestHelper({
      userName: '',
      password: '1qaz2wsx',
    });
    expect(loginResponse).to.have.status(422);
  });
});
