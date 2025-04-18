const { contextBridge, ipcRenderer } = require('electron');
const fs = require('fs').promises;
const path = require('path');

contextBridge.exposeInMainWorld('electronAPI', {
  readdir: async (dir) => fs.readdir(dir),
  stat: async (filePath) => fs.stat(filePath),
  joinPath: (...args) => path.join(...args),
  getHomeDir: () => process.env.HOME
});
