import Menu from "components/Menu";

const path = require("path");
const getFilesFromDir = require("./config/files");
const PAGE_DIR = path.join("src", "pages", path.sep);

const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlFiles = getFilesFromDir(PAGE_DIR, [".html"]);

const jsFiles = getFiles~FromDir(PAGE_DIR, [".js"]);
const entry = jsFiles.reduce( (obj, filePath) => {
    const entryChunkName = filePath.replace(path.extname(filePath), "").replace(PAGE_DIR, "");
    obj[entryChunkName] = `./${filePath}`;
    return obj;
}, {});

const htmlPlugins = htmlFiles.map( filePath => {
  const fileName = filePath.replace(PAGE_DIR, "");
  return new HtmlWebPackPlugin({
    chunks:[fileName.replace(path.extname(fileName), ""), "vendor"],
    template: filePath,
    filename: fileName})
});

module.exports = {
    entry: entry
    plugins:[...htmlPlugins],
    resolve:{
        alias:{
            src: path.resolve(__dirname, "src"),
            components: path.resolve(__dirname, "src", "components")
        }
    },
};
