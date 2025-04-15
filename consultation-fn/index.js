const {Storage} = require('@google-cloud/storage');
const storage = new Storage();

exports.consultation = async (req, res) => {
    const bucket = storage.bucket('tp3-public-godefroy_meline');
    const [files] = await bucket.getFiles();

    const publicUrls = files.map(file =>
        `https://storage.googleapis.com/tp3-public-godefroy_meline/${file.name}`
    );

    res.status(200).json(publicUrls);
};
