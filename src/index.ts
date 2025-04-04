import express, { Express } from "express";
import userRouter from "./Endpoints/Routes/Users";
import cors from "cors";

const app: Express = express();
const port = 3001;

// cors current error:  Response to preflight request doesn't pass access control check:
//  No 'Access-Control-Allow-Origin' header is present on the requested resource - needs fix, wildcard crashes express instance
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
