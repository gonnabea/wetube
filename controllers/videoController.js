<<<<<<< HEAD
import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
    try{
        const videos = await Video.find({});
        res.render("home", {pageTitle: "Home", videos});
    } catch(error){
        console.log(error);
        res.render("home", {pageTitle: "Home", videos: []});
    }
=======
import {videos} from "../db";
export const home = (req, res) => {
 res.render("home", {pageTitle: "Home", videos});
>>>>>>> parent of ba6e58a... end of express js & mongoDb installed
};
export const search = (req, res) =>{
   const {
       query: { term : searchingBy }
    } = req;
<<<<<<< HEAD
    res.render('search', {pageTitle: "Search", searchingBy, videos });
};


export const getUpload = (req, res) =>
 res.render("upload", {pageTitle: "Upload"});

export const postUpload = async(req, res) => {
    const {
        body:{  title, description },
        file : {path}
     } = req;
     const newVideo = await Video.create({
         fileUrl : path,
         title,
         description
     })
     // To Do: Upload and save video
    res.redirect(routes.videoDetail(newVideo.id));
     //res.redirect(routes.videoDetail(324393));
};

=======
    res.render('Search', {pageTitle: "Search", searchingBy: searchingBy });
};


export const upload = (req, res) =>
 res.render("Upload", {pageTitle: "Upload"});
>>>>>>> parent of ba6e58a... end of express js & mongoDb installed

export const videoDetail = (req, res) =>
 res.render("Video Detail", {pageTitle: "Video Detail"});

export const editVideo = (req, res) =>
 res.render("Edit Video", {pageTitle: "Edit Video"});

export const deleteVideo = (req, res) =>
 res.render("Delete Video", {pageTitle: "Delete Video"});
