import express from "express";
import routes from "../routes";
import {
     videos,
     upload,
     videoDetail,
     editVideo,
     deleteVideo
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();


<<<<<<< HEAD
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
=======
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
>>>>>>> parent of ba6e58a... end of express js & mongoDb installed
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter; 

