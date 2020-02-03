// module.exports = {
//     entry: {
//         'index': './src/index.js',
//         'products/product-1': './src/pages/products/product-1.js',
//         'contact': './src/pages/contract.js',
//     },
// };

const path = require("path");
const getFilesFromDir = require("./config/files");
const PAGE_DIR = path.join("src", "pages", path.sep);

const jsFiles = getFiles~FromDir(PAGE_DIR, [".js"]);
const entry = jsFiles.reduce( (obj, filePath) => {
    const entryChunkName = filePath.replace(path.extname(filePath), "").replace(PAGE_DIR, "");
    obj[entryChunkName] = `./${filePath}`;
    return obj;
}, {});

module.exports = {
    entry: entry
};
