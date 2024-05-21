import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(glb)$/)) {
        const error = new Error("Only glb formats are allowed!");
        error.status = 400;
        return cb(error, false);
    }
    cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: fileFilter });
export default upload;
