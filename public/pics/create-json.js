const fs = require('fs');
const path = require('path');

// Directory path
const directoryPath = __dirname;

// Read all files in the directory
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    // Filter .jpg files
    const jpgFiles = files.filter(file => path.extname(file).toLowerCase() === '.jpg');

    // Create JSON object
    const jsonContent = JSON.stringify(jpgFiles, null, 2);

    // Write JSON to file
    fs.writeFile('images.json', jsonContent, 'utf8', (err) => {
        if (err) {
            return console.log('An error occurred while writing JSON to file: ' + err);
        }
        console.log('JSON file has been saved.');
    });
});