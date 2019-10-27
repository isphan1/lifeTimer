$(() => {

    var timer = () => {
        var localTime = new Date()

        var eventTime = new Date(1993, 4, 3)

        var realTime = localTime.getTime() - eventTime.getTime()

        var s = Math.floor(realTime / 1000)
        var m = Math.floor(s / 60)
        var h = Math.floor(m / 60)
        var d = Math.floor(h / 24.273)
        var mo = Math.floor(d / 30)
        var y = Math.floor(mo / 12)

        mo %= 12 ,d %= 30 ,h %= 24 ,m %= 60 ,s %= 60

        s = (s < 10 ? "0" + s : s)
        m = (m < 10 ? "0" + m : m)
        h = (h < 10 ? "0" + h : h)
        d = (d < 10 ? "0" + d : d)

        $('span').html(y + ":" + mo + ":" + d + ":" + h + ":" + m + ":" + s)

    }

    setInterval(timer, 1000)

})