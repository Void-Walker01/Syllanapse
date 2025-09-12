import multer from 'multer';

const upload = multer({
    storage: multer.memoryStorage(),

    limits: {
        fileSize: 10 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "application/pdf" || file.mimetype === "text/plain") {
            cb(null, true); 
        } else {
            cb(new Error("Unsupported file type. Only PDF and TXT are allowed."), false);
        }
    }
});

export default upload;
