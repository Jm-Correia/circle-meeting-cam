"use strict"

const { app, BrowserWindow, Notification } = require('electron')
const path = require('path')
const is_mac = process.platform === 'darwin'
if (is_mac) {
    app.dock.hide()
}
function createWindow() {
    const win = new BrowserWindow({
        width: 420,
        height: 320,
        transparent: true,
        frame: false,
        alwaysOnTop: true,
        resizable: false,
        visibleOnAllWorkspaces: true,
    })

    win.loadFile('index.html')
    win.setAlwaysOnTop(true, 'screen-saver');
    win.setVisibleOnAllWorkspaces(true)
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