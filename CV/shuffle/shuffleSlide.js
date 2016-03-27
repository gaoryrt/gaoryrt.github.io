/**
 * Created by gaoryrt on 16/3/21.
 */
(function ($) {
    $.fn.shuffle = function (params) {

        // custom parameters
        //
        params = $.extend({
            intervalTime: 2000,
            slideSpeed: 670,
        }, params)

        // wrapper, bannner, img should have the same height and width
        //
        var imageWidth = $(this).css("width").replace("px", "")
        var imageHeight = $(this).css("height").replace("px", "")
        var listLen = $(".imageList li").length
        var index = 0
        var totalWidth = imageWidth * listLen

        // custom css
        //
        $(".imageList").css({
            "width": totalWidth,
            "height": imageHeight,
        })
        $(".imageList img, .banner").css({
            "width": imageWidth,
            "height": imageHeight,
        })

        //core function, all the other actions based on this
        //
        function changeTo(num) {
            var Left = num * imageWidth
            $(".imageList").animate({left: "-" + Left + "px"}, params.slideSpeed)
            $(".indexList").find("li").removeClass("selected").eq(num).addClass("selected")
        }

        //reset interval
        //
        function autoChangeAgain() {
            autoChange = setInterval(function () {
                if (index < listLen - 1) {
                    index++
                } else {
                    index = 0
                }
                changeTo(index)
            }, params.intervalTime)
        }

        //set interval
        //
        var autoChange = setInterval(function () {
            if (index < listLen - 1) {
                index++
            } else {
                index = 0
            }
            changeTo(index)
        }, params.intervalTime)

        function addNaviPic() {
            $(".banner").append('<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAnCAYAAAD6meO+AAAAAXNSR0IArs4c6QAAAh1JREFUSA3Vlk8o5VEUxzGkJCJNDUoSSZmFqdlYMVnI0hoLsreYFVlIs7Gx1yxmUrNiKcpoLMhGykyTmMWIkAWDkj/x5nPqR7r9jnPvfbOZU9/eu/d7zufrz3vnvZyc/6kymUwu6kdb6AwtoJZ/9jsAK0RfkFvXXLzNOghIGVp26U/Oy1mFAKpBP58A056eRodAa0GHaVTnbjEqBEgnunBgaccTLuuCQxgaQLdpROdul3NTTMCYA9KOGxivggIYKECfNKJzP8+5ODSghKFFB6QdP2LkhwZUM7SpEZ370SC4NANoRnsOKO14w2VfTMA7BmX/WCU9HTEBvQzKT2fVPg2vYwJGLHLiy/+pOiiAgTw0lQCsh680lAYFSDND7y1y4n/msSA4IAn55REyHgV/GCLgjxGyjV/y0B/6mJcMrBmD9fjfCHpp9Ok2w43oHFm1Q0OtTjIchuVD6NhKwT9AzQZOtxmuR7+RVac0tOokw2G4En23UvAvUZeB022G5RvICrJKPiF7dJLhMFyE5qwU/Hs0ZOB0m+F8NI186oNOMhzo8vVz0ieFHtl/LwykbjM87Bk0S1+hTjIchgfRnUfYEj3Ra0g2dje68ghapyerNdQOwGcNyWKtMP5Aus3wG+SzhmZ0iodDSAOy1tCVB+r5FkKq0A+k1dHzBE8XejlaVVJGPDF2GwGyhuTNKGtGSl7qEyj+zanFAq1FbejxVfUXqkkM/bcimK0AAAAASUVORK5CYII=" width="25px" id="prev">')
            $(".banner").append('<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAnCAYAAAAVW4iAAAAAAXNSR0IArs4c6QAAAfVJREFUSA3Flr0rxVEYx6+3lEQMSpQspsuAMjBIdyGbUhYWVoNRsVBG/gCLl9nkZVFKYTOgDBZKlEVcb3m7Ps9w6peuc57zUJ76ds79Pc/3+z3n/s597kmliFwu1w62wR04AYPy/E8CsQ7wCr7HAg8Kfm2CyO535cTnVeYlvzJBQL4WX2ySLDObQPbtwBnvM6kymUBMg0en5Bnl5ddZTToh33rEXeqcSZPVpBnylVPyjDfk2qwmjZDPPOIudc+kx2pSA/nQKXnGF3IDVpMKyDsecZf6YDJmNSmFvOaUAuOk1aQI4cWAuEvPM7G1FohzTiUwrpAvtu5mAvJnwEDSG8DWWiAOgzcQij0KzK2lH/JTyIH8Mai2fl1dkDWtZcVkICQMNK0lW2h2SKXkjyh0LM0nqpcdZEEo1qM3gOIo0JykC+rqowwgzABNSLOsVYtTXAKWNMrUbIHyGHHprHJn0oT0Lf2LpbgeHGmUqZlWr1oKIbSAS4W4XNpGYsUzkEL3JfGWmkysuDS0fFdJEUyG7K4lVnwqqeCZy3vRn3GKi4GcAE3IiapUr5xiEZc/CU0sUxR3GYag/XXOqledLMTgNLD0d/K2q4kYQT7wGDyQ60suKHqOwNAPBtc8b40WzEdAaBw8J4zkpDTkqzU/Q7AcdIO0WeQ/iF8OJQXcOZzUsgAAAABJRU5ErkJggg==" width="25px" id="next">')
        }

        function addIndexPic() {
            $(".wrapper").append('<ul class="indexList"></ul>')
            $(".indexList").append('<li class="selected"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAABCJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yNDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxkYzpzdWJqZWN0PgogICAgICAgICAgICA8cmRmOkJhZy8+CiAgICAgICAgIDwvZGM6c3ViamVjdD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTYtMDMtMjhUMDE6MDM6OTA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlBpeGVsbWF0b3IgMy40PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgrrtKnpAAABg0lEQVRIDb2WP04CQRjFXQsoTdDEGD0AhhCpLbWw9QiE3jvAKaQiHIFQkHgBeys5ABoLNdFovf7eOrN8w5+4y7K+5DHfzLzvfTOb2VminT8Qx/E+kjN4CttQGMJH+BBF0RttfmDchLdwBtdBc9I0M1dAXIFd+AmzQlrlVBYLRXYAwR79Ibw240/Ed/AeKhaO4Tm8cjFNghG/bR7bh+vPG8yrcAQ9vgm0qsO5Kow05zTSesijGirpMSgzjxeCyyXRmgFpoXI8uoGU0Qb8crNazUUgyNBRDvQ7kVcjTaPThx69dCJngEHPm9D2k3SCGnx2E2oPcvqmcuUueNV2mW3BI6eacAJe04ycgcuduDR5tlSgbnx0FIvCetRVoGMcZybeNLQeHRUoFSowMBVOTLxpaD0GKjA1Tnr9i8J6TPUGl3tMOVrvLHnslq2jdVNgC8r1R37svJN7qNyrQivmUZV32bkCpVzX//fB0S4EHtVWP5m/rit+KbSVj37wiFbU0Y4K/W35AVTtY+WIUwYoAAAAAElFTkSuQmCC" width="10px"></li>')
            for (i = 1; i < listLen; i++) {
                $(".indexList").append('<li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAABCJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yNDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxkYzpzdWJqZWN0PgogICAgICAgICAgICA8cmRmOkJhZy8+CiAgICAgICAgIDwvZGM6c3ViamVjdD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTYtMDMtMjhUMDE6MDM6OTA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlBpeGVsbWF0b3IgMy40PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgrrtKnpAAABg0lEQVRIDb2WP04CQRjFXQsoTdDEGD0AhhCpLbWw9QiE3jvAKaQiHIFQkHgBeys5ABoLNdFovf7eOrN8w5+4y7K+5DHfzLzvfTOb2VminT8Qx/E+kjN4CttQGMJH+BBF0RttfmDchLdwBtdBc9I0M1dAXIFd+AmzQlrlVBYLRXYAwR79Ibw240/Ed/AeKhaO4Tm8cjFNghG/bR7bh+vPG8yrcAQ9vgm0qsO5Kow05zTSesijGirpMSgzjxeCyyXRmgFpoXI8uoGU0Qb8crNazUUgyNBRDvQ7kVcjTaPThx69dCJngEHPm9D2k3SCGnx2E2oPcvqmcuUueNV2mW3BI6eacAJe04ycgcuduDR5tlSgbnx0FIvCetRVoGMcZybeNLQeHRUoFSowMBVOTLxpaD0GKjA1Tnr9i8J6TPUGl3tMOVrvLHnslq2jdVNgC8r1R37svJN7qNyrQivmUZV32bkCpVzX//fB0S4EHtVWP5m/rit+KbSVj37wiFbU0Y4K/W35AVTtY+WIUwYoAAAAAElFTkSuQmCC" width="10px"></li>')
            }
        }

        $(document).ready(function () {

            addIndexPic()
            addNaviPic()

            //click navi buttom
            $(this).find('#prev').on("click", function () {
                if (index === 0) {
                    index = listLen - 1
                    changeTo(index)
                } else {
                    changeTo(--index)
                }
            })
            $(this).find('#next').on("click", function () {
                if (index === listLen - 1) {
                    index = 0
                    changeTo(index)
                } else {
                    changeTo(++index)
                }
            })

            //click index dot
            //
            $('.indexList').find('li').each(function (item) {
                $(this).click(function () {
                    clearInterval(autoChange)
                    index = item
                    changeTo(index)
                })
            })

            //stop auto change when mouse hover
            //
            $('.wrapper').hover(function () {
                clearInterval(autoChange)
            }, function () {
                autoChangeAgain()
            })
        })
        return this
    }
})(jQuery)




