var searched_content = localStorage.getItem("content1");
setTimeout(function(){
    document.title=searched_content;
    $('#scontent').text(searched_content);
 }, 0.1000);