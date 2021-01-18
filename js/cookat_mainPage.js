$(document).ready(function(){
    mainbanner_swiperslide();
    MDrecommend_swiperslide();
    button2section_slide();
    scrollevnet();
    Service_center_slidetoggle();
    gnb_sub();
    nowdate_countdown();
    sale_valueOP();
    top5_nowDate();
    top5_tab_menu();
    login_click_event();
    sup_category_tab();
    sub_buypage_list_click();
    buypage_main_imgslide();
    buypage_outer_product();
    buypage_photo_review();
    sup_buypage_list_sort();
    buy_pageoption_sum();
    buy_pageoption_click();
    buy_page_final_sum_value();
    purchase_info_Area();
    buy_page_review_tab();
    buy_page_scrolltab();
    buy_page_qnatab();
    login_error();
    sign_error();
    sing_monte();
    cbcheck();
    submit_check();
    share_button();
    cart_buybtn();
});
$(window).scroll(function(){
    scrollhide();
    scrollfixed();
    
});

function mainbanner_swiperslide(){
    var swiper = new Swiper('.mainbanner-slide',{
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.mainbanner-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.mainbanner-button-next',
            prevEl: '.mainbanner-button-prev',
        },
    });
}
function MDrecommend_swiperslide(){
    var swiper = new Swiper('.MDrecommend-slide', {
        slidesPerView: 3.5,
        loopFillGroupWithBlank: true,
        // autoplay: {
        //     delay: 5000,
        // },
        spaceBetween: 20,

        centeredSlides: true,
        freeMode: true,
        loop: true,
        pagination: {
            clickable: true,
        },
    });
}
function button2section_slide(){
    var swiper = new Swiper('.button2section-slide', {
        cssMode: true,
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 4,
        navigation: {
          nextEl: '.barobaro-button-next',
          prevEl: '.barobaro-button-prev',
        },
        mousewheel: true,
        keyboard: true,
    });
}
// swiper control
function scrollevnet(){
    $('.top-button').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},600);
    });
}
function scrollhide(){
    if ($(document).scrollTop() > 200){
        $('.top-button').addClass('active-top-button');
    } else {
        $('.top-button').removeClass('active-top-button');
    }
}
// 최상단으로 가는 버튼
function Service_center_slidetoggle(){
    $('.service-center-slide').hide();
    $('.service-center').ready(function(){
        $('.service-center-slide').hide("fast",function(){
            $('.service-center').click(function(){
                $('.service-center-slide').slideToggle("fast",function(){
                });
            });
        });
    });
}
// 고객센터 slide
function gnb_sub(){
    $('.gnb-sub').hide();
    $('.sub-menu').hide();
    $('.all_category').hover(function(){
        $('.gnb-sub').show();
    }, function(){
        $('.gnb-sub').hide();
    });
    $('.gnb-sub li').hover(function(){
        $(this).find('.sub-menu').fadeIn('fast');
    }, function(){
        $(this).find('.sub-menu').hide();
    })
}
// 카테고리 탭
function scrollfixed(){
    if($(this).scrollTop() > 254){
        $('header nav').addClass('fixedtop')
    } else {
        $('header nav').removeClass('fixedtop')
    }
}
// 스크롤시 fixed
function nowdate_countdown(){
    $('.timeover').hide()
    var s = [],
        m = [],
        h = [],
        second = [],
        minute = [],
        hour = [],
        stop = [];
    $('.timedeal-count-down').each(function(index){
        second.push($(this).find('.second'));
        minute.push($(this).find('.minute'));
        hour.push($(this).find('.hour'));
        s.push(parseInt($(this).find('.second').attr('date-time')));
        m.push(parseInt($(this).find('.minute').attr('date-time')));
        h.push(parseInt($(this).find('.hour').attr('date-time')));
        stop.push(
            setInterval(function(){
                if(s[index] < 10){
                    second[index].text("0" + s[index]);
                }else{
                    second[index].text(s[index]);
                }
                // 10미만일때 앞에 0추가
                if(m[index] < 10){
                    minute[index].text("0" + m[index]);
                }else{
                    minute[index].text(m[index]);
                }
                // 10미만일때 앞에 0추가
                if(h[index] < 10){
                    hour[index].text("0" + h[index]);
                }else{
                    hour[index].text(h[index]);
                }
                // 10미만일때 앞에 0추가
                s[index]--;
                if(s[index] < 0){
                    s[index] = 59;
                    m[index]--;
                    if(m[index] < 0){
                        m[index] = 59;
                        h[index]--;
                        if(h[index] < 0){
                            h[index] = 0;
                            m[index] = 0;
                            clearInterval(stop[index])
                        }
                    }
                }
                if(h[index] == 00 && m[index] == 00 && s[index] < 10){

                }
                // 카운트다운 연산
            },1000)
        )
    })
}

// 타임딜 카운트다운
function sale_valueOP(){
    var value = []
    $('.glo-section li').each(function(index){
        var saleClass = $(this).find('.sale-value'),
            originClass = $(this).find('.original-value'),
            finalClass = $(this).find('.final-value').children('strong'),
            numbersale = parseInt(saleClass.text()),
            numberorigin = parseInt(originClass.text()),
            finalValue = (numberorigin) * (1 - numbersale/100),
            fvmathround = Math.round(finalValue/10) * 10;
        if(numbersale > 0){
            finalClass.text(fvmathround.toLocaleString())
        }else{
            var fincom = parseInt(finalClass.text())
            finalClass.text(fincom.toLocaleString())
        }
        originClass.text(numberorigin.toLocaleString())
        if(saleClass.text() == ''){
            value.push(fincom);
        }else{
            value.push(fvmathround);
        }
    });
    sub_buypage_list_click(value);
}
// glo-section 할인 가격 자동 계산
function top5_nowDate(){
    var nowdate = new Date();
    $(".now-datetime").text(nowdate.toLocaleDateString());
}
// 실시간 검색순위 기준시간
function top5_tab_menu(){
    $(".activelist").hide();
    $(".top5-tab-list").click(function(){
        $(this).siblings(".activelist").slideToggle("fast",function(){
            $(this).siblings(".top5-tab-list").toggleClass("ttl-active");
        });
    });
}
// 실시간 랭킹 슬라이드 탭
function login_click_event(){
    $('.member-content').show();
    $('.guest-content').hide();
    $('.member-login .guest-click').click(function(){
        $('.member-content').hide();
        $('.guest-content').fadeIn();
    });
    $('.member-login .member-click').click(function(){
        $('.member-content').fadeIn();
        $('.guest-content').hide();
    });
}
// 로그인 회원 비회원 탭 페이지
function sup_category_tab(){
    $('.category-menu-list').click(function(){
        var value = $(this).attr('date-tab')
        if(value == 'all'){
            $('.categorybox').show(400);
        } else {
            $('.categorybox').not('.' + value).hide(400);
            $('.' + value).show(400);
        };
    })
}
// 서브 구매페이지 종류 정렬
function buypage_main_imgslide(){
    var swiper = new Swiper('.buypage-imgslide', {
        pagination: {
          el: '.buypage-mainpag',
        },
      });
}
//구매페이지 메인 상품 이미지 슬라이드
function buypage_outer_product(){
    var swiper = new Swiper('.buypage-outer-product', {
        slidesPerView: 6,
        slidesPerGroup: 4,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}
// 구매페이지 이 상품은 어떠세요 슬라이드
function buypage_photo_review(){
    var swiper = new Swiper('.photo-review', {
        cssMode: true,
        slidesPerView: 'auto',
        navigation: {
          nextEl: '.photo-button-next',
          prevEl: '.photo-button-prev',
        },
        mousewheel: true,
        keyboard: true,
      });
}
function sup_buypage_list_sort(){
    var defaultText = $('.list-sort > li').eq(0).text();
    $('.list-click-text').text(defaultText)
    // default text
    $('.list-sort').hide();
    $('.list-click-text').click(function(){
        $('.list-sort').slideToggle('fast');
    })
    $('.list-sort li').click(function(){
        $('.list-sort').hide();
        $('.list-click-text').text('');
        var thisListClick = $(this).text();
        $('.list-click-text').text(thisListClick)
    })
}
// 최신순 탭 메뉴
function sub_buypage_list_click(value){
    if(typeof value == 'undefined'){
        return true;
    }
    // undefined 체크
    $('.categorybox').each(function(dayvalue){
        dayvalue = $(this).attr('date-day')
        // console.log(a)
        // f.sort()
    })
    
    // console.log(value);
    $('.sort-list').click(function(){
        // var test01 = sale_valueOP();
        var sortlist = $(this).attr('date-sort');
        $('.categorybox').each(function(a){
            if(sortlist == 'new'){
                $(this).css('order', $(this).attr('date-day'));
            }else if(sortlist == 'despan'){
                $(this).css('order', value[$(this).index()]);
            }else{
                $(this).css('order', -value[$(this).index()]);
            }
        })
        // var sortlist = $(this).attr('date-sort');
    })
}
// 최신순 및 가격순 정렬
function buy_pageoption_click(){
    $('.buypage-option-velue').find('div').hide();
    // $('#option option').click(function(){
    //     var selected = $(this).find(':selected').val()
    //     $('#' + selected).show();
    //     a(parseInt($('#' + selected).find('.option-value').attr('data-option')) , true)
    // })
    $('#option').on('change',function(){
        // $(this).find('option').attr('selected',true);
        var selected = $(this).find(':selected').val()
        $('#' + selected).show();
        $('option:selected').prop('disabled', true)
        // if($('option:selected').attr('disabled') === false){
        //     $('option:selected').prop('disabled', true)
        // }
        // if($('option:selected').hide() === true){
        //     $('option:selected').removeAttr('disabled')
        // }

        op(parseInt($('#' + selected).find('.option-value').attr('data-option')) , true)
    })
    
}
var opplus = 0;
function op(plus , minus ){
    if(minus){
        // 더하기
        opplus = opplus + plus;
        
    }else{
        // 빼기
        opplus = opplus - plus;
    }

    $('.buyPage-Area .buypage-maininfo > div .buypage-final-value strong').html((opplus).toLocaleString());
}
// 구매페이지 옵션박스 선택시 show
function buy_pageoption_sum(){
    $('.btn_up').click(function(){
        var opval = $(this).siblings('input').val()
        opvalup = ++opval
        $(this).siblings('input').val(opvalup)
        var opprice = parseInt($(this).siblings('.option-value').attr('data-option'));
        var sumprice = (opprice * opval)
        $(this).siblings('.option-value').text((sumprice).toLocaleString());
        var parsum = parseInt(sumprice)
        // console.log(parsum)
        op(opprice, true);

    })
    $('.btn_down').click(function(){
        var opval = $(this).siblings('input').val()
        // if($(this).siblings('input').val() <= 1 ){
        //     $(this).siblings('input').val(1)
        // }else{
        //     opvaldown = --opval
        //     $(this).siblings('input').val(opvaldown)
        // }
        var opprice = parseInt($(this).siblings('.option-value').attr('data-option'));
        
        if($(this).siblings('input').val() > 1 ){
            op(opprice, false)
            opvaldown = --opval
            $(this).siblings('input').val(opvaldown)
            // alert();
        }
        var sumprice = (opprice * opval)
        $(this).siblings('.option-value').text((sumprice).toLocaleString());
    })
    // 옵션갯수 추가 감소시 자동 연산
    $('.buypage-option-velue').find('.material-icons').click(function(){
        // $('#option option:selected').removeAttr('selected');
        // $("#option option:selected").prop("selected", false)
        var minval = $(this).siblings('input').val();
        var minvaldate = $(this).siblings('.option-value').attr('data-option');
        op(minval * minvaldate, false);
        $(this).closest('div').fadeOut('fast');
        // $('option').prop('disabled', false);
        var a = $(this).parents().attr('id');
        $('.OPlist').each(function(){
            if(a == $(this).val()){
                $(this).prop('disabled', false);
            }
        })
        $('.option-default').prop('selected',true);
        // if($('OPlist').val())
        // console.log($(this).parents().attr('id'));
    })
    // 옵션 선택 취소
}
// 구매페이지 옵션 선택 및 합
function buy_page_final_sum_value(){
    var a = $('#salmon01').find('.option-value').text()
    // console.log(a)
}
// 구매페이지 옵션 선택 최종 값
function purchase_info_Area(){
    $('.purchase-infoTab li').find('blockquote').hide();
    $('.purchase-infoTab li').click(function(){
        $(this).find('blockquote').slideToggle('fast');
        $(this).find('span').toggleClass('info-ttl-active')
    })
}
function buy_page_review_tab(){
    $('.review-img').hide();
    var nowrapP = $(this).find('p').hasClass('nowrapP')
    $('.review-cotent').click(function(){
        $(this).find('.review-img').slideToggle('fast')
        $(this).find('p').toggleClass('nowrapP')
    })
} 
// 결제안내 탭
function buy_page_scrolltab(){
    $('.info-nav').find('a').click(function(e){
        e.preventDefault();
        console.log($(this).parents().index())
        var idx = $(this).parents().index();
        var thistarget = $('.tagetMenu').eq(idx).attr('id');
        console.log(thistarget)
        console.log($('#' + thistarget).offset().top);
        $('html,body').stop().animate({scrollTop:$("#" + thistarget).offset().top - 70},600);
    })    
}
function buy_page_qnatab(){
    $('.qna-toggle-active').hide();
    $('.toggle-qna').click(function(){
        $(this).find('.qna-info').toggleClass('active-qna');
        $(this).children('p').toggleClass('question-qna');
        if($(this).find('.qna-info').hasClass('active-qna') == true){
            $(this).css('background-color','rgb(250,250,250');
            $(this).find('.qna-toggle-active').show()
        }else{
            $(this).css('background-color','')
            $(this).find('.qna-toggle-active').hide()
        }
    })
    var a = $('.qna-customer').length;
    // console.log(a)
}
function login_error(){
    $('.login-content').find('.id-error').hide();
    $('.login-content').find('.pw-error').hide();
    var pw;
    $('#password').keydown(function(){
        pw = $('#password').val()
        // console.log(pw.length)
        if(pw.length < 8){
            // console.log('hi')
            $('.login-content').find('.pw-error').show();
        }else{
            $('.login-content').find('.pw-error').hide();
            // console.log('8')
        }
    });
}
function sign_error(){
    $('.sign-up').find('.sing-pw-error').hide();
    $('.sign-up').find('.sing-pw-check-error').hide();
    var signPw;
    var singPwcheck;
    $('.sign-up').find('#password').keydown(function(){
        signPw = $('.sign-up').find('#password').val()
        console.log(signPw.length)
        if(signPw.length < 8){
            $('.sign-up').find('.sing-pw-error').show();
            // console.log('hi')
        }else{
            $('.sign-up').find('.sing-pw-error').hide();
        }
    })
    $('#passwordcheck').focusout(function(){
        signPw = $('.sign-up').find('#password').val()
        singPwcheck = $('#passwordcheck').val();
        if(signPw != singPwcheck){
            // alert('불일치')
            $('.sign-up').find('.sing-pw-check-error').show();
        }else{
            // alert('일치')
            $('.sign-up').find('.sing-pw-check-error').hide();
        }
    });
}
// 비밀번호 유효성 검사
function sing_monte(){
    $('#31day').hide();
    $('#28day').hide();
    // show값 30일로 설정
    $('#monte').change(function(){ 
        var value = $(this).val();
        // console.log(value)
        if(value == '31'){
            $('#31day').show();
            $('#30day').hide();
            $('#28day').hide();
            // show 31day
        }else if(value == '30'){
            $('#30day').show();
            $('#28day').hide();
            $('#31day').hide();
            // show 30day
        }else{
            $('#28day').show();
            $('#30day').hide();
            $('#31day').hide();
            // show 28day
        }
    });
}
// 달에 따른 28~31일tab
function cbcheck(){
    $('.custermarinfo').hide();
    $('.custermarinfo').parents('li').click(function(){
        // alert('hi')
        $(this).find('.custermarinfo').slideToggle();
        $(this).find('.material-icons').toggleClass('rotate-icon')
    })
    $('#allcb').click(function(){
        var allch = $(this).prop('checked');
        if(allch == true){
            // alert('true')
            $('.cball').find('input').prop('checked',true)
        }else{
            // alert('false')
            $('.cball').find('input').prop('checked',false)
        }
    })
}
// 이용약관 선택 탭
function submit_check(){
    // var pwlan;
    // var pwcheck;
    // var cbage;
    // var cbnec;
    $('.submit-sign-up').click(function(e){
        e.preventDefault();
        // var notempty = $('.sign-up').find('.glo-focus');
        // console.log(notempty);
        var jan = false;
        $('.gender-group').find('input').each(function(){
            if($(this).prop('checked') == true){
                jan = true;
            }
        })
        // console.log(jan);
        var pwlan = $('#password').val();
        var pwcheck = $('#passwordcheck').val();
        var cbage = $('#cbage').prop('checked');
        var cbnec = $('#cb01').prop('checked');
        if(jan == true && pwlan == pwcheck && cbage == true && cbnec == true){
            // $('.submit-sign-up').css('background-color','#eb5500');
            // $('.submit-sign-up').find('span').css('color','#fff');
            alert('회원가입이 완료되었습니다!');
        }else{
            alert('회원가입 필수사항을 기입해주세요.')
            // $('.submit-sign-up').prop('disabled');
        }
    })
    // if(jan == true && pwlan == pwcheck && cbage == true && cbnec == true){
    //     $('.submit-sign-up').css('background-color','#eb5500');
    //     $('.submit-sign-up').find('span').css('color','#fff');
    // }else{
    //     $('.submit-sign-up').prop('disabled');
    // }
}
// 회원가입 전체 유효성 검사
function share_button(){
    $('.share-popup').hide();
    $('.buypage-maininfo').children('.material-icons').click(function(){
        $('.share-popup').show();
    })
    $('.share-popup').children('.material-icons').click(function(){
        $('.share-popup').hide();
    });
    // console.log(document.URL)
    var a = $('#shareurl').val(document.URL)
    $('.urlcopy').click(function(){
        alert('복사완료!')
        $('#shareurl').select()
        document.execCommand("copy");
    })
}
// 공유하기 버튼
function cart_buybtn(){
    $('.cart-count').hide();
    $('.cartbtn').one('click',function(){
        $('.cart-count').show();
        $('.cart-count').text(parseInt($('cart-count').text() + 1))
    })
    // 한번만 실행
}
