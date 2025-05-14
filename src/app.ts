import express from "express"
import { errorHandler } from "./middlewares/errorHandler";
const app = express();

app.use("/", (req, res) => {
    res.status(200).json({
        message: "hello world"
    });
});

// use global error handler after routes
app.use(errorHandler);
export default app;