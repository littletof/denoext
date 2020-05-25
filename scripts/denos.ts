// @deno-types="https://unpkg.com/cac/mod.d.ts"
import { cac } from "https://unpkg.com/cac/mod.js";

// https://github.com/cacjs/cac
const cli = cac("denos");

cli
  // Simply omit the command name, just brackets
  .command("[dir]", "Generate project")
  .alias("new").alias("n")
  .option("-y", "Generates without questions")
  .action((dir, options) => {
    console.log(dir);
    console.log(options);
  });

/* cli
  .command("new [dir]", "Remove a dir")
  .option("-y", "Generates without questions")
  .action((dir, options) => {
    console.log(dir);
    console.log(options);
  }); */

cli
  .command("add <filename>", "Add a file")
  .option("--no-mod", "Do not add to mod.ts")
  .option("--no-test", "Do not add tests")
  .action((filename, options) => {
    console.log(filename);
    console.log(options);
  });

// Display help message when `-h` or `--help` appears
cli.help();
// Display version number when `-v` or `--version` appears
// It's also used in help message
cli.version("0.0.1");

cli.parse();
