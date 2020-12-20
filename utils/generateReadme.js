const fs = require('fs');

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/READme.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File Created! please check the "dist" folder for your new Readme!'
            });
        });
    });
};

module.exports = writeFile;