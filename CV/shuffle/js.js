/**
 * Created by gaoryrt on 16/3/21.
 */
var index = 0;

var autoChange = setInterval(function () {
    if(index<3){
        index++
    }else {
        index=0
    }
    changeTo(index)
},2500);

function changeTo(num){
    var Left = num * 800;
    $(".imageList").animate({left: "-" + Left + "px"},600);
    $(".indexList").find("li").removeClass("selected").eq(num).addClass("selected");
}

$('.wrapper').hover(function () {
    clearInterval(autoChange)
},function () {
    autoChangeAgain()
})

function autoChangeAgain() {
    autoChange = setInterval(function () {
        if(index<3){
            index++
        }else {
            index=0
        }
        changeTo(index)
    },2500);
}

$('#prev').click(function () {
    if(index===0){
        index = 3
        changeTo(index)
    }else {
        changeTo(--index)
    }
})

$('#next').click(function () {
    if(index===3){
        index=0
        changeTo(index)
    }else {
        changeTo(++index)
    }
})

$('.indexList').find('li').each(function (item) {
    $(this).click(function () {
        clearInterval(autoChange)
        index = item
        changeTo(index)
    })
})