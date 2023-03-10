const cloudinary = require("cloudinary").v2;
// Configuration
cloudinary.config({
  cloud_name: "dlgtowbfg",
  api_key: "713668358918611",
  api_secret: "XWs6vLGUhINOFlKe-ibPf3hINEQ",
});
module.exports.upLoadImage = async (req, res) => {
  try {
    const file=req.files.file
    let result = await cloudinary.uploader.upload(file.tempFilePath, {
      use_filename: true,
      folder: "file-upload",
    });
    res.status(200).json(result.secure_url)
  } catch (err) {
    res.status(500).json(err);
  }
};
