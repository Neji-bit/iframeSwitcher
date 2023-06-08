chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  hiddenFlag = msg.hidden
  sendResponse([...document.querySelectorAll("iframe")].length || "-")
  document.querySelectorAll("iframe").forEach(e => {
    e.classList.toggle("iframeswitcher--arrow")
  })
});
