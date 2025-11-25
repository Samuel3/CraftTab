console.log('CraftTab - background script');

// Create context menu item for About page when extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'about-crafttab',
    title: 'About CraftTab',
    contexts: ['action']
  });
});

// Handle context menu click
chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === 'about-crafttab') {
    const optionsUrl = chrome.runtime.getURL('pages/options/index.html?tab=about');
    chrome.tabs.create({ url: optionsUrl });
  }
});
