import express, {json, urlencoded} from 'express'
import morgan from 'morgan'
import path from 'path'

const app = express()

const directoryToServe = 'client';

app.use(morgan('dev'))
app.use(json({limit: '20mb'}))
app.use(urlencoded({limit: '20mb', extended: false}))
app.use("/", express.static(path.join(__dirname, directoryToServe)));
app.use("/images", express.static(path.join(process.env.IMAGE_STORE)));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization", // Authorization is a custom header
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Content-Security-Policy", "default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'");
  next();
});

export default app
