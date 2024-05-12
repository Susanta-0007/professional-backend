import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRouter from "./routes/user.route.js";
import healthcheckRouter from "./routes/healthcheck.route.js"

const app = express();

//! Cors :
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//! routes delcleartion :
app.use("/api/v1/users", userRouter);

app.use("/api/v1/healthcheck",healthcheckRouter);


export { app };