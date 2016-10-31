var ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
var privateIpRegex = /(^127\.0\.0\.1)|(^10\.)|(^172\.1[6-9]\.)|(^172\.2[0-9]\.)|(^172\.3[0-1]\.)|(^192\.168\.)/;

function getClientIp(forwardedForHeader) {
    if (typeof forwardedForHeader !== 'string') {
        return;
    }

    var ips = forwardedForHeader.split(',').map((ip) => ip.trim());

    for (var i = 0; i < ips.length; i++) {
        var ip = ips[i];

        if (ip.match(ipRegex) && !ip.match(privateIpRegex)) {
            return ip;
        }
    }
}

module.exports = getClientIp;
