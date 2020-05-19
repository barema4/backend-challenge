import chai from 'chai';
import server from '../src';
import loginUserHelper from './helpers/LoginHelper';

const { expect } = chai;

describe('JSON patch route', () => {
  let loginResponse;
  beforeEach(async () => {
    loginResponse = await loginUserHelper({
      userName: 'Rubarema',
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
      email: 'samrubarema6@gmail.com',
      userName: 'Rubarema Sam',
    });

    expect(patchResponse).to.status(200);
  });

  it('should throw an error if invalid data is submitted', async () => {
    const patchResponse = await updateDataTestHelper({
      email: 'rubarema@gmail',
      userName: 'Rubarema Sam',
    });

    expect(patchResponse).to.status(422);
  });

  it('should throw an error if unacceptable fields are submitted', async () => {
    const patchResponse = await updateDataTestHelper({
      email: 'samrubarema6@gmail.com',
      age: 10,
    });

    expect(patchResponse).to.status(400);
  });
});
