# xwiki-local
Access XWiki pages as local files

## Requirements
* Node JS (4.0 & up)
* XWiki 7.3 (& up, before 7.3 there is a bug in XWiki REST API that removes new lines  http://jira.xwiki.org/browse/XWIKI-12787)

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


## Contribute 
  * fork
  * create a branch on your fork.
  * pull-request to master branch here.
  * win.


## License

### ISC License (ISC)
Copyright (c) 2016, Liel Dulev

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

