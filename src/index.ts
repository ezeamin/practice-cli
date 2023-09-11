#! /usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .argument('<name>', 'Name of the user')
  .option('-c, --capitalize', 'Capitalize name')
  .action((name: string) => {
    if (program.opts().capitalize) {
      console.log(name.toUpperCase());
    }
    console.log(name);
  })
  .description("Say 'Hello'");

program
  .command('add <numbers...>')
  .action((numbers: number[]) => {
    const sum = numbers.reduce((a, b) => Number(a) + Number(b), 0);
    console.log(sum);
  })
  .description('Add numbers');

program.parse(process.argv);
