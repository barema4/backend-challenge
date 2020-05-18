import chai from 'chai';
import server from '../src/index';
import loginUserHelper from './helpers/LoginHelper';

const { expect } = chai;

describe('JSON patch route', () => {
  let loginResponse;
  beforeEach(async () => {
    loginResponse = await loginUserHelper({
      userName: 'Arnold',
      password: '1qaz2wsx',
    });
  });

  const updateDataTestHelper = (updateObject) => {
    const { token } = loginResponse.body.accessToken;
    return chai
      .request(server)
      .patch('/update')
      .set({
        Authorization: `Bearer ${token}`,
      })
      .send(updateObject);
  };

  it('should update the user object with a new field', async () => {
    const patchResponse = await updateDataTestHelper({
      email: 'katunold94@gmail.com',
      userName: 'Arnold Katumba',
    });

    expect(patchResponse).to.status(200);
  });

  it('should throw an error if invalid data is submitted', async () => {
    const patchResponse = await updateDataTestHelper({
      email: 'katunold94@gmail',
      userName: 'Arnold Katumba',
    });

    expect(patchResponse).to.status(422);
  });

  it('should throw an error if unacceptable fields are submitted', async () => {
    const patchResponse = await updateDataTestHelper({
      email: 'katunold94@gmail.com',
      age: 24,
    });

    expect(patchResponse).to.status(400);
  });
});
