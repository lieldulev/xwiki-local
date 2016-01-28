# xwiki-local
Access XWiki pages as local files

## Requirements
* Node JS (4.0 & up)

## Installation
Currently best option is

  1. `$ git clone git@github.com:lieldulev/xwiki-local.git`
  2. `$ cd xwiki-local`
  3. `$ npm -g install`
  4. You are good to go.

_Hopefully it will be available to be installed with npm directly soon._

## Usage
```
  Usage: xwikil [options] [command]


  Commands:

    config                 Interactive shell to configure ~/.xwikil file.
    get <url> [target]     Download an XWiki page.
    put <source> <target>  Upload a local file as a page edit.

  xwiki-local is a CLI tool that enable you access XWiki pages as local files.

  Website: https://github.com/lieldulev/xwiki-local

  Copyright: (C) 2016 Liel Dulev

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```
