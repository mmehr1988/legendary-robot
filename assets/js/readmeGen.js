// function to generate README.md
function badgeLicense(data) {
  const licenseType = data.license[0];

  let licenseOutput = ' ';
  switch (licenseType) {
    case 'Apache License 2.0':
      licenseOutput = `<a href="https://choosealicense.com/licenses/apache-2.0" target="_blank"><img src="https://img.shields.io/badge/License-Apache%202.0-yellow.svg" /></a>`;
      break;
    case 'GNU General Public License 3.0':
      licenseOutput = `<a href="https://choosealicense.com/licenses/gpl-3.0" target="_blank"><img src="https://img.shields.io/badge/License-GPLv3-blue.svg" /></a>`;
      break;
    case 'MIT':
      licenseOutput = `<a href="https://choosealicense.com/licenses/mit" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" /></a>`;
      break;
    case 'Mozilla Public 2.0':
      licenseOutput = `<a href="https://choosealicense.com/licenses/mpl-2.0" target="_blank"><img src="https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg" /></a>`;
      break;
    default:
      console.log('No license chosen');
  }
  return licenseOutput;
}

function generateREADME(data) {
  return `# ${data.repo}

  ## Project Title: ${data.title}

  ${badgeLicense(data)}

  ## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#Installation)
  3. [Usage](#Usage)  
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [License](#License)
  7. [Questions](#Questions)

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
  ${data.license[0]}
  
  ## Questions
  Github Portfolio Link: [${data.name}](https://github.com/${data.github})<br>
  Email Contact: ${data.email}
  
  `;
}
module.exports = generateREADME;
