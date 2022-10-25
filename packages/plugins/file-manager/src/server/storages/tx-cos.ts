import { STORAGE_TYPE_TX_COS } from '../constants';
import { cloudFilenameGetter } from '../utils';

export default {
  filenameKey: 'url',
  make(storage) {
    const createTxCosStorage = require('multer-cos');
    return new createTxCosStorage({
      cos: storage.options,
      filename: cloudFilenameGetter(storage),
    });
  },
  defaults() {
    return {
      title: '腾讯云对象存储',
      type: STORAGE_TYPE_TX_COS,
      name: 'tx-cos-1',
      baseUrl: process.env.TX_COS_STORAGE_BASE_URL,
      options: {
        Region: process.env.TX_COS_REGION,
        SecretId: process.env.TX_COS_SECRET_ID,
        SecretKey: process.env.TX_COS_SECRET_KEY,
        Bucket: process.env.TX_COS_BUCKET,
      },
    };
  },
};
