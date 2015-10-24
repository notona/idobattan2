# idobattan2
idobata client

## for Users
Download Binary From here !

[release tag page](https://github.com/notona/idobattan2/releases)

## for developers
```
npm install -g electron-prebuilt

cd idobattan2
npm install 

electron .
```

## packaging release build

### for Windows
```
# for Windows
npm run-script win

# here is build result
cd build/idobattan2/idobattan2-win32-x32
# or
cd build/idobattan2/idobattan2-win32-x64
```

### for mac
```
npm run-script mac

# here is build result
cd build/idobattan2/idobattan2-darwin-x64
```

### linux(may be works. i didn't check it)

```
./node_modules/electron-packager/cli.js ./ idobattan2 --platform=linux --arch=all --out ./build/idobattan2 --version 0.34.1 --overwrite --icon=./idobattan_icon.ico
```
