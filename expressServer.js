import express from "express"
import path from "path"

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
const app = express();


const staticFolderRoot = `${__dirname}/static`;
app.use( express.static(staticFolderRoot) );


app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT} ...`);
});