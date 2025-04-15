const {Storage} = require('@google-cloud/storage');
const storage = new Storage();

exports.enregistrement = async (event, context) => {
    const bucketName = event.bucket;
    const fileName = event.name;

    const sourceBucket = storage.bucket(bucketName);
    const targetBucket = storage.bucket('tp3-public-godefroy_meline');

    await sourceBucket.file(fileName).copy(targetBucket.file(fileName));
    console.log(`Image ${fileName} copiée vers le bucket public.`);
};
