$(function(){

    var ScreenWidth = $('body').width();
    var ScreenHeight = $('body').height();
    var baskTop = 539-ScreenHeight*100/ScreenWidth;

    //随机生成展示图片数组
    function randomArrImg(){
        arr = [1,2,3,4,5,6,7,8,9,10]
        var arrImg = []
        for(var i = 0;i<10;i++){
            //随机获取一个 1-arr.length 的数字
            var num = Math.floor(Math.random() * arr.length);
            //将获取的数字添加到arrImg数组
            arrImg.push(arr[num])
            //将获取的数字从arr数组中删除
            arr.splice(num,1)
        }
        return arrImg
    }
    var arrImg = randomArrImg()
    window.arrImg = arrImg

    var _ = document.querySelector.bind(document);
    var userInfo = {
        userHeadImgUrl:'img/headimg.png',//头像
        userName:'￡陌予★倾城╮',//用户名
        joinTime:'2017年1月12日',//加入时间
        totalAfterDay:'201',//加入时长
        totalBrands:'5',//玩过的品牌个数
        totalToys:'100',//玩过的玩具个数
        spendDayMoney:'9.5',//平均每天花费金额
        toysMoney:'9.5',//玩具总金额
        changeDollar:'9.5',//约合美元
        ability:['行走能力','认知能力','动手能力','创造力','大动作','精细动作','想象力','音乐乐感','平衡能力','肌肉力量','视觉锻炼'],//培养宝宝的能力，固定5个
        playedToysImgUrl:[  //玩具图片
            {
                imgurl:'img/arrImg/'+arrImg[0]+'.png',
            },
            {
                imgurl:'img/arrImg/'+arrImg[1]+'.png',
            },
            {
                imgurl:'img/arrImg/'+arrImg[2]+'.png',
            },
            {
                imgurl:'img/arrImg/'+arrImg[3]+'.png',
            },
            {
                imgurl:'img/arrImg/'+arrImg[4]+'.png',
            },
            {
                imgurl:'img/arrImg/'+arrImg[5]+'.png',
            },
            {
                imgurl:'img/arrImg/'+arrImg[6]+'.png',
            },
            {
                imgurl:'img/arrImg/'+arrImg[7]+'.png',
            },
            {
                imgurl:'img/arrImg/'+arrImg[8]+'.png',
            },
            {
                imgurl:'img/arrImg/'+arrImg[9]+'.png',
            },
        ],
    }
    var userHtml = {
        lineExtension:[
            '<div class="line line1"></div>',
            '<div class="line line2"></div>',
            '<div class="line line3"></div>',
            '<div class="line line4"></div>',
            '<div class="line line5"></div>',
            '<div class="line line6"></div>',
            '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="g-line7"><line x1="5" y1="0" x2="200" y2="400"  class="g-rect-fill7" /></svg>',
        ],
        userHeadImg:'<div class="header fadeIn-1s">\n' +
        '            <div>\n' +
        '                <span class="headimg-circle">\n' +
        '                    <img src='+userInfo.userHeadImgUrl+' alt="">\n' +
        '                </span>\n' +
        '            </div>\n' +
        '        </div>',
        userName:'<p class="txt-wipe1 wipeIn">\n' +
        '            <span class="txt-wipe1-span">'+userInfo.userName+'</span>妈妈\n' +
        '        </p><br>',
        meetFootprint:'<p class="txt-wipe2 wipeIn-3s">与百宝箱玩具共享平台相遇足迹...</p>',
        startTravel:'<div class="start fadeInDown">\n' +
        '            <div class="start-box">\n' +
        '               <img src="img/start.png" alt="" class="starting shake" onclick="start()">\n' +
        '               <img src="img/logo.png" alt="">\n' +
        '           </div>\n' +
        '        </div>',
        firstImg:' <div class="animation-data bounceIn first-data">\n' +
        '            <div class="animation-box first-box">\n' +
        '                <span class="animation-headimg-box first-headimg-box">\n' +
        '                    <img src='+userInfo.userHeadImgUrl+' alt="" class="first-img">\n' +
        '                </span>\n' +
        '            </div>\n' +
        '        </div>',
        firstDescribe:' <span class="first-txt wipeIn-3s">\n' +
        '            <p>从 <span class="red">'+userInfo.joinTime+'</span></p>\n' +
        '            <p>开始成为了最潮共享玩具平台百宝箱的小会员</p>\n' +
        '        </span>',
        secondImg:'<div class="animation-data bounceIn second-data">\n' +
        '            <div class="animation-box second-box">\n' +
        '                <span class="animation-headimg-box second-headimg-box"></span>\n' +
        '            </div>\n' +
        '        </div>',
        secondDescribe:'<span class="second-txt wipeIn-3s">\n' +
        '            <p>在这 <span class="red">'+userInfo.totalAfterDay+'</span>天内</p>\n' +
        '            <p>玩了<span class="red">'+userInfo.totalBrands+'</span>个品牌</p>\n' +
        '            <p><span class="red">'+userInfo.totalToys+'</span>件世界级玩具</p>\n' +
        '        </span>',

        fourthImg:'<div class="animation-data bounceIn fourth-data">\n' +
        '            <div class="animation-box fourth-box">\n' +
        '                <span class="animation-headimg-box fourth-headimg-box"></span>\n' +
        '            </div>\n' +
        '        </div>',
        fourthDescribe:' <span class="fourth-txt wipeIn-3s">\n' +
        '            <p>每天只花 <span class="red">'+userInfo.spendDayMoney+'</span>元</p>\n' +
        '            <p>玩具价值<span class="red">¥'+userInfo.toysMoney+'</span>万</p>\n' +
        '        </span>',
        fifthImg:'<div class="animation-data bounceIn fifth-data">\n' +
        '    <div class="animation-box fifth-box">\n' +
        '        <span class="animation-headimg-box fifth-headimg-box"></span>\n' +
        '    </div>\n' +
        '</div>',
        fifthDescribe:'<span class="fifth-txt wipeIn"><p>培养了宝宝多重能力</p></span>',
        fifthDescribe2:'<span class="fifth-txt2 wipeIn"><p>为全面发展的人生迈出第一步</p></span>',
        fifthAbility:[
            '<ul class="ability-ul bobbingUpDown"><span class="animation-txt animation-txt1 fadeIn-1s">'+userInfo.ability[arrImg[0]]+'</span></ul>',
            '<span class="animation-txt animation-txt2 fadeIn-1s">'+userInfo.ability[arrImg[1]]+'</span>',
            '<span class="animation-txt animation-txt3 fadeIn-1s">'+userInfo.ability[arrImg[2]]+'</span>',
            '<span class="animation-txt animation-txt4 fadeIn-1s">'+userInfo.ability[arrImg[3]]+'</span>',
            '<span class="animation-txt animation-txt5 fadeIn-1s">'+userInfo.ability[arrImg[4]]+'</span>',
        ],
        sixthImg:'<div class="animation-data bounceIn sixth-data">\n' +
        '    <div class="animation-box sixth-box">\n' +
        '        <span class="animation-headimg-box sixth-headimg-box"></span>\n' +
        '    </div>\n' +
        '</div>',
        sixthDescribe:'<span class="sixth-txt wipeIn">\n' +
        '    <p>同时感谢</p>\n' +
        '    <p>为保护环境做出了贡献</p>\n' +
        '</span>',
        seventhDescribe:'<span class="seventh-txt wipeIn">\n' +
        '            <p>2017年过去了</p>\n' +
        '            <p>期待2018年我们的故事...</p>\n' +
        '        </span>',
        shakeBtn:'<div class="sharing fadeIn-4s  bounceInUp">\n' +
        '    <img src="img/sharing.png" alt="" onclick="shareIng()">\n' +
        '</div>',
        toTopBtn:'<div class="to-top-box fadeInRight" onclick="toTop()">\n' +
        '    <span class="to-top-icon">\n' +
        '        <img src="img/to-top.png" alt="" class="to-top">\n' +
        '    </span>\n' +
        '    <p class="to-top-txt">返回顶部</p>\n' +
        '</div>',
    }


    userHtml.allPlayedToys = {
           threeData1Out:'<ul class="three-ul">\n' +
           '    <div class="animation-data bounceChangeOut three-data1">\n' +
           '        <div class="animation-box three-box">\n' +
           '            <img src='+userInfo.playedToysImgUrl[1].imgurl+' alt="" class="animation-img three-img">\n' +
           '        </div>\n' +
           '    </div>\n' +
           '</ul>',
           threeData1In:' <ul class="three-ul">\n' +
       '            <div class="animation-data bounceChangeIn three-data1">\n' +
       '                <div class="animation-box three-box">\n' +
       '                    <img src='+userInfo.playedToysImgUrl[2].imgurl+' alt="" class="animation-img three-img">\n' +
       '                </div>\n' +
       '            </div>\n' +
       '        </ul>',
           threeData2Out:'<div class="animation-data bounceChangeOut three-data2">\n' +
       '    <div class="animation-box three-box">\n' +
       '        <img src='+userInfo.playedToysImgUrl[3].imgurl+' alt="" class="animation-img three-img">\n' +
       '    </div>\n' +
       '</div>',
           threeData2In:'<div class="animation-data bounceChangeIn three-data2">\n' +
       '    <div class="animation-box three-box">\n' +
       '        <img src='+userInfo.playedToysImgUrl[4].imgurl+' alt="" class="animation-img three-img">\n' +
       '    </div>\n' +
       '</div>',
           threeData3Out:'<div class="animation-data bounceChangeOut three-data3">\n' +
       '    <div class="animation-box three-box">\n' +
       '        <img src='+userInfo.playedToysImgUrl[5].imgurl+' alt="" class="animation-img three-img">\n' +
       '    </div>\n' +
       '</div>',
           threeData3In:'<div class="animation-data bounceChangeIn three-data3">\n' +
       '    <div class="animation-box three-box">\n' +
       '        <img src='+userInfo.playedToysImgUrl[6].imgurl+' alt="" class="animation-img three-img">\n' +
       '    </div>\n' +
       '</div>',
           threeData4Out:'<div class="animation-data bounceChangeOut three-data4">\n' +
       '    <div class="animation-box three-box">\n' +
       '        <img src='+userInfo.playedToysImgUrl[7].imgurl+' alt="" class="animation-img three-img">\n' +
       '    </div>\n' +
       '</div>',
           threeData4In:'<div class="animation-data bounceChangeIn three-data4">\n' +
       '    <div class="animation-box three-box">\n' +
       '        <img src='+userInfo.playedToysImgUrl[8].imgurl+' alt="" class="animation-img three-img">\n' +
       '    </div>\n' +
       '</div>',
           threeData5In:'<div class="animation-data bounceChangeIn three-data5">\n' +
       '    <div class="animation-box three-box">\n' +
       '        <img src='+userInfo.playedToysImgUrl[9].imgurl+' alt="" class="animation-img three-img">\n' +
       '    </div>\n' +
       '</div>',
           threeData6In:'<div class="animation-data bounceChangeIn three-data6">\n' +
       '    <div class="animation-box three-box">\n' +
       '        <img src='+userInfo.playedToysImgUrl[0].imgurl+' alt="" class="animation-img three-img">\n' +
       '    </div>\n' +
       '</div>',

       }


    //载入头像
    $(".bask").append(userHtml.userHeadImg)
    //载入用户信息
    $(".header").append(userHtml.userName)
    _('.txt-wipe1').addEventListener("webkitAnimationEnd", function(){
        $('.header').append(userHtml.meetFootprint)
        // 载入开始时光旅行
        _('.txt-wipe2').addEventListener("webkitAnimationEnd", function(){
            $('.bask').append(userHtml.startTravel)
        },false)
    },false)

    var startKey = true
    start = function(){
        if(startKey){
            //再点击无效
            startKey = false
            //载入线条1
            $('.bask').append(userHtml.lineExtension[0]).animate({top:'-50vw'},2000)
            $('.bj').animate({top:'-50vw'},2000)
            //载入加入时间
            _('.line1').addEventListener("webkitAnimationEnd", function(){
                $('.bask').append(userHtml.firstImg)
                _('.first-data').addEventListener("webkitAnimationEnd", function(){
                    $('.bask').append(userHtml.firstDescribe)
                    //载入线条2
                    _('.first-txt').addEventListener("webkitAnimationEnd", function(){
                        $('.bask').append(userHtml.lineExtension[1]).animate({top:'-80vw'},2000)
                        $('.bj').animate({top:'-80vw'},2000)
                        //载入玩具消费
                        _('.line2').addEventListener("webkitAnimationEnd", function(){
                            $('.bask').append(userHtml.secondImg)
                            _('.second-data').addEventListener("webkitAnimationEnd", function(){
                                $('.bask').append(userHtml.secondDescribe)
                                //载入线条3
                                _('.second-txt').addEventListener("webkitAnimationEnd", function(){
                                    $('.bask').append(userHtml.lineExtension[2]).animate({top:'-130vw'},2000)
                                    $('.bj').animate({top:'-130vw'},2000)

                                        _('.line3').addEventListener("webkitAnimationEnd", function()  {
                                            // 第一位置
                                            $('.bask').append(userHtml.allPlayedToys.threeData1Out)
                                            _('.three-data1').addEventListener("webkitAnimationEnd", function(){
                                                $('.bask').append(userHtml.allPlayedToys.threeData1In)
                                            },false)
                                            // 第二位置
                                            setTimeout(function(){
                                                $('.three-ul').append(userHtml.allPlayedToys.threeData2Out)
                                                _('.three-data2').addEventListener("webkitAnimationEnd", function(){
                                                    $('.three-ul').append(userHtml.allPlayedToys.threeData2In)
                                                },false)
                                            },800)
                                            // 第三位置
                                            setTimeout(function(){
                                                $('.three-ul').append(userHtml.allPlayedToys.threeData3Out)
                                                _('.three-data3').addEventListener("webkitAnimationEnd", function(){
                                                    $('.three-ul').append(userHtml.allPlayedToys.threeData3In)
                                                })
                                            },1600)
                                            // 第四位置
                                            setTimeout(function(){
                                                $('.three-ul').append(userHtml.allPlayedToys.threeData4Out)
                                                _('.three-data4').addEventListener("webkitAnimationEnd", function(){
                                                    $('.three-ul').append(userHtml.allPlayedToys.threeData4In)
                                                })
                                            },2400)
                                            // 第五位置
                                            setTimeout(function(){
                                                $('.three-ul').append(userHtml.allPlayedToys.threeData5In)
                                            },3200)
                                            // 第六位置
                                            setTimeout(function(){
                                                $('.three-ul').append(userHtml.allPlayedToys.threeData6In)
                                                afterAll('.three-data6')
                                            },4000)
                                        },false)

                                },false)
                            },false)
                        },false)
                    },false)
                }, false);
            }, false);
        }
    }

    toTop = function(){
        $('.bask').animate({top:'0vw'},1500)
        $('.to-top-box').removeClass('fadeInRight')
        $('.to-top-box').addClass('fadeOutRight')
    }

    var afterAll = function(e){
        _(e).addEventListener("webkitAnimationEnd", function() {
            //载入线条4
            $('.bask').append(userHtml.lineExtension[3]).animate({top:'-190vw'},2000)
            $('.bj').animate({top:'-190vw'},2000)
            _('.line4').addEventListener("webkitAnimationEnd", function() {
                $('.bask').append(userHtml.fourthImg)
                _('.fourth-data').addEventListener("webkitAnimationEnd", function() {
                    $('.bask').append(userHtml.fourthDescribe)
                    $('.bask').append('<img src="img/pig.png" alt="" class="pig fadeIn-1s">')
                    _('.fourth-txt').addEventListener("webkitAnimationEnd", function() {
                        //载入线条5
                        $('.bask').append(userHtml.lineExtension[4]).animate({top:'-260vw'},2000)
                        $('.bj').animate({top:'-260vw'},2000)
                        _('.line5').addEventListener("webkitAnimationEnd", function() {
                            $('.bask').append(userHtml.fifthImg)
                            _('.fifth-data').addEventListener("webkitAnimationEnd", function() {
                                $('.bask').append(userHtml.fifthDescribe)
                                _('.fifth-txt').addEventListener("webkitAnimationEnd", function() {
                                    $('.bask').append(userHtml.fifthDescribe2)
                                    _('.fifth-txt2').addEventListener("webkitAnimationEnd", function() {
                                        $('.bask').append(userHtml.fifthAbility[0])

                                        setTimeout(function(){
                                            $('.ability-ul').append(userHtml.fifthAbility[1])
                                        },1000)

                                        setTimeout(function(){
                                            $('.ability-ul').append(userHtml.fifthAbility[2])
                                        },2000)

                                        setTimeout(function(){
                                            $('.ability-ul').append(userHtml.fifthAbility[3])
                                        },3000)
                                        setTimeout(function(){
                                            $('.ability-ul').append(userHtml.fifthAbility[4])
                                            _('.animation-txt5').addEventListener("webkitAnimationEnd", function(){
                                                $('.bask').append(userHtml.lineExtension[5]).animate({top:'-340vw'},2000)
                                                $('.bj').animate({top:'-340vw'},2000)
                                                _('.line6').addEventListener("webkitAnimationEnd", function(){
                                                    $('.bask').append(userHtml.sixthImg)
                                                    _('.sixth-data').addEventListener("webkitAnimationEnd", function(){
                                                        $('.bask').append('<span class="greenearth fadeIn-1s"></span>')
                                                        _('.greenearth').addEventListener("webkitAnimationEnd", function(){
                                                            $('.bask').append(userHtml.sixthDescribe)
                                                            _('.sixth-txt').addEventListener("webkitAnimationEnd", function(){
                                                                $('.bask').append(userHtml.lineExtension[6])
                                                                // $('.bask').animate({top:'-375vw'},2000)
                                                                $('.bask').animate({top:'-'+baskTop+'vw'},2000)
                                                                $('.bj').animate({top:'-'+baskTop+'vw'},2000)
                                                                _('.g-line7').addEventListener("webkitAnimationEnd", function(){
                                                                    $('.bask').append(userHtml.seventhDescribe)
                                                                    _('.seventh-txt').addEventListener("webkitAnimationEnd", function(){
                                                                        $('.bask').append(userHtml.shakeBtn)
                                                                        _('.sharing').addEventListener("webkitAnimationEnd", function(){
                                                                            $('.bask').append(userHtml.toTopBtn)
                                                                        },false)
                                                                    },false)
                                                                },false)
                                                            },false)
                                                        },false)
                                                    },false)
                                                },false)
                                            },false)
                                        },4000)
                                    },false)
                                },false)
                            },false)
                        },false)
                    },false)
                },false)
            },false)
        },false)
    }

    $('.hint').on('click',function(){
        $('.hint').css('display','none')
    })
    shareIng = function(){
        $('.hint').css('display','block')
    }

})

