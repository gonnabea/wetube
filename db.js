<<<<<<< HEAD
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
process.env.MONGO_URL,
{
    useNewUrlParser: true,
    useFIndAndModify: false
}
);

const db = mongoose.connection;

const handleOpen =() => console.log("Connected to DB")
const handleError = () => console.log(`X Error on DB connection:${error}`)
=======
export const videos = [
    {
        id: 324393,
        title: 'Video awesome',
        description: 'This is something I love',
        views: 24,
        videoFile:"https://archive.org/details/BigBuckBunny_124",
        creator:{
            id: 121212,
            name:"Nicolas",
            email:"nico@las.com"

        }
    },
    {
        id: 321432,
        title: 'Video super',
        description: 'This is something I love',
        views: 24,
        videoFile:"https://archive.org/details/BigBuckBunny_124",
        creator:{
            id: 121212,
            name:"Nicolas",
            email:"nico@las.com"

        }
    },
    {
        id: 122132,
        title: 'Video nice',
        description: 'This is something I love',
        views: 24,
        videoFile:"https://archive.org/details/BigBuckBunny_124",
        creator:{
            id: 121212,
            name:"Nicolas",
            email:"nico@las.com"

        }
    },
    {
        id: 999999,
        title: 'Video perfect',
        description: 'This is something I love',
        views: 24,
        videoFile:"https://archive.org/details/BigBuckBunny_124",
        creator:{
            id: 121212,
            name:"Nicolas",
            email:"nico@las.com"
>>>>>>> parent of ba6e58a... end of express js & mongoDb installed

db.once("open", handleOpen)
db.on("error", handleError)