//  このhiddenのtrue/falseでiframeを非表示にするかどうかを決める。
let msg = {hidden: true}

//  フラグを入れ替えしてブラウザJSをコール。
switchIframe = () => {
  msg.hidden = !msg.hidden
  chrome.tabs.query({active: true, currentWindow: true})
  .then((tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, msg,
    (res) => {
      iframe_count.innerHTML=res
      iframe_enable.innerHTML=msg.hidden ? "hidden" : "show"
    });
  })
}

//  ボタンをクリックしたら、iframeON/OFFを切り替え。
switch_button.addEventListener("click", switchIframe)

let version = "0.2"
iframe_version.innerHTML = version
