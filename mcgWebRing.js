(function () {
    if (document.getElementById('guildWebRing') === undefined) {
        return;
    }

    var jsonData =     
     [
      {
        "name": "Under the Eclipse",
        "web": "http://netmud.swiftausterity.com/",
        "host": "netmud.swiftausterity.com",
        "flair": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Sylvilagus_floridanus_14136.JPG",
        "background":"navajowhite",
        "foreground":"black"
      },
      {
        "name": "MidMud",
        "web": "http://midmud.com/",
        "host": "midmud.com",
        "flair": "https://exventure.org/images/exventure.png",
        "background":"navajowhite",
        "foreground":"black"
      },
      {
        "name": "Gossip",
        "web": "http://gossip.haus/",
        "host": "gossip.haus",
        "flair": "https://gossip.haus/images/gossip.png",
        "background":"navajowhite",
        "foreground":"black"
      }
    ];

    var currentHost = window.location.host;

    var hostIndex = 0;
    var maxHosts = Object.keys(jsonData).length;

    while (hostIndex < maxHosts - 1) {

        if (currentHost == jsonData[hostIndex].host) {
            break;
        }

        hostIndex += 1;
    }

    var backgroundColor = jsonData[hostIndex].background;
    var color = jsonData[hostIndex].foreground;

    if(backgroundColor == '') {
        backgroundColor = 'navajowhite';
    }

    if(color == '') {
        color = 'black';
    }

    var currentName = jsonData[hostIndex].name;
    var flair = '<span style="font-size: x-large;">' + currentName + '</span>';
    if (jsonData[hostIndex].flair != '') {
        flair = '<img src="' + jsonData[hostIndex].flair + '" style="max-height: 50px; max-width: 150px" title = "' + currentName + '" />';
    }

    var prevIndex = hostIndex - 1;
    if (prevIndex < 0) {
        prevIndex = maxHosts - 1;
    }

    var prevLink = jsonData[prevIndex].web;
    var prevName = jsonData[prevIndex].name;

    var nextIndex = hostIndex + 1;
    if (hostIndex == maxHosts - 1) {
        nextIndex = 0;
    }

    var nextLink = jsonData[nextIndex].web;
    var nextName = jsonData[nextIndex].name;

    var ringHtml =
        '<div style="width: 250px; height: 100px; padding: 10px; border-radius: 15px; max-width: 250px; max-height: 100px; text-align: center; font-size: larger; color: ' + color + '; background-color: ' + backgroundColor + ';">' +
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
})();
