import mongoose, { Schema, Document } from "mongoose";

export interface IMessage extends Document {
  from: string;
  to: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const messageSchema = new Schema<IMessage>(
  {
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message =
  (mongoose.models.Message as mongoose.Model<IMessage>) ||
  mongoose.model("Message", messageSchema);

export default Message;
