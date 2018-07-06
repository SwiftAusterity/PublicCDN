(function () {
    if (document.getElementById('guildWebRing') === undefined) {
        return;
    }

    XHR('http://cdn.swiftausterity.com/mcgWebRing.json', function (data) {
        var jsonData = JSON.parse(data);

        var currentHost = window.location.host;

        var hostIndex = 0;
        var maxHosts = Object.keys(jsonData).length;

        while (hostIndex < maxHosts - 1) {

            if (currentHost == jsonData[hostIndex].host) {
                break;
            }

            hostIndex += 1;
        }

        var currentName = jsonData[hostIndex].name;
        var flair = '<span style="font-size: x-large;">' + currentName + '</span>';
        if (jsonData[hostIndex].flair != '') {
            flair = '<img src="' + data[hostIndex].flair + '" style="max-height: 50px; max-width: 150px" title = "' + currentName + '" />';
        }

        var prevIndex = hostIndex - 1;
        if (prevIndex < 0) {
            prevIndex = maxHosts - 1;
        }

        var prevLink = jsonData[prevIndex].web;
        var prevName = jsonData[prevIndex].name;

        var nextIndex = nextIndex + 1;
        if (hostIndex == maxHosts - 1) {
            nextIndex = 0;
        }

        var nextLink = jsonData[nextIndex].web;
        var nextName = jsonData[nextIndex].name;

        var ringHtml =
            '<div style="width: 250px; height: 100px; padding: 10px; border-radius: 15px; max-width: 250px; max-height: 100px; text-align: center; font-size: larger; background-color: navajowhite">' +
            '<div style="padding: 10px 0; max-height: 70px;">' +
            '<a href="' + prevLink + '"><span class="glyphicon glyphicon-chevron-left" style="float: left; padding-top: 15px;" title="' + prevName + '"></span></a>' +
            '<span id="thisRing">' +
            flair +
            '</span>' +
            '<a href="' + nextLink + '"><span class="glyphicon glyphicon-chevron-right" style="float: right; padding-top: 15px;" title="' + nextName + '"></span></a>' +
            '</div>' +
            '<span style="font-size: smaller"><a href="https://mudcoders.com/" target="_blank" title="Join the MUD Coders Guild">MUD Coders Guild Web Ring</a></span>' +
            '</div>';

        document.getElementById('guildWebRing').innerHTML = ringHtml;
    });
})();

function XHR(file, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    }
    xhr.open('GET', file, true);
    xhr.send();
}