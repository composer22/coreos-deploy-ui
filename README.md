## CoreOS Deploy UI
[![License MIT](https://img.shields.io/npm/l/express.svg)](http://opensource.org/licenses/MIT)
[![Current Release](https://img.shields.io/badge/release-v0.0.1-brightgreen.svg)](https://github.com/composer22/coreos-deploy-ui/releases/tag/v0.0.1)

This folder contains a simple UI to access the cluster_map API call with composer22/coreos-deploy.

## Configuration

Modify the angular/coreosDeployUI/js/config.js to point to your server and to use your API security token.

## Running

Open index.html in Safari and it should load up a list of machines on your server.

## Filtering the list

Two search boxes are provided:

* Machine Query - filter the machines by a keyword. This is useful for grabbing all the machines with a keyword in the metadata, such as a list of control machines.
* Unit Query - filter the units of a machine by keyword. This will return a list of machines and a sublist of units that contain a particular keyword. This is useful for finding machines that are runnning a service.

## Additional Unit Information

Hovering over the signal icon next to the name of the service will display additional information on the service status.

## License

(The MIT License)

Copyright (c) 2015 Pyxxel Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
