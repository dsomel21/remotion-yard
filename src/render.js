const { spawn } = require('child_process');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

(function render() {
  try {
    if (!argv.comp)
      throw new Error(
        'Invalid ID. Enter the component ID that you want to render'
      );
    const compName = argv.comp;
    const renderCommand = spawn(
      `npx remotion render index.tsx ${compName} tmp/${Date.now()}_${compName}.mp4`
    );
    renderCommand.stdout.on('data', data => console.log(data.tString()));
    renderCommand.stdout.on('err', err => console.error(err.tString()));
    //
  } catch (error) {
    console.log(`❌ ${error}`);
  }
})();
