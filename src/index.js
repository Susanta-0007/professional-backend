import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/index.js";
import { app } from "./app.js";


connectDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server Running on PORT:${process.env.PORT}`);
    })
}

).catch((err) => {
    console.log(`MONGODB CONNECTION FAILED: ${err}`);
});


