const fs = require('fs');

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/readme.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File Created! please check your dist directoryfor your new Readme!'
            });
        });
    });
};

module.exports = writeFile;