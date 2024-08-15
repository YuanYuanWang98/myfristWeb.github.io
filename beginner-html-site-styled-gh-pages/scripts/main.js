// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
// document.querySelector("html").addEventListener("click", function () {
//     alert("别戳我，我怕疼。");
//   });

//添加一个图像切换器
let myImage = document.querySelector("img");

myImage.onclick = () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

//添加个性化欢迎信息
/*
在用户初次进入站点时将网页的标题改成一段个性化欢迎信息（即在标题中添加用户的名字）。
名字信息会由 Web Storage API 保存下来，即使用户关闭页面之后再重新打开，
仍可得到之前的信息。还会添加一个选项，可以根据需要改变用户名字以更新欢迎信息。
*/
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("请输入你的名字。");  //prompt类似alert()
  if(!myName){  //判断用户输入的名字是否为空，或者没有输入
    setUserName();
  }else{
    localStorage.setItem("name", myName);  //localStorage：将数据存储在浏览器中供后续获取，setTiem()创建一个'name'数据项，赋值myName
    myHeading.textContent = "Mozilla 酷毙了，" + myName;  //设置需要输出的欢迎词
  }
}

if (!localStorage.getItem("name")) {  //false
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = () => {
  setUserName();
}
