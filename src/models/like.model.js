import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const likeSchema = new mongoose.Schema({
    video: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    },
    tweet: {
        type: Schema.Types.ObjectId,
        ref: "Tweet"
    },
    likedBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }


}, { timestamps: true });

export const Like = mongoose.model("Like", likeSchema);