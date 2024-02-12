import mongoose from "mongoose";

export const connectdb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "ChatApp",
    })
    .then((c) => console.log(`Database Connected on host ${c.connection.host}`))
    .catch((error) => console.log(error));
};
