import { validationResult } from 'express-validator';
import Thumbnail from '../utils/thumbnail';
import errorDisplay from '../middleware';

export default class ThumbnailController {
  static generateThumbnail = async (req, res, next) => {
    const { publicImageUrl } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return errorDisplay(req, res, errors);
    }

    try {
      const thumbnail = await Thumbnail.thumbnailGenerated({
        uri: publicImageUrl,
      });
      return res.status(200).send({
        generatedThumbnail: thumbnail,
      });
    } catch (error) {
      next(error);
    }
  };
}