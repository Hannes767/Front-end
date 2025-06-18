const fs = require("fs");
const path = require("path");

const checkForMaps = (folderPath, extension) => {
  if (!fs.existsSync(folderPath)) {
    console.warn(`⚠️ Kaust puudub: ${folderPath}`);
    return [];
  }
  const files = fs.readdirSync(folderPath);
  return files.filter((file) => file.endsWith(extension));
};

const jsMapDir = path.join(__dirname, "build", "static", "js");
const cssMapDir = path.join(__dirname, "build", "static", "css");

const jsMapFiles = checkForMaps(jsMapDir, ".js.map");
const cssMapFiles = checkForMaps(cssMapDir, ".css.map");

if (jsMapFiles.length === 0 && cssMapFiles.length === 0) {
  console.log("✅ Kõik korras: Ei leitud .map faile JS ega CSS jaoks.");
} else {
  if (jsMapFiles.length > 0) {
    console.warn("⚠️ Leiti JavaScript .map failid:");
    jsMapFiles.forEach((f) => console.log(` - js: ${f}`));
  }

  if (cssMapFiles.length > 0) {
    console.warn("⚠️ Leiti CSS .map failid:");
    cssMapFiles.forEach((f) => console.log(` - css: ${f}`));
  }

  console.warn("\n💡 Soovitused:");
  console.warn("1. Lisa package.json-sse:");
  console.warn('   "build": "GENERATE_SOURCEMAP=false react-scripts build"');
  console.warn("2. Seejärel tee:");
  console.warn("   npm run build && firebase deploy");

  process.exit(2);
}
