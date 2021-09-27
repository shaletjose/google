
var searched_content = localStorage.getItem("content1");
//alert("The Value Received is " +searched_content );
setTimeout(function(){


    document.getElementById('title1').innerHTML=searched_content;
    document.getElementById('scontent').innerHTML=searched_content;

}, 0.1000);