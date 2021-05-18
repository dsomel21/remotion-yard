const { exec, spawn } = require('child_process');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

(function render() {
  console.log(`🕵🏽‍♀️ Searching for component: ${argv.comp}`);
  try {
    if (typeof argv.comp !== 'string') {
      throw new Error(
        'Invalid ID. Enter the component ID that you want to render'
      );
    }
    const compName = argv.comp;
    console.log(`💃🏾 Attempting to render ${compName}`);
    exec(`cd ../../`);
    const renderCommand = exec(
      `npx remotion render src/index.tsx ${compName} tmp/${Date.now()}_${compName}.mp4`
    );
    renderCommand.stdout.pipe(process.stdout);
  } catch (error) {
    console.log(`❌ ${error}`);
  }
})();
