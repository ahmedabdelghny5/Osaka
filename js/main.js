
let aboutOffset = $('#About').offset().top

$(window).scroll(function () {
    let scroll = $(window).scrollTop()

    if (scroll >= aboutOffset - 50) {
        $('#navitem').css('background-color', `rgba(0, 0, 0)`)
        $('#btnUp').fadeIn(1000)
    } else {
        $('#navitem').css('background-color', 'transparent')
        $('#btnUp').fadeOut(1000)

    }

})

$('#btnUp').click(function () {

    $('body,html').animate({ scrollTop: '0' }, 1000)
})

$('a[href^="#"]').click(function () {
    let aHref = $(this).attr('href')
    let offset = $(aHref).offset().top
    // $('li a').removeClass('mainColor')
    // $(this).addClass('mainColor')
    $('body,html').animate({ scrollTop: offset }, 1000)

})

let boxColor = $('#boxColor span')
let boxImage = $('#boxImage span')


boxColor.eq(0).css('background-color', '#ff206e')
boxColor.eq(1).css('background-color', '#09c')
boxColor.eq(2).css('background-color', '#bbf')
boxColor.eq(3).css('background-color', 'green')
boxColor.eq(4).css('background-color', 'orange')


$(boxColor).click(function () {
    let color = $(this).css('background-color')
    $('h1,h2,h4,h5,h6,p,i').css('color', color)
    localStorage.setItem('color', color)
})
if (localStorage.getItem('color') != null) {
    color = localStorage.getItem('color')
    $('h1,h2,h4,h5,h6,p,i').css('color', color)

}

let width = $("#boxColor").innerWidth()
$('#close').click(function () {
    let leftBox = $('#slideBox').css('left')
    if (leftBox == '0px') {
        $('#slideBox').animate({ left: `-${width}` }, 1000)

    } else {
        $('#slideBox').animate({ left: '0px' }, 1000)

    }
})

$(document).ready(function(){
    $('#spinner').fadeOut(1000,function(){
        $('body').css('overflow','auto')
    })
})


