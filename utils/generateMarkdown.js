// A function that returns a license badge based on which license is passed in.
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  var licenseBadge = "";
  if(license == "MIT"){
    licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg";
  
  } else if(license == "Apache 2.0"){
    licenseBadge = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
  
  } else if(license == "BSD 3-Clause"){
    licenseBadge = "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
  
  } 
  return licenseBadge;
}

// A function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  var licenseLink = "";
  if(license == "MIT"){
    licenseLink = "https://opensource.org/licenses/MIT";
  
  } else if(license == "Apache 2.0"){
    licenseLink = "https://opensource.org/licenses/Apache-2.0";
  
  } else if(license == "BSD 3-Clause"){
    licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
  
  } 
  return licenseLink;
}

// A function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {

  var licenseSection = "";
  if(license == "MIT"){
    licenseSection = 

    `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  
  } else if(license == "Apache 2.0"){
    licenseSection = 

    `Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
  
  } else if(license == "BSD 3-Clause"){
    licenseSection = 
    
    `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    
    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    
    3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
  } 
  return licenseSection;

}

// Generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  What was my motivation?
  - ${data.description1}

  Why did I build this project?
  - ${data.description2}

  What problem does it solve?
  - ${data.description3}

  What did I learn?
  - ${data.description4}
  

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Installation

  ${data.Installation}

  ## Usage

  ![${data.altText}](${data.image})

  ## Contributing

  ${data.collaborators}

  ## Tests

  ${data.tests}

  ## Questions

  Github Profile: ${data.github}

  If you need to reach me, you can with through my email: ${data.email}

  ## License

  ![License](${renderLicenseBadge((data.license))})
  (${renderLicenseLink((data.license))})

  Copyright ${data.year} ${data.name}

  ${renderLicenseSection((data.license))}

`;
}

module.exports = generateMarkdown;