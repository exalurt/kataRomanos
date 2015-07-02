var expect = require('expect.js');
var numeroRomano = require('../../src/romanos');

describe('Números romanos', function() {
    var tests = [
        { expect : 'I',         input : 1 },
        { expect : 'II',        input : 2 },
        { expect : 'III',       input : 3 },
        { expect : 'IV',        input : 4 },
        { expect : 'V',         input : 5 },
        { expect : 'VI',        input : 6 },
        { expect : 'VII',       input : 7 },
        { expect : 'IX',        input : 9 },
        { expect : 'X',         input : 10 },
        { expect : 'XXX',       input : 30 },
        { expect : 'XXXV',      input : 35 },
        { expect : 'XXXVI',     input : 36 },
        { expect : 'XL',        input : 40 },
        { expect : 'XLIII',     input : 43 },
        { expect : 'L',         input : 50 },
        { expect : 'LXI',       input : 61 },
        { expect : 'XCIII',     input : 93 },
        { expect : 'CXCIII',    input : 193 },
        { expect : 'DCCCXCIII', input : 893 },
        { expect : 'CM',        input : 900 },
        { expect : 'CMXCIX',    input : 999 }
    ];

    tests.forEach(function(test) {
        it ('salida: ' + test.expect, function() {
            expect(test.expect).equal(numeroRomano(test.input));
        });
    });
});
