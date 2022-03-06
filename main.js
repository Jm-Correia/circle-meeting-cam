"use strict"

const { app, BrowserWindow, Notification } = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 420,
        height: 320,
        transparent: true,
        frame: false,
        alwaysOnTop: true,
        titleBarStyle: 'hidden',
        resizable: false,
    })

    win.loadFile('index.html')
    win.setAlwaysOnTop(true, 'screen');
    win.addListener("double-click", () => {
        win.width = 400;
        win.height = 300;
    })
}


const NOTIFICATION_TITLE = 'Starting WebCam'
const NOTIFICATION_BODY = 'Now you can show youself!'

function showNotification() {
    new Notification(
        {
            title: NOTIFICATION_TITLE,
            body: NOTIFICATION_BODY,
            timeoutType: 'default'
        }).show()
}

app.whenReady().then(() => {
    createWindow()
    showNotification()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})