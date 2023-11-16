import express from "express";
import cors from "cors";
import { dataRouter } from "../routes/apiRoutes";

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.use("/api/data", dataRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });