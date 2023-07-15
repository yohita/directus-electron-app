const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  send: (channel, data) => ipcRenderer.invoke(channel, data),
  on: (channel, callable, event, data) => ipcRenderer.on(channel, callable(event, data)),
});
