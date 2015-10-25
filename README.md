# idobattan2
idobata client based on the [electron](https://github.com/atom/electron)

## for Users
Download Binary From here !
[release tag page](https://github.com/notona/idobattan2/releases)

## screenshots
![screenshot1](https://raw.githubusercontent.com/notona/idobattan2/master/screenshot1.png)
![screenshot1](https://raw.githubusercontent.com/notona/idobattan2/master/screenshot2.png)




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

## Licence
The MIT License
