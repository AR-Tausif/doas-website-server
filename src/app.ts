import express from "express"
import { errorHandler } from "./middlewares/errorHandler";
import { duaRouter } from "./routes/dua.route";
const app = express();

app.use("/dua", duaRouter);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "hello world"
    });
});

// use global error handler after routes
app.use(errorHandler);
export default app;