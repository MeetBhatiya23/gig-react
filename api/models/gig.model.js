import mongoose from "mongoose";

const { Schema } = mongoose;

const gigSchema = new Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    totleStar: {
      type: Number,
      default: 0,
    },
    starNumber: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: false,
    },
    cover: {
      type: String,
      require: true,
    },
    images: {
      type: [String],
      require: true,
    },
    shortTitle: {
      type: String,
      require: true,
    },
    shortDesc: {
      type: String,
      require: true,
    },
    deliveryTime: {
      type: Number,
      require: false,
      default: 0,
    },
    revisionNumber: {
      type: Number,
      default: 0,
    },
    featurs: {
      type: [String],
    },
    sales: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("gig", gigSchema);
