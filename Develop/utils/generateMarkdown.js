// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  ${[data]}

  ## Description
  ${data.description}

  

  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributions}

  ## Tests
  ${data.testing}   

  ## Questions
  Here is a link to my github for more information: https://github.com/${
    data.github
  }

  You can reach me with any additional questions by email: ${data.email} 

  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
