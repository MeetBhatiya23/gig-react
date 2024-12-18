import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    gigId: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sellerID: {
      type: String,
      required: true,
    },
    buyerId: {
      type: String,
      required: true,
    },
    iscompleted: {
      type: Boolean,
      required: true,
      default: false,
    },
    payment_intent: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("order", orderSchema);
