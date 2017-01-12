$(document).ready(function() {
    var $newsTable = $('#newstable tbody');
    refreshNews();
    //添加新闻的功能
    $('#btnsubmit').click(function(e) {
        e.preventDefault();

        if ($('#newstitle').val() === "" || $('#newsimg').val() === "" || $('#newstime').val() === "") {
            if ($('#newstitle').val() === "") {
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }
            if ($('#newsimg').val() === "") {
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().removeClass('has-error');
            }
            if ($('#newstime').val() === "") {
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().removeClass('has-error');
            }
        } else {
            var jsonNews = {
                newstitle: $('#newstitle').val(),
                newsimg: $('#newsimg').val(),
                newstime: $('#newstime').val(),
                newstype: $('#newstype').val()
            };
            $.ajax({
                url: 'server/insert.php',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                success: function(data) {
                    refreshNews();
                },
                error:function (error) {
                    console.log(error);
                }
            });
        }
    });
    //删除新闻的功能
    var deleteId;
    $newsTable.on('click', '.btn-danger', function(e) {
        $('#deleteModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(4).html();
    });
    $('#deleteModal #confirmDelete').click(function(e) {

        $.ajax({
            url: './server/delete.php',
            type: 'post',
            data: { newsid: deleteId },
            success: function(data) {
                $('#deleteModal').modal('hide');
                refreshNews();
            },
            error:function (error) {
                console.log(error);
            }
        });


    });

    //编辑新闻的功能
    var updateId;
    $newsTable.on('click', '.btn-primary', function(e) {
        $('#updateModal').modal('show');
        updateId = $(this).parent().prevAll().eq(4).html();
          $.ajax({
            url: './server/curnews.php',
            type: 'get',
            datatype:'json',
            data: { newsid: updateId },
            success: function(data) {
                $('#unewstitle').val(data[0].newstitle);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewstype').val(data[0].newstype);            
                $('#unewstime').val(data[0].newstime);
            },
            error:function (error) {
                console.log(error);
            }
        });

    });
    $('#updateModal #confirmUpdate').click(function(e) {
         $.ajax({
            url: './server/update.php',
            type: 'POST',
            data:{ 
               newstitle : $('#unewstitle').val(),
               newsimg : $('#unewsimg').val(),
               newstype : $('#unewstype').val(),            
               newstime : $('#unewstime').val(),
               newsid : updateId
            },                
            success: function(data) {                
                $('#updateModal').modal('hide');
                refreshNews();               
            },
            error:function (error) {
                console.log(error);
            }
      

            });
     });


    //刷新新闻列表的功能
    function refreshNews() {
        $newsTable.empty();
        $.ajax({
            url: './server/getnews.php',
            type: 'get',
            datatype: 'json',
            data:{newstype:'0'},
            success: function(data) {
                $.each(data, function(index, item, array) {
                    var $tdid = $('<td>').html(item.id);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdimg = $('<td>').html(item.newsimg);
                    var $tdtime = $('<td>').html(item.newstime);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdctrl = $('<td>');
                    var $btnchange = $('<button>').addClass('btn btn-primary btn-xs').html('编辑');
                    var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdctrl.append($btnchange, $btndelete);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid, $tdtitle, $tdimg, $tdtime, $tdtype, $tdctrl);
                    $newsTable.append($tRow);
                });
            },
            error: function(error) {
                console.log(error);
            }
        });
    }
});
