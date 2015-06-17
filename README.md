# Cyclus.js
A front-end for [Cyclus](https://github.com/cyclus/cyclus), the nuclear fuel cycle simulator .

## Install from sources
Download and install [npm](https://nodejs.org/download)

    npm install -g gulp  (note: on osx you must use 'sudo' when the -g flag is used)  
    cd /path/to/cyclus.js
    npm install
Create native applications

    gulp [--all] [--osx] [--win] [--linux] [--osx64] [--win64] [--linux64] [--osx32] [--win32] [--linux32] 

If no option is provided the current platform will be used.
Executables are placed in dist/cyclus.js

## Development
Developers should install [nwjs](https://github.com/nwjs/nw.js) (formally known as node-webkit).
You can then run the code directly without using gulp
    
    cd /path/to/cyclus.js
    nw .
  