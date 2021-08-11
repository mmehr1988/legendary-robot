// Function to generate Badge + Link To License
function renderLicenseBadge(data) {
  const licenseType = data.license[0];

  let licenseBadge = '';
  switch (licenseType) {
    case 'Apache License 2.0':
      licenseBadge = `<a href="https://choosealicense.com/licenses/apache-2.0" target="_blank"><img src="https://img.shields.io/badge/License-Apache%202.0-yellow.svg" /></a>`;
      break;
    case 'GNU General Public License 3.0':
      licenseBadge = `<a href="https://choosealicense.com/licenses/gpl-3.0" target="_blank"><img src="https://img.shields.io/badge/License-GPLv3-blue.svg" /></a>`;
      break;
    case 'MIT License':
      licenseBadge = `<a href="https://choosealicense.com/licenses/mit" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" /></a>`;
      break;
    case 'Mozilla Public 2.0':
      licenseBadge = `<a href="https://choosealicense.com/licenses/mpl-2.0" target="_blank"><img src="https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg" /></a>`;
      break;
    default:
      console.log('');
  }
  return licenseBadge;
}

// Function to generate link for License
function renderLicenseLink(data) {
  const licenseType = data.license[0];

  let licenseLink = '';
  switch (licenseType) {
    case 'Apache License 2.0':
      licenseLink = `<a href="https://choosealicense.com/licenses/apache-2.0" target="_blank">Apache License 2.0</a>`;
      break;
    case 'GNU General Public License 3.0':
      licenseLink = `<a href="https://choosealicense.com/licenses/gpl-3.0" target="_blank">GNU General Public License 3.0</a>`;
      break;
    case 'MIT License':
      licenseLink = `<a href="https://choosealicense.com/licenses/mit" target="_blank">MIT License</a>`;
      break;
    case 'Mozilla Public 2.0':
      licenseLink = `<a href="https://choosealicense.com/licenses/mpl-2.0" target="_blank">Mozilla Public 2.0 License</a>`;
      break;
    default:
      console.log('');
  }
  return licenseLink;
}

// Function to create list
function renderList(str) {
  var params = [];
  // For 1 Line Break
  var indent0 = '\n';
  // For 1 Line Break + Indent Level 1
  var indent1 = '\n  ';
  // For 1 Line Break + Indent Level 2
  var indent2 = '\n        ';

  params.push(indent0, indent1, indent2);

  for (var i = 0; i < params.length; i++) {
    var x = new RegExp('(\\{' + i + '\\})', 'g');
    str = str.replace(x, params[i]);
  }

  return str;
}

// function to generate final README
function generateMarkdown(data) {
  return `# ${data.repo}

  ## Project Title: ${data.title}
  
  ${renderLicenseBadge(data)}

  ## Table of Contents:
  1. [Description](#description) 
  1. [Installation](#installation)
  1. [Usage](#usage)
  1. [Tips](#tips)
  1. [Contributing](#contributing)
  1. [Tests](#tests)
  ${renderLicenseLink(data) !== '' ? '1. [License](#license)' : ''}
  1. [Questions](#questions)
  
  ## Description
  ${renderList(data.description)}

  ## Installation
  ${renderList(data.installation)}

  ## Usage
  ${renderList(data.usage)}

  ## Contributing
  ${renderList(data.contributing)}

  ## Tests
  ${renderList(data.tests)}

  ${renderLicenseLink(data) !== '' ? '## License' : ''}
  ${renderLicenseLink(data) !== '' ? renderLicenseLink(data) : ''}

  ## Questions
  Github Portfolio Link: [${data.name}](https://github.com/${data.github})<br>
  Email Contact: ${data.email}
  `;
}

module.exports = generateMarkdown;
