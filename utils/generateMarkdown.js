
function renderLicenseBadge(license) {
  switch (license) {
    case 'mit':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'gpl':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'apache':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'mozilla':
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
    case 'bsd3':
      return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    case 'bsd2':
      return '![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)';
    case 'cco':
      return '![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)';
    case 'eclipse':
      return '![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)';
    case 'agpl':
      return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)';
    case 'lgpl':
      return '![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)';
    case 'unlicense':
      return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
    default:
      return '';
  }
}


function renderLicenseLink(license) {
  switch (license) {
    case 'mit':
      return 'https://opensource.org/licenses/MIT';
    case 'gpl':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'apache':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'mozilla':
      return 'https://opensource.org/licenses/MPL-2.0';
    case 'bsd3':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'bsd2':
      return 'https://opensource.org/licenses/BSD-2-Clause';
    case 'cco':
      return 'http://creativecommons.org/publicdomain/zero/1.0/';
    case 'eclipse':
      return 'https://opensource.org/licenses/EPL-1.0';
    case 'agpl':
      return 'https://www.gnu.org/licenses/agpl-3.0';
    case 'lgpl':
      return 'https://www.gnu.org/licenses/lgpl-3.0';
    case 'unlicense':
      return 'http://unlicense.org/';
    case 'nolicense':
      return '';
    default:
      return '';
  }
}


function renderLicenseSection(license, choices) {
  if (license === '' || license === 'nolicense') {
    return { section: '', tableOfContents: '' };
  } else {
    const licenseName = choices.find(choice => choice.value === license)?.name;
    const licenseSection = `## License
  This project is licensed under the ${licenseName} - see the [LICENSE](${renderLicenseLink(license)}) file for details.`
    const licenseTableOfContents = `\n- [License](#license)`
    return { section: licenseSection, tableOfContents: licenseTableOfContents };
  }
}


function generateMarkdown(data, choices) {
  const { section: licenseSection, tableOfContents: licenseTableOfContents } = renderLicenseSection(data.license, choices);
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)${licenseTableOfContents}


## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Questions or comments? Check out my [GitHub](${data.github}) or shoot me an [email](mailto:${data.email}).

${licenseSection}
`;
}

module.exports = generateMarkdown;