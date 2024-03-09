#!/usr/bin/env node
import chalk from "chalk";
import path from "node:path";
import { cwd } from "node:process";
import { mkdirSync } from "node:fs";
import gradient from "gradient-string";
import figlet from "figlet";

// getting dayNumber from cli arguments.
const cliArguments = process.argv;
const dayNumber = cliArguments[2];

// exiting if the number is not specified correctly in the cli.
if (!isNumber(dayNumber)) {
  console.log(chalk.red("Please enter a number."));
  console.log(chalk.blueBright("eg., typecreate 1"));
  process.exit(1);
}

// creating directories for all the directory names specified in the cli.
const currentTerminalDirectory = cwd();
const directoriesToCreate = ["dayNUMBER/videos", "dayNUMBER/videos/edited", "dayNUMBER/videos/recorded", "dayNUMBER/videos/recorded/Bubble Text", "dayNUMBER/videos/recorded/Result Screenshot", "dayNUMBER/videos/recorded/Typing"];
const directoryNames = directoriesToCreate.map((directoryName) => directoryName.replace("NUMBER", dayNumber));

directoryNames.forEach(directoryName => {
  try {
    const directory = path.resolve(currentTerminalDirectory, directoryName);

    mkdirSync(directory, { recursive: true });
  } catch (error) {
    console.log(chalk.red(error.message));
    process.exit(1);
  }
});

//displaying a cool done message.
figlet("Done :)", (error, data) => {
  console.log(gradient.mind(data));
});



function isNumber(str) {
  // Try to convert the string to a number
  // If it's a valid number, parseFloat or parseInt will return a number
  // If it's not a valid number, parseFloat or parseInt will return NaN
  return !isNaN(parseFloat(str)) && isFinite(str);
}