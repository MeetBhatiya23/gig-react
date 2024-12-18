import multer from "multer";

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        console.log("hello");
        cb(null, '../public/temp')
    },
    filename: function (req, file, cb) {
        console.log("hello1213");
        cb(null, file.originalname)
    }

})
export const upload = multer({ storage })