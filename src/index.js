/* This page initializes the rendering and preload functions that are built in
from Electron.js. See below for description of methods */
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')

/* Creates window utilizing preload script */
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences : {
        preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('./src/index.html')
}

/* Creates window if no windows are loaded on start-up */
app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong')
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

/* Quits app if all windows are closed */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})