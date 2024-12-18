import mongoose from "mongoose";
const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    gigId: {
      typeof: String,
      required: true,
    },
    userId: {
      typeof: String,
      required: true,
    },
    star: {
      typeof: Number,
      required: true,
      enum: [1, 2, 3, 4, 5],
    },
    desc: {
      typeof: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("review", reviewSchema);
