'use strict';

const fs = require('fs-extra');
const pathToJSONFile = 'dist/package.json';
const NGX_BOOTSRAP_CI = 'ngx-bootstrap-ci';

updatePkg();

async function updatePkg() {
  const packageJson = JSON.parse(fs.readFileSync(pathToJSONFile), 'utf8');

  packageJson.version = `${packageJson.version}-dev.${getTime()}`;
  packageJson.name = NGX_BOOTSRAP_CI;

  fs.writeFile(pathToJSONFile, JSON.stringify(packageJson, null, 2));

  console.log(`Package.json was updated`);
}

function getTime() {
  const date = new Date();
  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  if (month.length < 2) {
    month = '0' + month;
  }

  if (day.length < 2) {
    day = '0' + day;
  }

  return `${year}${month}${day}${hour}${minutes}${seconds}`;
}
