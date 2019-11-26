const { app, BrowserWindow, Menu } = require('electron')

const templates = require('./templates.js')

function createWindow(){
    let win = new BrowserWindow({
        width: 800,
        height:600,
        webPreferences:{
            nodeIntegration: true
        }
    })

    win.loadFile('interfaces/functions.html')

    const menu = Menu.buildFromTemplate(templates.menuTemplate)
    Menu.setApplicationMenu(menu)
}

app.on('ready', createWindow)