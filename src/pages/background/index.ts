import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';

reloadOnUpdate('pages/background');

console.log('background loaded');

const menuItems = [
  { id: 'improve', title: '✍️ Improve writing' },
  { id: 'simplify', title: '🐣 Simplify language' },
  { id: 'longer', title: '➕ Make it longer' },
  { id: 'shorter', title: '➖ Make it shorter' },
  { id: 'tweet', title: '🐤 Fit into a tweet' },
];

for (const { id, title } of menuItems) {
  chrome.contextMenus.create({ id, title, contexts: ['selection'] });
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
  /**
   * content of the `info`:
   * editable: false
   * frameId: 0
   * menuItemId: "improve"
   * pageUrl: "https://medium.com/extensions-development/chrome-extension-how-to-use-contextmenus-api-81f3d7997245"
   * selectionText: "..."
   */
  console.log('onclick', info);
  console.log('tab', tab);

  chrome.tabs.create({
    url: 'editor.html',
  });
});
