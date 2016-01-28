#!/usr/bin/env node

var program = require('commander'),
    chalk = require('chalk'),
    currPackage = require('./package.json'),
    xwikil = require('./lib/xwikilocal'),
    conf = require('./lib/localconf');

var cmdValue ;

program
  .description("xwiki-local is a CLI tool that enable you access XWiki pages as local files.\n\n  Website: https://github.com/lieldulev/xwiki-local\n\n  Copyright: (C) 2016 Liel Dulev")
  .version(currPackage['version']);

program
  .command("config")
  .description("Interactive shell to configure ~/.xwikil file.")
  .action(function() {
    cmdValue = "config";
    conf.askSettings();
  });

program
  .command("get <url> [target]")
  .description("Download an XWiki page.")
  .action(function(url, target, options) {
    if (!conf.exists) { 
      console.log(chalk.red("~/.xwikil file was never configured. Please run 'xwikl config' first."));
      process.exit(1);
    }

    cmdValue = "get";
    xwikil.get(xwikil.restPathFromPageURL(url), target);
  });

program
  .command("put <source> <target>")
  .description("Upload a local file as a page edit.")
  .action(function(source, target) {
    if (!conf.exists) { 
      console.log(chalk.red("~/.xwikil file was never configured. Please run 'xwikl config' first."));
      process.exit(1);
    }
    cmdValue = "put";
    xwikil.put(source, xwikil.restPathFromPageURL(target));
  });

program.parse(process.argv);

// Catch missing actions
if (typeof cmdValue === 'undefined') {
   program.outputHelp();
   process.exit(1);
}


