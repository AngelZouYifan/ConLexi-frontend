let query = { active: true, currentWindow: true };

let word;

chrome.tabs.query(query, gotTabs);
function gotTabs(tabs) {
  let msg = {
    txt: "hello from popup",
  };

  // No word has been selected yet, explain functionality to user
  chrome.tabs.sendMessage(tabs[0].id, msg, function (response) {
    if (!response) {
      document.getElementById("phonetic").innerHTML = "Welcome!";
      document.getElementById("example").innerHTML =
        "Please select a word to see it in context";
    } else if (response.swor === "_TextNotSelected_") {
      document.getElementById("error").innerHTML = "Please select a word!";
    } else {
      let swo = response.swor;
      swo = swo.replace(/[^a-zA-Z ]/g, "");
      // added a line
      word = swo
    //   dictionary(swo);
      setValues();
    }
  });
}

let wordef,
//   word,
  phonetic,
  pos,
  defin,
  example,
  sourceurl,    // we change sourceurl into our website url
  index = 0,
  indlimit;

//////////////////////////
// This sends a query to API to search word definition. 
// We need to replace this with a request to backend for stored context.
/////////////////////////

// async function dictionary(query) {
//   let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
//   let response = await fetch(url);
//   wordef = await response.json();
//   if (wordef && !wordef.title) {
//     indlimit = wordef[0].meanings.length;
//     word = wordef[0].word;
//     phonetic = wordef[0].phonetic ? wordef[0].phonetic : "";
//     // sourceurl = `https://en.wiktionary.org/wiki/${word}`;
//     index = 0;

//     setValues();

//     if (indlimit > 1) {
//       document
//         .getElementById("navigatecontainer")
//         .classList.remove("hidenavigator");
//     }
//   } else if (wordef.title) {
//     document.getElementById("error").innerHTML = "⚠  " + wordef.title;
//   }
// }

document.getElementById("prev").addEventListener("click", handlePrevious);
document.getElementById("next").addEventListener("click", handleNext);

function handlePrevious() {
  index = index - 1;
  if (index < 0) index = indlimit - 1;
  setValues();
}

function handleNext() {
  index = index + 1;
  if (index >= indlimit) index = 0;
  setValues();
}

function setValues() {
    defin = "whatever random definition"
    example = "context sentences"
//   pos = wordef[0].meanings[index].partOfSpeech;
//   defin = wordef[0].meanings[index].definitions[0].definition;
//   example = wordef[0].meanings[index].definitions[0].example
//     ? wordef[0].meanings[index].definitions[0].example
//     : null;


//   document.getElementById(
//     "word"
//   ).innerHTML = `${word} <a href=${sourceurl} class="searchanchor" target="_blank"><img class="searchsvg" title="read more" src = "../assets/searchonweb.svg" alt="read more"/><a>`;

    document.getElementById("word").innerHTML = `${word}`;
//   document.getElementById("phonetic").innerHTML = `${phonetic}  (${pos})`;
//   document.getElementById("definition").innerHTML = defin;
  if (example) {
    document.getElementById("example").innerHTML = `Context: ${example}`;   // replace this with our sentences
  } else {
    document.getElementById("example").innerHTML = "";
  }
}
