$(function(){
    var audio = document.querySelector("#music");
    document.addEventListener("WeixinJSBridgeReady",function(){
        audio.play();
    },false);

    var isOpen = true;
    $('.switch').on('click',function(){
        if(isOpen){
            $('.switch>img').attr('src','img/close.png')
        }
        else{
            $('.switch>img').attr('src','img/open.png')
        }
        if(audio!==null){
            if(audio.paused){
                audio.play();// 这个就是播放
                document.addEventListener("WeixinJSBridgeReady", function () {
                    audio.play();
                }, false);
            }else{
                audio.pause();// 这个就是暂停
            }
        }
        isOpen = !isOpen;
    })


    var overscroll = function(el) {
        el.addEventListener('touchstart', function() {
            var top = el.scrollTop
                , totalScroll = el.scrollHeight
                , currentScroll = top + el.offsetHeight
            if(top === 0) {
                el.scrollTop = 1
            } else if(currentScroll === totalScroll) {
                el.scrollTop = top - 1
            }
        })
        el.addEventListener('touchmove', function(evt) {
            if(el.offsetHeight < el.scrollHeight)
                evt._isScroller = true
        })
    }
    overscroll(document.querySelector('.scroll'));
    document.body.addEventListener('touchmove', function(evt) {
        if(!evt._isScroller) {
            evt.preventDefault()
        }
    })
})

