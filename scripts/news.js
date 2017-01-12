$(document).ready(function() {
    refreshNews('精选');
    $('nav a').click(function(e){
        e.preventDefault();
        var type = $(this).text();
        $('nav ul li a').attr("class","");
        $(this).attr("class","selectedtype");
       console.log(type);
        refreshNews(type);
    });
    
});

function refreshNews(type) {
    var $lists = $('article ul');
    $lists.html("");
    $.ajax({
        url:'./server/getnews.php',
        type:'get',
        datatype:'json',
        data:{newstype:type},
        success:function (data) {
            data.forEach(function (item,index,array) {
                var $list = $('<li></li>').addClass('news-list').appendTo($lists);
                var $newsImg = $('<div></div>').addClass('news-img').appendTo($list);
                var $img = $('<img>').attr('src', item.newsimg).appendTo($newsImg);
                var $newsContent = $('<div></div>').addClass('news-content').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsContent);
                var $p = $('<p></p>').appendTo($newsContent);
                var $newsTime = $('<span></span>').html(item.newstime).appendTo($p);
            });
            
        }
    });
   
}


