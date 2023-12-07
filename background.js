// Background script (background.js) - Example for a Chrome extension

// Listen for the browser action (extension icon) being clicked
chrome.browserAction.onClicked.addListener(function (tab) {
  // Your logic to handle the click event

  // For example, you can open a new tab with your extension's content
  chrome.tabs.create({ url: "main.html" });
});
