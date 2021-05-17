const fs = require('fs');
const path = require('path');

const getLatestFileCreated = (fileExt, dirPath) => {
  const files = fs.readdirSync(dirPath);

  const fileTimestamp = files
    .filter(file => path.extname(file) === `.${fileExt}`)
    .map(file => file.split('.')[0])
    .map(file => Number(file.split('_')[0]))
    .filter(file => !Number.isNaN(file))
    .sort((a, b) => a - b)
    .pop();

  const fileRegExp = new RegExp(`${fileTimestamp}.*.${fileExt}`, 'ig');

  const fullFileName = files.find(file => file.match(fileRegExp));
  if (!fullFileName) {
    console.error(`Could not find ${fileExt} file in ${dirPath}`, 'getFiles');
    process.exit(1);
  }

  return path.resolve(dirPath, fullFileName);
};

const getContentFromFile = filePath => {
  const data = fs.readFileSync(filePath, { encoding: 'utf-8' });

  if (!data) {
    console.error(`Could not find file ${filePath}`, 'getFiles');
    process.exit(1);
  }

  return data;
};

module.exports = { getLatestFileCreated, getContentFromFile };
