// const chalk = require("chalk");
import chalk from 'chalk';

function getBlueConsole(){

    console.log(chalk.blue('Hello world!')); 
}

// module.exports = getBlueConsole;
export default getBlueConsole;