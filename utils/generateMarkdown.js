// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
console.log('license badge', license)
if (license !== 'None') {
  return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
}
return ' '
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
console.log('License link', license)
if (license !== 'None') {
  return `\n * [License](#License)\n`
}
return ' '
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
console.log('license section', license)
if (license !== 'None') {
  return `## License 
  
  This project is licensed under the ${license} license.`
}
return ' '
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Tests](#Tests)
  * [Usage](#Tests)
  ${renderLicenseLink(data.license)}
  * [Questions](#Questions)
  * [Contrubtions](#Contributions)
  * [Issues](#Contributions)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Tests
  ${data.test}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributions
  ${data.contribution}
  ## Issues
  If you have any issues contact Andrew at ${
    data.email
  } You can check out his other work at (https://github.com/${data.GitHub}/) .
`;
}

module.exports = generateMarkdown;
