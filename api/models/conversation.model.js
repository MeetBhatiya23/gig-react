import mongoose from "mongoose";
const { Schema } = mongoose;

const conversationSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  sellerID: {
    type: String,
    required: true,
  },
  buyerID: {
    type: String,
    required: true,
  },
  readBySeller: {
    type: Boolean,
    default: true,
  },
  readByBuyer: {
    type: Boolean,
    default: true,
  },
  lastMessage: {
    type: String,
    required: true,
  },
});

export default mongoose.model("conversation", conversationSchema);
