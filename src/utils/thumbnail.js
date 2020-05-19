import imageThumbnail from 'image-thumbnail';

export default class Thumbnail {
  static thumbnailGenerated = (urlObj) => {
    const options = { width: 50, height: 50, responseType: 'base64' };
    return imageThumbnail(urlObj, options);
  };
}