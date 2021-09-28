var searched_content = localStorage.getItem("content1");
setTimeout(function(){
    document.title=searched_content;
    $('#scontent').val(searched_content);
}, 0.1000);