


      const message= document.querySelector('#search1');
      var content="hello";
      message.addEventListener('input', function () {
             content=this.value;
            console.log(content);
<!--             document.getElementById('title').innerHTML=content;-->

        });
       message.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      console.log(content);
      document.getElementById("spinner1").src="static/images/spinner.gif";
       setTimeout(function(){
    document.getElementById("spinner1").style.visibility="hidden";
}, 3000);

     setTimeout(function(){
    document.getElementById('title').innerHTML=content;
    localStorage.setItem("content1", content);


}, 3500);

setTimeout(function(){
    console.log("hello==========="+content);
    window.location.href="static/js/content.html";


}, 5000);

 }
});




