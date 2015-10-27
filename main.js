'use strict';

var app = require('app');
var path = require("path");
var fs = require("fs");
var BrowserWindow = require('browser-window');


require('crash-reporter').start();

var mainWindow = null;
var config_path = path.join(app.getPath("userData"), "config.json");

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {
  var config;

  try {
    config = JSON.parse(fs.readFileSync(config_path, 'utf8'));
  } catch(e) {
    config = {
      bounds: {
        width: 1200,
        height: 1000
      }
    };
  }
  
  mainWindow = new BrowserWindow({width: config['bounds']['width'], height: config['bounds']['height']});

  mainWindow.on('close', function() {
    var bounds = mainWindow.getBounds();
    fs.writeFileSync(config_path, JSON.stringify({
      bounds: {
        width: bounds['width'],
        height: bounds['height']
      }
    }));
    mainWindow = null;
  });
    
  mainWindow.loadUrl('file://' + __dirname + '/index.html'); 

  setApplicationMenu();
});

function setApplicationMenu (){
  var Menu = require('menu');
  var menu = Menu.buildFromTemplate([
    {
      label: "Application",
      submenu: [
        {label: "About Application", selector: "orderFrontStandardAboutPanel:"},
        {type: "separator"},
        {label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
      ]
    },
    {
      label: "View",
      submenu: [
        {
          label: 'Reload',
          accelerator: 'CmdOrCtrl+R',
          click: function(item, focusedWindow) {
            if (focusedWindow)
              focusedWindow.reload();
          }
        },
      ]
    },
    {
      label: "Edit",
      submenu: [
        { label: "Undo", accelerator: "Command+Z", selector: "undo:" },
        { label: "Redo", accelerator: "Shift+Command+Z", selector: "redo:" },
        { type: "separator" },
        { label: "Cut", accelerator: "Command+X", selector: "cut:" },
        { label: "Copy", accelerator: "Command+C", selector: "copy:" },
        { label: "Paste", accelerator: "Command+V", selector: "paste:" }
      ]
    }
  ]);
  Menu.setApplicationMenu(menu);
}
