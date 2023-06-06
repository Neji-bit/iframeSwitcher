//  1秒ごとにiframeの表示ステータスを上書き（遅れて読み込まれるケースあるため）
let hiddenFlag = true
setInterval(() => {[...document.querySelectorAll("iframe")].forEach(e => {
  e.style.visibility = hiddenFlag ? "hidden" : "initial"
})}, 1000)

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  hiddenFlag = msg.hidden
  sendResponse([...document.querySelectorAll("iframe")].length || "-")
});
