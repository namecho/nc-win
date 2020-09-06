const { BrowserWindow, app, ipcMain } = require("electron");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 540,
    minWidth: 800,
    minHeight: 540,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile(`${__dirname}/dist/index.html`);

  // 打开调试工具
  // win.webContents.openDevTools();

  /** 监听全屏变化 */
  // 最大化
  win.on("maximize", () => {
    win.webContents.send("window-change", false);
  });
  // 还原
  win.on("unmaximize", () => {
    win.webContents.send("window-change", true);
  });
}

app.whenReady().then(createWindow);

/** 自定义 header */
//  最小化
ipcMain.on("window-min", () => win.minimize());
// 切换
ipcMain.on("window-change", () => {
  if (win.isMaximized()) {
    win.unmaximize();
  } else {
    win.maximize();
  }
});
// 关闭
ipcMain.on("window-close", () => {
  win.close();
});

// 退出
app.on("window-all-closed", () => {
  app.quit();
});
