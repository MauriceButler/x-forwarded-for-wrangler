# x-forwarded-for-wrangler

Wrangles the x-forwarded-for header value to get a best guess client ip address (left most non private ip)

## Why

When using X-Forwarded-For, the assumption is that the left most ip address is the originating client.

This is however often not the case when a corportate network or a public wifi is being used.

In this case the rule "Always use the leftmost non-private address" is the best practice.

Private ip ranges are:

- 10.0.0.0 – 10.255.255.255
- 172.16.0.0 – 172.31.255.255
- 192.168.0.0 – 192.168.255.255

This module inplements the points discussed here [Wrangling the x forwarded for header](https://r.va.gg/2011/07/wrangling-the-x-forwarded-for-header.html) by [Rod Vagg](https://github.com/rvagg)


## How

``` javascript
var getClientIp = require('x-forwarded-for-wrangler');

getClientIp(request.headers['x-forwarded-for'])

```
