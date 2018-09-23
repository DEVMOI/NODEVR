const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let baseUrl;

if (process.env.NODE_ENV === "DEV") {
    baseUrl = "http://localhost:8080/"
} else {
    baseUrl = `file://${process.cwd()}//dist/index.html`
}

app.on("ready", ()=> {
    let window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            devTools:false
        }
    })
    window.loadURL(baseUrl)
})