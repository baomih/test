
    $(function(){
        $(document).find('video').load
        $(document).find('video').play
        $('.b-banner').height($(window).height()-50)
        $('#b-main').css('padding-top',($(window).height()-90+'px'))
        if($(window).width() >= 1024){
            console.log(111)
            $('#b-main').css('padding-top',($(window).height()-210+'px'))
        }
        if($(window).width() <= 770){
            var bannerwidth = $('.banner-title ').width()*0.5
            $('.banner-title li:first-child').width(bannerwidth).css('margin','0 auto').siblings().remove()
        }
        if($(window).width() >= 770){
            var bannerwidth = $('.banner-title ').width()*0.5
            $('.banner-title').append('<li><a href="">东方草本</a></li>' +
                '<li><a href="">东方之美</a></li>')
        }
        $(window).resize(function(){
            $('.video-box').play
            $('.b-banner').height($(window).height()-50)
            $('#b-main').css('padding-top',($(window).height()-90+'px'))
            if($(window).width() >= 1024){
                $('#b-main').css('padding-top',($(window).height()-210+'px'))
            }
            if($(window).width() <= 770){
                var bannerwidth = $('.banner-title ').width()*0.5
                $('.banner-title li:first-child').width(bannerwidth).css('margin','0 auto').siblings().remove()
            }
            if($(window).width() >= 770){
                var bannerwidth = $('.banner-title ').width()*0.5
                $('.banner-title').append('<li><a href="">东方草本</a></li>' +
                    '<li><a href="">东方之美</a></li>')
            }
        })
        $(window).scroll(function () {
            if($(window).scrollTop() >= 120) {
                if($(window).width()<=1024){
                    $('.nav-hidden li:first-child').width(150).siblings().remove()
                }
                $('.nav-hidden').css('display','block')
                $('.nav').css('display','none')
            }else{
                $('.nav-hidden').css('display','none')
                $('.nav').css('display','block')
            }
        })
})
