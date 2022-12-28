// borrowed from 

window.addEventListener("mouseup", handleSelection);

var selectedText;

function handleSelection() {
  sel = window.getSelection()
  selectedText = sel.toString().replace(/\s/g, "");

  //////////////// TO-DO ////////////////
  // Try to figure out how to get context of a word
  //////////////// TO-DO ////////////////
  // ref
  // https://stackoverflow.com/questions/4332753/how-to-get-selected-text-but-can-i-get-surrounding-context-in-javascript
  // https://stackoverflow.com/questions/28173274/window-getselection-getrangeat0-innerhtml-without-breaking-nodes

  // var selectedRange = sel.rangeCount ? sel.getRangeAt(0) : null;
  // if (selectedRange) {
  //     alert("Offset " + selectedRange.startOffset
  //         + " in node " + selectedRange.startContainer.nodeName);
  // };

  // documentation refs
  // https://developer.mozilla.org/en-US/docs/Web/API/Selection/getRangeAt
  // https://developer.mozilla.org/en-US/docs/Web/API/Selection/rangeCount
  // https://developer.mozilla.org/en-US/docs/Web/API/Selection

  alert(selectedText);
}

// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message, sender, sendResponse) {
//   let msg =
//     selectedText && selectedText.length > 0
//       ? selectedText
//       : "_TextNotSelected_";
//   sendResponse({ swor: msg });
// }