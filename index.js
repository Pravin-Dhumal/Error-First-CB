const fs = require("fs");

const file = "efc.txt";

// fs.readFile('efc.txt', function(err, data) {
//     // If an error occurred, handle it (throw, propagate, etc)
//     if(err) {
//       console.log('Unknown Error');
//       return;
//     }
//     // Otherwise, log the file contents
//     console.log(data);
//   });

fs.readFile(file, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  }
  console.log(data);
  const content = "Updated log";
  fs.writeFile(file, content, (err2) => {
    if (err2) {
      console.log(err2);
      return;
    }
    console.log("wrote some content");
    fs.readFile(file, "utf8", (err3, data3) => {
      if (err3) {
        console.log(err3);
        return;
      }
      console.log(data3);
    });
  });
});
