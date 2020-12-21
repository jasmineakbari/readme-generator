// functions to check for user input
const installation = installationText => {
  if(!installationText) {
    return '';
  }

  return `## Installation
${installationText}
`;
}

const contentInstallation = text => {
  if(!text) {
    return '';
  } else {
    return `* [Installation](#installation)`
  }
}

const contributing = contributingText => {
  if(!contributingText) {
    return '';
  }

  return `## Contributing
${contributingText}
`;
}

const contentContributing = text => {
  if(!text) {
    return '';
  } else {
    return `* [Contributing](#contributing)`
  }
}

const tests = testsText => {
  if(!testsText) {
    return '';
  }

  return `## Tests
${testsText}
`;
}

const contentTests = text => {
  if(!text) {
    return '';
  } else {
    return `* [Tests](#tests)`
  }
}

const email = emailText => {
  if(!emailText) {
    return '';
  }

  return `Feel free to contact me at: ${emailText}, if you have any questions regarding this project.
`;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
## Description
${data.description}

## Table of Contents
${contentInstallation(data.installation)}
* [License](#license)
${contentContributing(data.contributing)}
${contentTests(data.tests)}
* [Questions](#questions)

${installation(data.installation)}

## License
* ${data.license}

${contributing(data.contributing)}
${tests(data.tests)}

## Questions
Created by: [GitHub](https//:github.com/${data.github})
${email(data.email)}

`;
}

module.exports = generateMarkdown;
