 var searched_content = localStorage.getItem("content1");
 $.ajax({
        type: "GET",
        url: "content_ajax.html",
        data: '{}',
        success: function(response){
            alert("changing");
            document.title=searched_content;
            $('#scontent').text(searched_content);

        }
    });