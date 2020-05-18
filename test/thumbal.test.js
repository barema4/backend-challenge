// import chai from 'chai';
// import sinon from 'sinon';
// import server from '../src/index';
// import loginUserHelper from './helpers/LoginHelper';
// import Thumbnail from '../src/utils/thumbnail';

// const { expect } = chai;

// describe('Generate thumbnail', () => {
//   let sandbox;
//   let loginResponse;

//   beforeEach(async () => {
//     sandbox = await sinon.createSandbox();
//     loginResponse = await loginUserHelper({
//       userName: 'Arnold',
//       password: '1qaz2wsx',
//     });
//   });

//   afterEach('restore sandbox', () => {
//     sandbox.restore();
//   });

//   const thumbnailTestHelper = (inputData, error = false) => {
//     /* eslint-disable no-unused-expressions */
//     error
//       ? sandbox
//           .stub(Thumbnail, 'thumbnailGenerated')
//           .throws(['Something went wrong'])
//       : sandbox.stub(Thumbnail, 'thumbnailGenerated').returns({
//           generatedThumbnail:
//             '/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHB',
//         });
//     const { token } = loginResponse.body.accessToken;
//     return chai
//       .request(server)
//       .post('/generate-thumbnail')
//       .set({ Authorization: `Bearer ${token}` })
//       .send(inputData);
//   };

//   it('should generate a thumbnail from a public image uri', async () => {
//     const thumbnailResponse = await thumbnailTestHelper({
//       publicImageUrl:
//         'https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg',
//     });

//     expect(thumbnailResponse).to.have.status(200);
//   });

//   it('should throw an error in case user is not logged in', async () => {
//     const thumbnailResponse = await thumbnailTestHelper({
//       publicImageUrl: '',
//     });
//     expect(thumbnailResponse).to.have.status(422);
//   });

//   it('should throw an error in case uncertainty hits', async () => {
//     const thumbnailResponse = await thumbnailTestHelper(
//       {
//         publicImageUrl:
//           'https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg',
//       },
//       true,
//     );
//     expect(thumbnailResponse).to.have.status(404);
//   });
// });