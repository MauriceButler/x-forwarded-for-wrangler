var test = require('tape');
var getClientIp = require('../');
var data = {
    '255.255.255.255': '255.255.255.255',
    '0.0.0.0, 10.1.1.10': '0.0.0.0',
    '123.456.789.0, 8.8.8.8, 192.168.1.1': '8.8.8.8',
    '172.16.1.1, 123.123.123.123, 10.1.1.10': '123.123.123.123',
    '172.40.1.1, 123.123.123.123, 10.1.1.10': '172.40.1.1',
    'foo, bar, 103.23.13.3, 10.1.1.10': '103.23.13.3',
    '123,456,789,0, 123.123.123.123': '123.123.123.123',
    '': undefined,
    '123.123.123.123.123': undefined,
    '300.300.300.300': undefined,
    '1111.2222.3333.4444': undefined,
    'total garbage': undefined,
};

function runTest(key) {
    return function (t) {
        t.plan(1);

        t.equal(getClientIp(key), data[key], 'got correct ip');
    };
}

for (var key in data) {
    test('header of "' + key + '" gets "' + data[key] + '"', runTest(key));
}

test('If header is not a string return undefined', function (t) {
    t.plan(5);

    t.equal(getClientIp(), undefined);
    t.equal(getClientIp(null), undefined);
    t.equal(getClientIp(1234), undefined);
    t.equal(getClientIp({}), undefined);
    t.equal(getClientIp([]), undefined);
});
