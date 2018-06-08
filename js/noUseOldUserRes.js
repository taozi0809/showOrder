$(function(){

    var ScreenWidth = $('body').width();
    var ScreenHeight = $('body').height();
    var baskTop = 540-ScreenHeight*100/ScreenWidth;
    var _ = document.querySelector.bind(document);

    var userInfo = {
        userHeadImgUrl:'img/headimg.png',
        userName:'￡陌予★倾城╮',
        joinTime:'2017年1月12日',
        totalAfterDay:'201',
        totalBrands:'5',
        totalToys:'100',
        playedToysImgUrl:[
            {
                imgurl:'img/1.png',
            },
            {
                imgurl:'img/2.png',
            },
            {
                imgurl:'img/3.png',
            },
            {
                imgurl:'img/4.png',
            },
            {
                imgurl:'img/5.png',
            },
            {
                imgurl:'img/6.png',
            },
            {
                imgurl:'img/4.png',
            },
            {
                imgurl:'img/3.png',
            },
            {
                imgurl:'img/2.png',
            },
            {
                imgurl:'img/1.png',
            },
        ],
        spendDayMoney:'9.5',
        toysMoney:'9.5',
        changeDollar:'9.5',
        ability:['认知能力','动手能力','创造力','大动作','精细动作'],
    }

    var userHtml = {
        lineExtension:[
            '<div class="line line1"></div>',
            '<div class="line line2"></div>',
            '<div class="line line3"></div>',
            '<div class="line line4"></div>',
            '<div class="line line5"></div>',
            '<div class="line line6"></div>',
            '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="g-line7"><line x1="5" y1="0" x2="200" y2="500"  class="g-rect-fill7" /></svg>',
        ],
        userHeadImg:'<div class="header">\n' +
        '            <div>\n' +
        '                <span class="headimg-circle">\n' +
        '                    <img src='+userInfo.userHeadImgUrl+' alt="">\n' +
        '                </span>\n' +
        '            </div>\n' +
        '        </div>',
        userName:'<p class="txt-wipe1">\n' +
        '            <span class="txt-wipe1-span">'+userInfo.userName+'</span>妈妈\n' +
        '        </p><br>',
        meetFootprint:'<p class="txt-wipe2">与百宝箱玩具共享平台相遇足迹...</p>',
        startTravel:'<div class="start">\n' +
        '            <div class="start-box">\n' +
        '               <img src="img/start.png" alt="" class="starting">\n' +
        '               <img src="img/logo.png" alt="">\n' +
        '           </div>\n' +
        '        </div>',
        firstImg:' <div class="animation-data first-data">\n' +
        '            <div class="animation-box first-box">\n' +
        '                <span class="animation-headimg-box first-headimg-box">\n' +
        '                    <img src='+userInfo.userHeadImgUrl+' alt="" class="first-img">\n' +
        '                </span>\n' +
        '            </div>\n' +
        '        </div>',
        firstDescribe:' <span class="first-txt">\n' +
        '            <p>从 <span class="red">'+userInfo.joinTime+'</span></p>\n' +
        '            <p>开始成为了最潮共享玩具平台百宝箱的小会员</p>\n' +
        '        </span>',
        secondImg:'<div class="animation-data second-data">\n' +
        '            <div class="animation-box second-box">\n' +
        '                <span class="animation-headimg-box second-headimg-box"></span>\n' +
        '            </div>\n' +
        '        </div>',
        secondDescribe:'<span class="second-txt">\n' +
        '            <p>在这 <span class="red">'+userInfo.totalAfterDay+'</span>天内</p>\n' +
        '            <p>玩了<span class="red">'+userInfo.totalBrands+'</span>个</p>\n' +
        '            <p><span class="red">'+userInfo.totalToys+'</span>件世界级玩具</p>\n' +
        '        </span>',
        fourthImg:'<div class="animation-data fourth-data">\n' +
        '            <div class="animation-box fourth-box">\n' +
        '                <span class="animation-headimg-box fourth-headimg-box"></span>\n' +
        '            </div>\n' +
        '        </div>',
        fourthPiggy:'<img src="img/pig.png" alt="" class="pig">',
        fourthDescribe:' <span class="fourth-txt ">\n' +
        '            <p>每天只花 <span class="red">'+userInfo.spendDayMoney+'</span>元</p>\n' +
        '            <p>玩具价值<span class="red">¥'+userInfo.toysMoney+'</span>万</p>\n' +
        '            <p>约合<span class="red">'+userInfo.changeDollar+'美元</span></p>\n' +
        '        </span>',
        fifthImg:'<div class="animation-data fifth-data">\n' +
        '    <div class="animation-box fifth-box">\n' +
        '        <span class="animation-headimg-box fifth-headimg-box"></span>\n' +
        '    </div>\n' +
        '</div>',
        fifthDescribe:'<span class="fifth-txt"><p>培养了宝宝多重能力</p></span>',
        fifthDescribe2:'<span class="fifth-txt2"><p>为全面发展的人生迈出第一步</p></span>',
        fifthAbility:[
            '<ul class="ability-ul"><span class="animation-txt animation-txt1">'+userInfo.ability[0]+'</span></ul>',
            '<span class="animation-txt animation-txt2 fadeIn-1s">'+userInfo.ability[1]+'</span>',
            '<span class="animation-txt animation-txt3 fadeIn-1s">'+userInfo.ability[2]+'</span>',
            '<span class="animation-txt animation-txt4 fadeIn-1s">'+userInfo.ability[3]+'</span>',
            '<span class="animation-txt animation-txt5 fadeIn-1s">'+userInfo.ability[4]+'</span>',
        ],
        sixthImg:'<div class="animation-data sixth-data">\n' +
        '    <div class="animation-box sixth-box">\n' +
        '        <span class="animation-headimg-box sixth-headimg-box"></span>\n' +
        '    </div>\n' +
        '</div>',
        sixthDescribe:'<span class="sixth-txt">\n' +
        '    <p>同时感谢</p>\n' +
        '    <p>为保护环境做出了贡献</p>\n' +
        '</span>',
        seventhDescribe:'<span class="seventh-txt">\n' +
        '    <p>2017年过去了</p>\n' +
        '    <p>期待2018年我们的故事...</p>\n' +
        '</span>',
        shakeBtn:'<div class="shake-noUseOldUserRes">\n' +
        '            <img src="img/noUseBtn.png" alt="">\n' +
        '            <p>点击领取代金券<br>开启您的玩具足迹</p>\n' +
        '        </div>',
        toTopBtn:'<div class="to-top-box" onclick="toTop()">\n' +
        '    <span class="to-top-icon">\n' +
        '        <img src="img/to-top.png" alt="" class="to-top">\n' +
        '    </span>\n' +
        '    <p class="to-top-txt">返回顶部</p>\n' +
        '</div>',
    }

    if(userInfo.playedToysImgUrl.length == 0){
        userHtml.allPlayedToys = {}
    }else if(userInfo.playedToysImgUrl.length == 1){
        userHtml.allPlayedToys = {
            threeData1In:' <ul class="three-ul">\n' +
            '            <div class="animation-data three-data1">\n' +
            '                <div class="animation-box three-box">\n' +
            '                    <img src='+userInfo.playedToysImgUrl[0].imgurl+' alt="" class="animation-img three-img">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </ul>',
        }
    }else if(userInfo.playedToysImgUrl.length == 2){
        userHtml.allPlayedToys = {
            threeData1In:' <ul class="three-ul">\n' +
            '            <div class="animation-data three-data1">\n' +
            '                <div class="animation-box three-box">\n' +
            '                    <img src='+userInfo.playedToysImgUrl[0].imgurl+' alt="" class="animation-img three-img">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </ul>',
            threeData2In:'<div class="animation-data three-data2">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[1].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
        }
    }else if(userInfo.playedToysImgUrl.length == 3){
        userHtml.allPlayedToys = {
            threeData1In:' <ul class="three-ul">\n' +
            '            <div class="animation-data three-data1">\n' +
            '                <div class="animation-box three-box">\n' +
            '                    <img src='+userInfo.playedToysImgUrl[0].imgurl+' alt="" class="animation-img three-img">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </ul>',
            threeData2In:'<div class="animation-data three-data2">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[1].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData3In:'<div class="animation-data  three-data3">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[2].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
        }
    }else if(userInfo.playedToysImgUrl.length == 4){
        userHtml.allPlayedToys = {
            threeData1In:' <ul class="three-ul">\n' +
            '            <div class="animation-data three-data1">\n' +
            '                <div class="animation-box three-box">\n' +
            '                    <img src='+userInfo.playedToysImgUrl[0].imgurl+' alt="" class="animation-img three-img">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </ul>',
            threeData2In:'<div class="animation-data three-data2">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[1].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData3In:'<div class="animation-data  three-data3">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[2].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData4In:'<div class="animation-data  three-data4">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[3].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
        }
    }else if(userInfo.playedToysImgUrl.length == 5){
        userHtml.allPlayedToys = {
            threeData1In:' <ul class="three-ul">\n' +
            '            <div class="animation-data three-data1">\n' +
            '                <div class="animation-box three-box">\n' +
            '                    <img src='+userInfo.playedToysImgUrl[0].imgurl+' alt="" class="animation-img three-img">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </ul>',
            threeData2In:'<div class="animation-data three-data2">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[1].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData3In:'<div class="animation-data  three-data3">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[2].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData4In:'<div class="animation-data  three-data4">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[3].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData5In:'<div class="animation-data  three-data5">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[4].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',

        }
    }else if(userInfo.playedToysImgUrl.length == 6){
        userHtml.allPlayedToys = {
            threeData1In:' <ul class="three-ul">\n' +
            '            <div class="animation-data three-data1">\n' +
            '                <div class="animation-box three-box">\n' +
            '                    <img src='+userInfo.playedToysImgUrl[0].imgurl+' alt="" class="animation-img three-img">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </ul>',
            threeData2In:'<div class="animation-data three-data2">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[1].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData3In:'<div class="animation-data  three-data3">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[2].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData4In:'<div class="animation-data  three-data4">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[3].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData5In:'<div class="animation-data  three-data5">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[4].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData6In:'<div class="animation-data  three-data6">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[5].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',

        }
    }else if(userInfo.playedToysImgUrl.length == 7){
        userHtml.allPlayedToys = {
            threeData1Out:'<ul class="three-ul">\n' +
            '    <div class="animation-data three-data1">\n' +
            '        <div class="animation-box three-box">\n' +
            '            <img src='+userInfo.playedToysImgUrl[0].imgurl+' alt="" class="animation-img three-img">\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</ul>',
            threeData1In:' <ul class="three-ul">\n' +
            '            <div class="animation-data three-data1">\n' +
            '                <div class="animation-box three-box">\n' +
            '                    <img src='+userInfo.playedToysImgUrl[0].imgurl+' alt="" class="animation-img three-img">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </ul>',
            threeData2In:'<div class="animation-data three-data2">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[1].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData3In:'<div class="animation-data  three-data3">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[2].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData4In:'<div class="animation-data  three-data4">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[3].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData5In:'<div class="animation-data  three-data5">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[4].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData6In:'<div class="animation-data  three-data6">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[5].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',

        }
    }else if(userInfo.playedToysImgUrl.length == 8){
        userHtml.allPlayedToys = {
            threeData1Out:'<ul class="three-ul">\n' +
            '    <div class="animation-data three-data1">\n' +
            '        <div class="animation-box three-box">\n' +
            '            <img src='+userInfo.playedToysImgUrl[0].imgurl+' alt="" class="animation-img three-img">\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</ul>',
            threeData1In:' <ul class="three-ul">\n' +
            '            <div class="animation-data three-data1">\n' +
            '                <div class="animation-box three-box">\n' +
            '                    <img src='+userInfo.playedToysImgUrl[0].imgurl+' alt="" class="animation-img three-img">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </ul>',
            threeData2Out:'<div class="animation-data three-data2">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[1].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData2In:'<div class="animation-data three-data2">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[1].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData3In:'<div class="animation-data  three-data3">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[2].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData4In:'<div class="animation-data  three-data4">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[3].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData5In:'<div class="animation-data  three-data5">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[4].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData6In:'<div class="animation-data  three-data6">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[5].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',

        }
    }else if(userInfo.playedToysImgUrl.length == 9){
        userHtml.allPlayedToys = {
            threeData1Out:'<ul class="three-ul">\n' +
            '    <div class="animation-data three-data1">\n' +
            '        <div class="animation-box three-box">\n' +
            '            <img src='+userInfo.playedToysImgUrl[0].imgurl+' alt="" class="animation-img three-img">\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</ul>',
            threeData1In:' <ul class="three-ul">\n' +
            '            <div class="animation-data three-data1">\n' +
            '                <div class="animation-box three-box">\n' +
            '                    <img src='+userInfo.playedToysImgUrl[0].imgurl+' alt="" class="animation-img three-img">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </ul>',
            threeData2Out:'<div class="animation-data three-data2">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[1].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData2In:'<div class="animation-data three-data2">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[1].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData3Out:'<div class="animation-data three-data3">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[2].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData3In:'<div class="animation-data  three-data3">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[2].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData4In:'<div class="animation-data  three-data4">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[3].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData5In:'<div class="animation-data  three-data5">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[4].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData6In:'<div class="animation-data  three-data6">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[5].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',

        }
    }else if(userInfo.playedToysImgUrl.length == 10){
        userHtml.allPlayedToys = {
            threeData1Out:'<ul class="three-ul">\n' +
            '    <div class="animation-data three-data1">\n' +
            '        <div class="animation-box three-box">\n' +
            '            <img src='+userInfo.playedToysImgUrl[0].imgurl+' alt="" class="animation-img three-img">\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</ul>',
            threeData1In:' <ul class="three-ul">\n' +
            '            <div class="animation-data three-data1">\n' +
            '                <div class="animation-box three-box">\n' +
            '                    <img src='+userInfo.playedToysImgUrl[0].imgurl+' alt="" class="animation-img three-img">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </ul>',
            threeData2Out:'<div class="animation-data three-data2">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[1].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData2In:'<div class="animation-data three-data2">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[1].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData3Out:'<div class="animation-data three-data3">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[2].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData3In:'<div class="animation-data  three-data3">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[2].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData4Out:'<div class="animation-data  three-data4">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[3].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData4In:'<div class="animation-data  three-data4">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[3].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData5In:'<div class="animation-data  three-data5">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[4].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',
            threeData6In:'<div class="animation-data  three-data6">\n' +
            '    <div class="animation-box three-box">\n' +
            '        <img src='+userInfo.playedToysImgUrl[5].imgurl+' alt="" class="animation-img three-img">\n' +
            '    </div>\n' +
            '</div>',

        }
    }

    //载入头像
    $(".bask").append(userHtml.userHeadImg)
    //载入用户信息
    $(".header").append(userHtml.userName)
    $('.header').append(userHtml.meetFootprint)

    // 载入开始时光旅行
    $('.bask').append(userHtml.startTravel)

    //载入线条1
    $('.bask').append(userHtml.lineExtension[0])

    //载入加入时间
    $('.bask').append(userHtml.firstImg)
    $('.bask').append(userHtml.firstDescribe)

    //载入线条2
    $('.bask').append(userHtml.lineExtension[1])
    //载入玩具消费
    $('.bask').append(userHtml.secondImg)
    $('.bask').append(userHtml.secondDescribe)

    //载入线条3
    $('.bask').append(userHtml.lineExtension[2])

    //载入玩过的所有玩具
    if(userInfo.playedToysImgUrl.length == 0){
        console.log("没有玩具")
    }
    if(userInfo.playedToysImgUrl.length == 1){
        // 第一位置
        $('.bask').append(userHtml.allPlayedToys.threeData1In)
        afterAll()

    }
    if(userInfo.playedToysImgUrl.length == 2){
        // 第一位置
        $('.bask').append(userHtml.allPlayedToys.threeData1In)

        // 第二位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData2In)

        afterAll()
    }
    if(userInfo.playedToysImgUrl.length == 3){
        // 第一位置
        $('.bask').append(userHtml.allPlayedToys.threeData1In)

        // 第二位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData2In)

        // 第三位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData3In)

        afterAll()
    }
    if(userInfo.playedToysImgUrl.length == 4){
        // 第一位置
        $('.bask').append(userHtml.allPlayedToys.threeData1In)

        // 第二位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData2In)

        // 第三位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData3In)

        // 第四位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData4In)
        afterAll()
    }
    if(userInfo.playedToysImgUrl.length == 5){
        // 第一位置
        $('.bask').append(userHtml.allPlayedToys.threeData1In)

        // 第二位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData2In)

        // 第三位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData3In)

        // 第四位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData4In)

        // 第五位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData5In)
        afterAll()
    }
    if(userInfo.playedToysImgUrl.length == 6){
        // 第一位置
        $('.bask').append(userHtml.allPlayedToys.threeData1In)

        // 第二位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData2In)

        // 第三位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData3In)

        // 第四位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData4In)

        // 第五位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData5In)

        // 第六位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData6In)
        afterAll()
    }
    if(userInfo.playedToysImgUrl.length == 7){
        // 第一位置
        $('.bask').append(userHtml.allPlayedToys.threeData1Out)
        $('.bask').append(userHtml.allPlayedToys.threeData1In)

        // 第二位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData2In)

        // 第三位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData3In)

        // 第四位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData4In)

        // 第五位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData5In)

        // 第六位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData6In)
        afterAll()
    }
    if(userInfo.playedToysImgUrl.length == 8){
        // 第一位置
        $('.bask').append(userHtml.allPlayedToys.threeData1Out)
        $('.bask').append(userHtml.allPlayedToys.threeData1In)

        // 第二位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData2Out)
        $('.three-ul').append(userHtml.allPlayedToys.threeData2In)

        // 第三位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData3In)

        // 第四位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData4In)

        // 第五位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData5In)

        // 第六位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData6In)
        afterAll()
    }
    if(userInfo.playedToysImgUrl.length == 9){
        // 第一位置
        $('.bask').append(userHtml.allPlayedToys.threeData1Out)
        $('.bask').append(userHtml.allPlayedToys.threeData1In)

        // 第二位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData2Out)
        $('.three-ul').append(userHtml.allPlayedToys.threeData2In)

        // 第三位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData3Out)
        $('.three-ul').append(userHtml.allPlayedToys.threeData3In)

        // 第四位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData4In)

        // 第五位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData5In)

        // 第六位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData6In)
        afterAll()
    }
    if(userInfo.playedToysImgUrl.length >= 10){
        // 第一位置
        $('.bask').append(userHtml.allPlayedToys.threeData1Out)
        $('.bask').append(userHtml.allPlayedToys.threeData1In)

        // 第二位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData2Out)
        $('.three-ul').append(userHtml.allPlayedToys.threeData2In)

        // 第三位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData3Out)
        $('.three-ul').append(userHtml.allPlayedToys.threeData3In)

        // 第四位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData4Out)
        $('.three-ul').append(userHtml.allPlayedToys.threeData4In)

        // 第五位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData5In)

        // 第六位置
        $('.three-ul').append(userHtml.allPlayedToys.threeData6In)
        afterAll()

    }

    function afterAll(){
        //载入线条4
        $('.bask').append(userHtml.lineExtension[3])
        $('.bask').append(userHtml.fourthImg)
        $('.bask').append(userHtml.fourthPiggy)
        $('.bask').append(userHtml.fourthDescribe)
        //载入线条5
        $('.bask').append(userHtml.lineExtension[4])
        $('.bask').append(userHtml.fifthImg)
        $('.bask').append(userHtml.fifthDescribe)
        $('.bask').append(userHtml.fifthDescribe2)
        $('.bask').append(userHtml.fifthAbility[0])
        $('.ability-ul').append(userHtml.fifthAbility[1])
        $('.ability-ul').append(userHtml.fifthAbility[2])
        $('.ability-ul').append(userHtml.fifthAbility[3])
        $('.ability-ul').append(userHtml.fifthAbility[4])
        //载入线条6
        $('.bask').append(userHtml.lineExtension[5])
        $('.bask').append(userHtml.sixthImg)
        $('.bask').append('<span class="greenearth"></span>')
        $('.bask').append(userHtml.sixthDescribe)
        $('.bask').append(userHtml.lineExtension[6])
        $('.bask').append(userHtml.seventhDescribe)
        $('.bask').append(userHtml.shakeBtn)
    }

})

