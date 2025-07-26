// local.js
import app from "./index.js"; // või "./server.js"
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Lokaalne test töötab: http://localhost:${port}`);
});
