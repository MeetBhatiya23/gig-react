import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: false,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    country: {
      type: Object,
      required: false,
    },
    phone: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    isSeller: {
      type: Boolean,
      default: false,
    },
    dob: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
