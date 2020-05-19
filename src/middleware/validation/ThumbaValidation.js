import { body } from 'express-validator';

const thumbnailUriValidation = () => [
  body('publicImageUrl', 'publicImageUrl is required')
    .trim()
    .exists()
    .not()
    .isEmpty(),
  body('publicImageUrl', 'Should be in a url format').isURL({
    protocols: ['http', 'https'],
    require_protocol: true,
  }),
];

export default thumbnailUriValidation;
