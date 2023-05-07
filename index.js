const $txt = document.querySelector(".txt-title");
const content = "안녕하세요 \n소프트웨어학과\n최준혁입니다.";
let contentIndex = 0;
  
let typing = function () {
    $txt.innerHTML += content[contentIndex];
    contentIndex++;
    if (content[contentIndex] === "\n") {
      $txt.innerHTML += "<br />";
      contentIndex++;
    }
    if (contentIndex > content.length) {
      $txt.textContent = "";
      contentIndex = 0;
    }
};
  
setInterval(typing, 200);