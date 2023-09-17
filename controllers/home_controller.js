const fs = require("fs");
const folderPath = "./uploads";
const csv = require("csv-parser");

module.exports.home = (req, res) => {
  //read file path
  fs.readdir(folderPath, function (err, files) {
    if (err) {
      console.error("Error reading folder:", err);
    }
    return res.render("home", { files });
  });
};

module.exports.upload = (req, res) => {
  console.log("file uploaded");
  res.redirect("back");
};

module.exports.open = (req, res) => {
  const filename = req.params.filename;
  const filePath = `./uploads/${req.params.filename}`;

  if (filePath) {
    const data = [];

    // Read and parse the CSV file
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        data.push(row);
      })
      .on("end", () => {
        //read file path
        fs.readdir(folderPath, function (err, files) {
          if (err) {
            console.error("Error reading folder:", err);
          }
          return res.render("file", { data, files });
        });
      });
  }
};
