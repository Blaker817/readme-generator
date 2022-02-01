// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
let url 
if(data.license==="APACHE"){
  url = "https://img.shields.io/badge/license-Apache-blue"
}
if(data.license==="MIT"){
  url = "https://img.shields.io/badge/license-MIT-green"
}
if(data.license==="GPL"){
  url = "https://img.shields.io/badge/license-GPL-blue"
}
 let githubUrl = "https://github.com/" + data.githubUsername

  return `# ${data.title}
  ![This is a alt text.](${url})
## Contents 
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)

## Description 
  ${data.description}
## Installation 
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## License
This project uses the  ${data.license} license
## Questions 
Please vist [my github profile](${githubUrl}).
You can reach me at ${data.emailAdress}
`;
}

module.exports = generateMarkdown;
