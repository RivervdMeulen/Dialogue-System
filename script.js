var npcTextField = document.getElementById("npc");
var opt1btn = document.getElementById("option1");
var opt2btn = document.getElementById("option2");
var opt3btn = document.getElementById("option3");
var changeConv1 = document.getElementById("changeconv1");
var changeConv2 = document.getElementById("changeconv2");

var currentBranch = 0;
var currentConv = 0;

var conversations = [conv1, conv2];

setTexts(conversations[currentConv][currentBranch][0], conversations[currentConv][currentBranch][1][0], conversations[currentConv][currentBranch][2][0], conversations[currentConv][currentBranch][3][0]);

opt1btn.addEventListener("click",()=>{
  currentBranch = conversations[currentConv][currentBranch][1][1]
  setTexts(conversations[currentConv][currentBranch][0], conversations[currentConv][currentBranch][1][0], conversations[currentConv][currentBranch][2][0], conversations[currentConv][currentBranch][3][0]);
})

opt2btn.addEventListener("click",()=>{
  currentBranch = conversations[currentConv][currentBranch][2][1]
  setTexts(conversations[currentConv][currentBranch][0], conversations[currentConv][currentBranch][1][0], conversations[currentConv][currentBranch][2][0], conversations[currentConv][currentBranch][3][0]);
})

opt3btn.addEventListener("click",()=>{
  currentBranch = conversations[currentConv][currentBranch][3][1]
  setTexts(conversations[currentConv][currentBranch][0], conversations[currentConv][currentBranch][1][0], conversations[currentConv][currentBranch][2][0], conversations[currentConv][currentBranch][3][0]);
})

changeConv1.addEventListener("click",()=>{
  currentConv = 0;
  currentBranch = 0;
  setTexts(conversations[currentConv][currentBranch][0], conversations[currentConv][currentBranch][1][0], conversations[currentConv][currentBranch][2][0], conversations[currentConv][currentBranch][3][0]);
})

changeConv2.addEventListener("click",()=>{
  currentConv = 1;
  currentBranch = 0;
  setTexts(conversations[currentConv][currentBranch][0], conversations[currentConv][currentBranch][1][0], conversations[currentConv][currentBranch][2][0], conversations[currentConv][currentBranch][3][0]);
})

function setTexts(text, opt1, opt2, opt3) {
  npcTextField.innerHTML = text;
  opt1btn.value = opt1;
  opt2btn.value = opt2;
  opt3btn.value = opt3;
}
