/**
 * Created by gaoryrt on 16/3/23.
 */
var now = new Date()
var year = now.getFullYear()
var month = now.getMonth() + 1

function putDate(date, row, col) {
    var $target = $('.w' + row + " .date" + col)
    $target.text(date)
}

function putMonth(year, month) {
    $('.title').text(year + '年 ' + month + '月');
    var dayNum = 1
    var row = 1
    var isleap = false
    var week01 = new Date(year + '/' + month + '/' + '0').getDay() + 1
    var monthNum = 31

    if ((year % 4 === 0 && year % 100 != 0) || year % 400 == 0) {
        isleap = true
    }

    if (month === 4 || month === 6 || month === 9 || month === 11) {
        monthNum = 30
    }

    if (month === 2) {
        if (isleap) {
            monthNum = 29
        } else {
            monthNum = 28
        }
    }

    do {
        do {
            putDate(dayNum, row, week01)
            dayNum++
            week01++
        } while (week01 < 8 && dayNum <= monthNum)
        row++
        week01 = 1
    } while (row <= 6 && dayNum <= monthNum)
}

$(document).ready(function () {
    putMonth(year, month)
    $('#prev').click(function () {
        $('ul li').text('')
        month--
        if (month == 0) {
            year--
            month = 12
        }
        putMonth(year, month)
    })

    $('#next').click(function () {
        $('ul li').text('')
        month++
        if (month == 13) {
            year++
            month = 1
        }
        putMonth(year, month)
    })
})





