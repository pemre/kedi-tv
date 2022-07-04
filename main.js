const { app, BrowserWindow } = require('electron');

// Hot reload
try {
  require('electron-reloader')(module)
} catch (_) {}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    width: 1200,
    height: 600,
    icon: 'src/logo/kedi-tv-white.png',
  });
  mainWindow.loadFile('src/index.html');
  mainWindow.setFullScreen(true);
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// ------------------------------

// In main process.
const { ipcMain } = require('electron');

ipcMain.on('RUN', (event, arg) => {
  console.log('Received RUN', arg);
  event.reply('RUN_RESPONSE', arg);
  runCommand(arg, event);
});

const runCommand = ({ command, parameters }, event) => {
  const child = require('child_process').execFile;
  child(command, parameters, function(err, stdout, stderr) {
    if (err) {
      console.error(err);
      return;
    }
    console.log('OUT: ----->' + stdout.toString());
    event.reply('RUN_RESPONSE', 'OUT: ' + stdout.toString());
    console.log('ERR: ----->' + stderr.toString());
    event.reply('RUN_RESPONSE', 'ERR: ' + stderr.toString());
  });
};
