const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


app.on ('ready', _=>{
    console.log('electron running')

    mainWindow = new BrowserWindow();

    mainWindow.on('closed', _=>{
        console.log("window closed");
        mainWindow = null;
    })

})

