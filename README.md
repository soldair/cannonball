# cannonball
web ui for a cannon webcam. plugs into crazy daemon.

```sh
$ cannonball start -s <domain socket to command server>
server started on port  5000
open your browser to http://127.0.0.1:5000/
```


install
-------

```sh
npm install -g cannonball
```
or for dev

```
git clone git@github.com:soldair/cannonball.git
cd cannonball
npm install 
```

development
-----------

- start the server
```
npm start
```

- run the tests
```
npm test
```
