// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let userLicense = `${data.license}`;
  if (userLicense === 'Mozilla Public License 2.0') {
    return 'http://mozilla.org/MPL/2.0/';
  } else '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 return `

# ${data.title}

## Description

 _Description of what user application should do:_

 ${data.description};

## Installation 

 _How to install user application:_

 ${data.installation};

## Usage 

 _This walks us thorugh how to use this app:_

 ${data.instructions};

## License

 _Any licesnse that we need to be aware of:_

 ${data.license};

## Contributing

 _How other developers may contribute to your project_

 ${data.contribution};

 [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Tests

 _Instruction on how to run test for user project:_

 ${data.confirm};

## Questions

 _Contact Info:_

 Github: [${data.github}](https://github.com/${data.github})

 Email: [${data.email}](mailto:${data.email});

`;
}

module.exports = generateMarkdown;