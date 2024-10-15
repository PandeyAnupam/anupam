// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

 let htmlStartValue = 0,
   htmlEndValue = 90,
   htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javaProgress = document.querySelector(".java"),
  javaValue = document.querySelector(".java-progress");

 let javaStartValue = 0,
   javaEndValue = 75,
   jsspeed = 30;

let progressjs = setInterval(() => {
  javaStartValue++;

  javaValue.textContent = `${javaStartValue}%`;
  javaProgress.style.background = `conic-gradient(#7d2ae8 ${
    javaStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javaStartValue == javaEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// sql progress circular bar 
let sqlProgress = document.querySelector(".sql"),
  sqlValue = document.querySelector(".sql-progress");

 let sqlStartValue = 0,
   sqlEndValue = 80,
  sqlspeed = 30;

let progresssql = setInterval(() => {
  sqlStartValue++;

  sqlValue.textContent = `${sqlStartValue}%`;
  sqlProgress.style.background = `conic-gradient(#20c997 ${
    sqlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (sqlStartValue == sqlEndValue) {
    clearInterval(progresssql);
  }
}, sqlspeed);

// JavaScript progress circular bar 
let JavaScriptProgress = document.querySelector(".JavaScript"),
JavaScriptValue = document.querySelector(".JavaScript-progress");

let JavaScriptStartValue = 0,
JavaScriptEndValue = 50,
JavaScriptspeed = 30;

let progressJavaScript = setInterval(() => {
  JavaScriptStartValue++;

  JavaScriptValue.textContent = `${JavaScriptStartValue}%`;
  JavaScriptProgress.style.background = `conic-gradient(#3f396d ${
    JavaScriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (JavaScriptStartValue ==JavaScriptEndValue) {
    clearInterval(progressJavaScript);
  }
}, JavaScriptspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
