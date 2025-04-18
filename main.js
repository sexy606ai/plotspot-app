const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

const indexPath = path.join(__dirname, 'index.html');
const iconPath = path.join(__dirname, 'icon.png');
const preloadPath = path.join(__dirname, 'preload.js');

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      preload: preloadPath,
      contextIsolation: true,
      nodeIntegration: false
    },
    icon: fs.existsSync(iconPath) ? iconPath : undefined,
    backgroundColor: '#FFFFFF'
  });

  if (fs.existsSync(indexPath)) {
    win.loadFile(indexPath).catch(err => {
      console.error('Failed to load index.html:', err);
    });
  } else {
    console.error('index.html not found at:', indexPath);
    app.quit();
  }

  win.setMenuBarVisibility(false);
}

app.commandLine.appendSwitch('disable-gpu');

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('render-process-gone', (event, webContents, details) => {
  console.error('Renderer process crashed:', details);
});
