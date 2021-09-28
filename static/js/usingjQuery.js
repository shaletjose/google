
console.log("Entered")
const message= document.querySelector('#search1');
$('#search1').on("change keyup paste",function () {
    content=this.value;
    console.log(content);});


$('#search1').on("keypress",function (e) {

    if (e.key === 'Enter') {
     console.log("inside if")
     $('#spinner1').attr("src","static/images/spinner.gif");

      setTimeout(function(){
      $('#spinner1').attr("src","");
      }, 3000);

     setTimeout(function(){
      document.title=content;
     localStorage.setItem("content1", content);
      }, 3500);

     setTimeout(function(){
     console.log("hello==========="+content);
     window.location.href="static/js/content.html";
     }, 5000);

    }
});




