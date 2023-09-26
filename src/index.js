const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')

/* Code to wait for index to finish loading and then loading screen disappears
const eventEmitter = require('events')

const loadingEvents = new eventEmitter()
const createMainWindow = () => new BrowserWindow()

app.on('ready', () => {
  const window = createMainWindow()
  window.loadFile('loading.html')

  // Our loadingEvents object listens for 'finished'
  loadingEvents.on('finished', () => {
  window.loadFile('index.html')
})

  setTimeout(() => loadingEvents.emit('finished'), 3000)
})
*/

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

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong')
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})