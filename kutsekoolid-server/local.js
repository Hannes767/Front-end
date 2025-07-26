// local.js
import app from "./server.js"; // või "./server.js"
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Lokaalne test töötab: http://localhost:${port}`);
});
