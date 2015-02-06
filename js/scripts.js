$(document).ready(function(){
    $(".nav li.disabled a").click(function() {
        return false;
    });
    $('.nav-tabs').stickyTabs();
    $('.img-thumbnail').click(function(){
	    $('.modal-body').empty();
	    var title = $(this).parent('span').attr("title");
	    var src = $(this).attr('src');
	    var src_logo = src.slice(0,-4);
	    var img = '<center><img src="' + src + '" class="img-responsive"/></center>';
	    var img_logo = '<img src="' + src_logo + '_logo.jpg" class="img-responsive" style="height:40px;float:left;margin-bottom:5px;margin-right:5px" onerror="this.style.visibility = \'hidden\'"/>';
	    $('.modal-title').html(title+img_logo);
	    $('.modal-body').html(img);
	    $('#myModal').modal({show:true});
    });
});
