function init() {
  const inquirer = require('inquirer');
  const fs = require('fs');
  const generate = require('./utils/readmeGen');
  const path = require('path');

  //   Type of File + Saving In Root Folder Directory
  var filename = 'README.md';
  var pathDir = path.dirname(__filename).split('/');
  //Reducing path directory array by 2 levels since node is saved in "/assets/js"
  pathDir.length = pathDir.length - 2;
  var filesave = path.join(pathDir.join('/'), filename);

  inquirer
    .prompt([
      // REPO TITLE -------------------------------------
      {
        type: 'input',
        message: 'Enter Repo Title',
        name: 'repo',
      },
      // TITLE -------------------------------------
      {
        type: 'input',
        message: 'Enter Project Title',
        name: 'title',
      },
      // DESCRIPTION -------------------------------
      {
        type: 'input',
        message: 'Enter Project Description',
        name: 'description',
      },
      // INSTALLATION ------------------------------
      {
        type: 'input',
        message: 'Enter Installation Instructions',
        name: 'installation',
      },
      // USAGE -------------------------------------
      {
        type: 'input',
        message: 'Enter Usage Info',
        name: 'usage',
      },
      // CONTRIBUTING ------------------------------
      {
        type: 'input',
        message: 'How Can People Contribute To This Project',
        name: 'contributing',
      },
      // TESTS -------------------------------------
      {
        type: 'input',
        message: 'Enter Test Instructions',
        name: 'tests',
      },
      // LICENSE -------------------------------------
      {
        type: 'checkbox',
        message: 'Choose A License',
        choices: ['Apache License 2.0', 'GNU General Public License 3.0', 'MIT', 'Mozilla Public 2.0'],
        name: 'license',
      },
      // NAME ------------------------------------
      {
        type: 'input',
        message: 'Enter Name Shown On GitHub',
        name: 'name',
      },
      // GITHUB ------------------------------------
      {
        type: 'input',
        message: 'Enter Your Github Username',
        name: 'github',
      },
      // EMAIL -------------------------------------
      {
        type: 'input',
        message: 'Enter Your Email Address',
        name: 'email',
      },
    ])
    .then((response) => {
      return fs.writeFileSync(filesave, generate(response));
    });
}

init();
