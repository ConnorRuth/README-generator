const licenses = [{name:"MIT", badge:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]", link:"https://opensource.org/licenses/MIT"}, 
{name:"Apache 2.0", badge:"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]", link:"https://opensource.org/licenses/Apache-2.0"},
{name:"GNU general public v3.0", badge:"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]", link:"https://www.gnu.org/licenses/gpl-3.0"}, 
{name:"BSD 2-Clause", badge:"[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]", link:"https://opensource.org/licenses/BSD-2-Clause"}, 
{name:"BSD 3-Clause", badge:"[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]", link:"https://opensource.org/licenses/BSD-3-Clause"}, 
{name:"Boost Software 1.0", badge:"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]", link:"https://www.boost.org/LICENSE_1_0.txt"}, 
{name:"Creative Commons Zero v1.0", badge:"[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]", link:"http://creativecommons.org/publicdomain/zero/1.0/"}, 
{name:"Eclipse Public 2.0", badge:"[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]", link:"https://opensource.org/licenses/EPL-1.0"}, 
{name:"Mozilla Public 2.0", badge:"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]", link:"https://opensource.org/licenses/MPL-2.0"}, 
{name:"The Unilicense", badge:"[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]", link:"http://unlicense.org/"}];
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return " ";
  }else{const selectedLicense = licenses.find(lice => lice.name === license);
    return selectedLicense.badge;}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return " ";
  }else{const selectedLicense = licenses.find(lice => lice.name === license);
    return selectedLicense.link;}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return " ";
  }else{const selectedLicense = licenses.find(lice => lice.name === license);
    return selectedLicense.badge;}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge();
  renderLicenseLink();
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
