function simplePlural(b, a) {
  return ('undefined' == a && (a = 2), 1 >= Math.abs(a)) ? b : b + 's';
}
function ordinalSuffix(a) {
  var b = a % 10,
    c = a % 100;
  return 1 == b && 11 != c
    ? a + 'st'
    : 2 == b && 12 != c
    ? a + 'nd'
    : 3 == b && 13 != c
    ? a + 'rd'
    : a + 'th';
}
function processInput(a) {
  var e,
    b,
    d,
    h,
    g,
    f,
    i = 1;
  '-' == a.toString().charAt(0) && ((a = a.slice(1)), (i = -1)),
    '' == a && (a = 0);
  var c = (a = a.toString().trim()).split('-');
  return (1 === c.length && (c = a.split(' ')),
  1 === c.length && (c = a.split('+')),
  c.length > 2)
    ? (alert('Please check you input!'), null)
    : (c.length > 1 && -1 !== a.indexOf('/')
        ? ((f = parseInt(c[0])),
          (e = c[1].split('/')),
          (b = parseInt(e[0])),
          ('undefined' == b || isNaN(b)) && (b = 0),
          (d = parseInt(e[1])),
          ('undefined' == d || isNaN(d)) && (d = 1),
          (h = parseInt(b) / parseInt(d)),
          (g = 1 * (f + h)))
        : -1 !== a.indexOf('/')
        ? (('undefined' == (b = parseInt((e = a.split('/'))[0])) || isNaN(b)) &&
            (b = 0),
          ('undefined' == (d = parseInt(e[1])) || isNaN(d)) && (d = 1),
          (g = 1 * (h = parseInt(b) / parseInt(d))))
        : ('undefined' == (f = parseFloat(c[0])) && (f = 0),
          isNaN((b = parseInt(c[1]))) && (b = 0),
          (g = f + b)),
      i * g);
}
var sig = 5,
  n = 0;
function digitsAfter(a) {
  var b = (a = a.toString()).indexOf('.');
  return -1 == b ? 0 : a.length - b - 1;
}
function isNumeric(a) {
  return !isNaN(parseFloat(a)) && isFinite(a);
}
function sigFig(b, a) {
  return void 0 == a && (a = 4), 1 * Number.parseFloat(b).toPrecision(a);
}
function convertToEng(a) {
  if (0 == (a *= 1) || '' == a) return 0;
  var b = Math.floor(Math.log10(Math.abs((a = frac2dec(a)))));
  return a / Math.pow(10, b) + 'e' + b;
}
function engNotation(a, b) {
  if (
    ('undefined' === b && (b = 4),
    (a = a.toString().replace(/[^0-9Ee.\-\/]/, '')),
    (a *= 1),
    0 == (a = a.toString()) || '' == a || b < 0)
  )
    return 0;
  if (!((a = convertToEng((a = a.replace('E', 'e')))).indexOf('e') > -1))
    return sigFig(a, b);
  var d = a.toString().split('e'),
    e = roundDec(d[0], b),
    c = d[1],
    f = c.substring(0, 1);
  return (
    '+' == f && (c = c.substring(1, 2)), e + ' \xd7 10<sup>' + c + '</sup>'
  );
}
function printFraction(a, b) {
  var c = Math.abs(a),
    d = Math.abs(b);
  return isNaN(c) || isNaN(d)
    ? '<span class="fraction"><span class="top">' +
        a +
        '</span><span class="bottom">' +
        b +
        '</span></span>'
    : (a >= 0 && b < 0) || (a <= 0 && b > 0)
    ? '<span class="fraction"><span class="top">-' +
      c +
      '</span><span class="bottom">' +
      d +
      '</span></span>'
    : '<span class="fraction"><span class="top">' +
      c +
      '</span><span class="bottom">' +
      d +
      '</span></span>';
}
function roundDec(b, a) {
  return (
    void 0 === a && (a = 8),
    (b = frac2dec(b)),
    1 * Number(Math.round(parseFloat(b + 'e' + a)) + 'e-' + a)
  );
}
function roundNumber(b, a) {
  return Math.round(b * Math.pow(10, a)) / Math.pow(10, a);
}
function isFraction(a) {
  return !(0 > a.toString().indexOf('/'));
}
function frac2dec(a) {
  if (!isFraction(a)) return a;
  var b,
    f,
    g,
    d,
    e = 1;
  0 == a.indexOf('-') && ((e = -1), (a = a.replace('-', '')));
  var c = a.split('-');
  return (1 === c.length && (c = a.split(' ')),
  c.length > 1 && -1 !== a.indexOf('/'))
    ? ((g = parseFloat(c[0])),
      (b = c[1].split('/')),
      (d = parseFloat(b[0]) / parseFloat(b[1])),
      (f = d + g),
      f * e)
    : -1 !== a.indexOf('/') &&
        (d = parseFloat((b = a.split('/'))[0]) / parseFloat(b[1])) * e;
}
function splitFraction(d) {
  var c = 0,
    f = d,
    e = d.split('/'),
    a = parseFloat(e[0]),
    b = parseFloat(e[1]);
  return (
    (c =
      isNaN(a) || isNaN(b)
        ? isNaN(a)
          ? isNaN(b)
            ? 'Please check the input'
            : b
          : a
        : a / b),
    isNaN(c) ? 'NAN' : c
  );
}
var gcd = function (b, a) {
  return a ? gcd(a, b % a) : b;
};
function improperFractionToMixedNumber(a, b) {
  var c = parseInt(a / b);
  return (a -= c * b), [c, reduce(a, b)];
}
function reduce(b, c) {
  if (isNaN(b) || isNaN(c)) return NaN;
  var a = function c(b, a) {
    return a ? c(a, b % a) : b;
  };
  return (a = a(b, c)), [b / a, c / a];
}
function float2rat_p(c, k) {
  var d = '';
  c = parseFloat(c);
  var b = 1,
    i = 0,
    a = 0,
    j = 1,
    e = c,
    f = 0;
  do {
    var g = Math.floor(e),
      h = b;
    (b = g * b + i),
      (i = h),
      (h = a),
      (a = g * a + j),
      (j = h),
      (e = 1 / (e - g));
  } while (Math.abs(c - b / a) > k);
  return (
    (f = Math.floor(b / a)),
    (d = b / a),
    b % a != 0 &&
      (d =
        f > 0
          ? f + ' <sup>' + (b % a) + '</sup>/<sub>' + a + '</sub>'
          : '<sup>' + b + '</sup>/<sub>' + a + '</sub>'),
    d
  );
}
function float2rat_p_aux(c, k) {
  c = parseFloat(c);
  var d,
    b = 1,
    i = 0,
    a = 0,
    j = 1,
    e = c,
    f = 0;
  do {
    var g = Math.floor(e),
      h = b;
    (b = g * b + i),
      (i = h),
      (h = a),
      (a = g * a + j),
      (j = h),
      (e = 1 / (e - g));
  } while (Math.abs(c - b / a) > k);
  return (
    (f = Math.floor(b / a)),
    (d = b / a),
    b % a != 0 && (d = f > 0 ? f + ' ' + (b % a) + '/' + a : b + '/' + a),
    d
  );
}
function float2rat_p_error(a, b) {
  return ((_0xc048x49 =
    _0xc048x40.toString().indexOf(' ') > -1
      ? _0xc048x40.toString().split(' ')
      : [0, _0xc048x40]),
  Math.ceil(_0xc048x24 - _0xc048x48 != 0) && Math.abs(_0xc048x4c) >= 1e-14)
    ? _0xc048x4c.toPrecision(2)
    : 0;
}
function exactFraction(c) {
  var d = 0,
    g = '';
  (c = parseFloat(c)) < 0 && ((c *= -1), (g = '-'));
  var i = float2rat_p(c, 1e-10),
    b = 1,
    j = 0,
    a = 0,
    k = 1,
    e = c;
  d = 0;
  do {
    var f = Math.floor(e),
      h = b;
    (b = f * b + j),
      (j = h),
      (h = a),
      (a = f * a + k),
      (k = h),
      e !== f && (e = 1 / (e - f));
  } while (Math.abs(c - b / a) > 1e-10);
  (d = Math.floor(b / a)),
    b % a != 0 &&
      (i =
        d > 0
          ? g + d + '&nbsp;<sup>' + (b % a) + '</sup>/<sub>' + a + '</sub>'
          : g + '<sup>' + b + '</sup>/<sub>' + a + '</sub>');
  var l = ['2', '3', '4', '5', '8', '16', '32', '64', '128', '256'].indexOf(
      a.toString()
    ),
    m = [
      '1/2',
      '1/3',
      '2/3',
      '1/4',
      '3/4',
      '1/8',
      '3/8',
      '5/8',
      '7/8',
      '1/12',
      '1/14',
      '1/16',
      '1/32',
      '1/64',
      '1/128',
      '1/12',
      '1/14',
    ].indexOf((b % a) + '/' + a);
  return (l > -1 || m > -1) && i;
}
function bestFmt(a, b) {
  return (void 0 === b && (b = 4), 0 == a || '' == a)
    ? 0
    : exactFraction(a - parseInt(a))
    ? float2rat_p(a, 1e-10)
    : 1e4 >= Math.abs(a) && Math.abs(a) > 1e-4
    ? sigFig(a, b)
    : engNotation(a, b);
}
function usableFractionsVerbose(a, s, g, o) {
  var t = splitFraction(o.toString()),
    b = '',
    c = 0,
    p = '',
    q = 0,
    h = !1,
    r = parseInt((a *= 1));
  if (
    ((q = r > 0 ? a - r : a), digitsAfter(a) > 0 && q >= 0.00390625 && a < 6)
  ) {
    c = Math.abs(decToUsableFracionPError(a, 2));
    var i = decToUsableFracion(a, 2);
    i &&
      c <= 10 &&
      ((b += "<p><span class='destacado'>" + i + ' </span>' + plural(g, a)),
      c > 0
        ? ((b += ' (e* = ' + decToUsableFracionPError(a, 2) + '%)'), (h = !0))
        : (b += ' <small>(exactly)</small>'),
      (b += '</p>')),
      (c = Math.abs(decToUsableFracionPError(a, 4)));
    var d = decToUsableFracion(a, 4);
    d &&
      d != i &&
      c <= 10 &&
      ((b += "<p><span class='destacado'>" + d + ' </span>' + plural(g, a)),
      c > 0
        ? ((b += ' (e* = ' + decToUsableFracionPError(a, 4) + '%)'), (h = !0))
        : (b += ' <small>(exactly)</small>'),
      (b += '</p>')),
      (c = Math.abs(decToUsableFracionPError(a, 8)));
    var e = decToUsableFracion(a, 8);
    e &&
      e != d &&
      d != i &&
      c <= 10 &&
      ((b += "<p><span class='destacado'>" + e + ' </span>' + plural(g, a)),
      c > 0
        ? ((b += ' (e* = ' + decToUsableFracionPError(a, 8) + '%)'), (h = !0))
        : (b += ' <small>(exactly)</small>'),
      (b += '</p>')),
      (c = Math.abs(decToUsableFracionPError(a, 16)));
    var f = decToUsableFracion(a, 16);
    f &&
      f != e &&
      e != d &&
      d != i &&
      c <= 10 &&
      ((b += "<p><span class='destacado'>" + f + ' </span>' + plural(g, a)),
      c > 0
        ? ((b += ' (e* = ' + decToUsableFracionPError(a, 16) + '%)'), (h = !0))
        : (b += ' <small>(exactly)</small>'),
      (b += '</p>')),
      (c = Math.abs(decToUsableFracionPError(a, 32)));
    var j = decToUsableFracion(a, 32);
    j &&
      j != f &&
      f != e &&
      e != d &&
      d != i &&
      c <= 10 &&
      ((b += "<p><span class='destacado'>" + j + ' </span>' + plural(g, a)),
      c > 0
        ? ((b += ' (e* = ' + decToUsableFracionPError(a, 32) + '%)'), (h = !0))
        : (b += ' <small>(exactly)</small>'),
      (b += '</p>')),
      (c = Math.abs(decToUsableFracionPError(a, 64)));
    var k = decToUsableFracion(a, 64);
    k &&
      k != j &&
      j != f &&
      f != e &&
      e != d &&
      d != i &&
      c <= 10 &&
      ((b += "<p><span class='destacado'>" + k + ' </span>' + plural(g, a)),
      c > 0
        ? ((b += ' (e* = ' + decToUsableFracionPError(a, 64) + '%)'), (h = !0))
        : (b += ' <small>(exactly)</small>'),
      (b += '</p>')),
      (c = Math.abs(decToUsableFracionPError(a, 128)));
    var l = decToUsableFracion(a, 128);
    l &&
      l != k &&
      k != j &&
      j != f &&
      f != e &&
      e != d &&
      d != i &&
      c <= 10 &&
      ((b += "<p><span class='destacado'>" + l + ' </span>' + plural(g, a)),
      c > 0
        ? ((b += ' (e* = ' + decToUsableFracionPError(a, 128) + '%)'), (h = !0))
        : (b += ' <small>(exactly)</small>'),
      (b += '</p>')),
      (c = Math.abs(decToUsableFracionPError(a, 256)));
    var m = decToUsableFracion(a, 256);
    m &&
      m != l &&
      l != k &&
      k != j &&
      j != f &&
      f != e &&
      e != d &&
      d != i &&
      c <= 10 &&
      ((b += "<p><span class='destacado'>" + m + ' </span> ' + plural(g, a)),
      c > 0
        ? ((b += '(e* = ' + decToUsableFracionPError(a, 256) + '%)'), (h = !0))
        : (b += ' <small>(exactly)</small>'),
      (b += '</p>'));
  }
  return ((p =
    '<h3>' +
    o +
    ' ' +
    plural(s, t) +
    ' to the Nearest fractions or Integer of ' +
    plural(g) +
    ':</h3>' +
    b +
    "<p class='compact'><b> e* </b></span> is the maximum rounding error (positive or negative).</p>"),
  h)
    ? p
    : '';
}
function singular(b) {
  var a = { feet: 'foot' }[b];
  return a || (a = b), a;
}
function plural(a, b) {
  void 0 === b && (b = 2);
  var c = { is: 'are', does: 'do', has: 'have', weighs: 'weigh' }[a];
  return (c || (c = a + 's'), b > 1) ? c : singular(a);
}
function aAn(b) {
  var a = b.charAt(0).toLowerCase();
  return 'a' == a || 'e' == a || 'i' == a || 'o' == a || 'u' == a ? 'an' : 'a';
}
function ucWords(c) {
  var a = c.split(' ');
  if (void 0 === a) return !1;
  for (var b = 0; b < a.length; b++) {
    var d = a[b].charAt(0).toUpperCase();
    a[b] = d + a[b].substr(1).toLowerCase();
  }
  return a.join(' ');
}
function ucFirst(a) {
  return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
}
function getNearestFraction(c, g) {
  void 0 == g && (g = 1e-10), (i = ''), (b = 1);
  var i,
    b,
    a,
    d,
    e,
    j,
    f,
    k = 0;
  a = 0;
  var l = 1;
  e = c = parseFloat(c);
  var h = 0;
  j = g * c;
  do
    (d = Math.floor(e)),
      (f = b),
      (b = d * b + k),
      (k = f),
      (f = a),
      (a = d * a + l),
      (l = f),
      (e = 1 / (e - d));
  while (Math.abs(c - b / a) > j);
  (h = Math.floor(b / a)),
    b % a != 0 &&
      (i =
        h > 0
          ? h +
            '&nbsp;<span class="fraction"><span class="top">' +
            (b % a) +
            '</span><span class="bottom">' +
            a +
            '</span></span>'
          : '<span class="fraction"><span class="top">' +
            b +
            '</span><span class="bottom">' +
            a +
            '</span></span>');
  var m = [2, 4, 8, 16, 32].indexOf(a),
    o = [
      0.3333333333333333, 0.6666666666666666, 0.08333333333333333,
      0.07142857142857142, 0.027777777777777776, 0.006944444444444444,
    ].indexOf((b % a) / a);
  return (-1 !== m || -1 !== o) && i;
}
function decToUsableFracion(f, c) {
  for (
    var a = c, d = Math.floor(f), b = Math.round((f - d) * c), e = '';
    b % 2 == 0 && c % 2 == 0;

  )
    (b /= 2), (c /= 2);
  return (
    b == c && ((d += 1), (b = 0)),
    (e = d > 0 ? d : ''),
    b > 0 &&
      (getNearestFraction(f) &&
      (3 == a || 6 == a || 9 == a || 12 == a || 14 == a || 36 == a || 144 == a)
        ? (e += getNearestFraction(f))
        : (d > 0 && (e += '&nbsp;'),
          (e +=
            '<span class="fraction"><span class="top">' +
            b +
            '</span><span class="bottom">' +
            c +
            '</span></span>'))),
    (0 == f || b < 1) && (e = d),
    e
  );
}
function decToUsableFracionPError(b, c) {
  for (
    var d = Math.floor((b *= 1)), a = Math.round((b - d) / (1 / c)), e = 0;
    a % 2 == 0 && c % 2 == 0;

  )
    (a /= 2), (c /= 2);
  1 == a && 1 == c && ((d += 1), (a = 0)),
    (e = d > 0 ? d : 0),
    a > 0 && (e += a / c);
  var f = Math.ceil(((100 * (e - b)) / b) * 1e4) / 1e4;
  return Math.ceil(e - b != 0) && Math.abs(f) >= 1e-6 ? f.toPrecision(2) : 0;
}

('use strict');

function clearvalues() {
  document.getElementById('converted').value = '';
  document.getElementById('q').value = '';
}

function convert(unit1) {
  if (unit1 == 'pound') {
    var unit2 = 'kilogram';
    var q = document.getElementById('q').value;
    var qRaw = q;
    q = processInput(q);
    var converted = q / 0.45359237;
    var factor = 2.204622622;
    if (!isNaN(converted)) {
      document.getElementById('converted').value = converted['toPrecision'](
        10
      ).replace(/(?:\.0+|(\.\d+?)0+)$/, '$1');
    } else {
      document.getElementById('converted').value = '';
    }
    QASection(q, qRaw, factor, converted, unit2, unit1);
  } else {
    var unit2 = 'pound';
    var q = document.getElementById('converted').value;
    q = processInput(q);
    var qRaw = q;
    var converted = q * 0.45359237;
    var factor = 0.45359237;
    if (!isNaN(converted)) {
      document.getElementById('q').value = converted
        .toPrecision(5)
        .replace(/(?:\.0+|(\.\d+?)0+)$/, '$1');
    } else {
      document.getElementById('q').value = '';
    }
    QASection(q, qRaw, factor, converted, unit2, unit1);
  }
  0.75;
  var resp =
    "<span class='destacado'>" +
    qRaw +
    ' ' +
    plural(unit2, q) +
    ' = ' +
    bestFmt(converted) +
    ' ' +
    plural(unit1, converted) +
    '</span>' +
    usableFractionsVerbose(converted, unit2, unit1, q);
  if (isNaN(converted) || isNaN(q)) {
    resp = 'Please, type a numeric value or check your imput!';
  }
  document.getElementById('verbose').innerHTML = resp;
}

function QASection(q, qRaw, factor, converted, unitFrom, unitTo) {
  var QA = document.getElementById('questionsAndAnswers');
  var weigh;
  if (q > 1) {
    weigh = 'weigh';
  } else {
    weigh = 'weighs';
  }
  QA.innerHTML =
    '<div id="faqSection" itemtype="https://schema.org/FAQPage" itemscope=""> \x0A  <h2>FAQs on '
      .concat(plural(unitFrom, q), ' to ')
      .concat(
        plural(unitTo),
        '</h2> \x0A  <div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question"> \x0A    <h3 itemprop="name text" class="active">How do you convert '
      )
      .concat(qRaw, ' ')
      .concat(plural(unitFrom, q), ' to ')
      .concat(
        plural(unitTo),
        '?</h3> \x0A    <div itemscope="" itemprop="suggestedAnswer acceptedAnswer" itemtype="https://schema.org/Answer"> \x0A      <div itemprop="text"> \x0A        <p>To transform '
      )
      .concat(qRaw, ' ')
      .concat(plural(unitFrom, q), ' into ')
      .concat(
        plural(unitTo, converted),
        ', you just need to multiply the quantity in '
      )
      .concat(plural(unitFrom), ' by the conversion factor, ')
      .concat(factor, '. </p><p>So, ')
      .concat(qRaw, ' ')
      .concat(plural(unitFrom, q), ' in ')
      .concat(plural(unitTo), ' = ')
      .concat(q, ' times ')
      .concat(factor, ' = ')
      .concat(converted, ' ')
      .concat(
        plural(unitTo, converted),
        '. See details on the formula below on this page.</p> \x0A      </div> \x0A    </div> \x0A  </div>\x0A  <div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question"> \x0A    <h3 itemprop="name text" class="active">What\'s '
      )
      .concat(qRaw, ' ')
      .concat(plural(unitFrom, q), ' in ')
      .concat(
        plural(unitTo),
        '?</h3> \x0A    <div itemscope="" itemprop="suggestedAnswer acceptedAnswer" itemtype="https://schema.org/Answer"> \x0A      <div itemprop="text"> \x0A        <p>'
      )
      .concat(qRaw, ' ')
      .concat(plural(unitFrom, q), ' equals ')
      .concat(converted, ' ')
      .concat(
        plural(unitTo, converted),
        '.</p> \x0A      </div> \x0A    </div> \x0A  </div>\x0A  <div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question"> \x0A    <h3 itemprop="name text" class="active">What '
      )
      .concat(plural('does', q), ' ')
      .concat(qRaw, ' ')
      .concat(plural(unitFrom, q), ' ')
      .concat(
        plural('weighs', q),
        '?</h3> \x0A    <div itemscope="" itemprop="suggestedAnswer acceptedAnswer" itemtype="https://schema.org/Answer"> \x0A      <div itemprop="text"> \x0A        <p>'
      )
      .concat(qRaw, ' ')
      .concat(plural(unitFrom, q), ' ')
      .concat(plural('weighs', q), ' ')
      .concat(converted, ' ')
      .concat(
        plural(unitTo, converted),
        '(*).</p>\x0A        <p class=\'compact small\'>(*) Note: For most people, mass and weight are used interchangeably. Mass measures the amount of matter while weight is a force. Although it is not strictly correct, we use in this calculator the popular term "weight" as a measure of mass. The '
      )
      .concat(unitFrom, ', as well as, the ')
      .concat(
        unitTo,
        ' are units of mass. The unit of weight is, for example, the Newton. A detailed explanation is beyond the scope of this calculator.</p>\x0A      </div> \x0A    </div> \x0A  </div>\x0A</div>'
      );
}

function clearOnFocus(field) {
  field.value = '';
}
var elements = document.getElementsByTagName('input');
var inType;
for (var i = 0; i < elements.length; i++) {
  inType = elements[i].type;
  if (
    inType == 'number' ||
    inType == 'text' ||
    inType == null ||
    inType == 'tel'
  ) {
    elements[i].setAttribute(
      'onfocus',
      'selectedField=this;clearOnFocus(this);'
    );
    elements[i].setAttribute('autocomplete', 'off');
  }
}
function getAllUrlParams(url) {
  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {
    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // set parameter name and value (use 'true' if empty)
      var paramName = a[0];
      var paramValue = typeof a[1] === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {
        // create key if it doesn't exist
        var key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string') {
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }

  return obj;
}
window.addEventListener('load', function () {
  var input = document.querySelector('#q'),
    output = document.querySelector('#converted');
  if (getAllUrlParams().kg) {
    var kg = getAllUrlParams().kg;
    console.log(getAllUrlParams());
    input.value = Number(kg);
    convert('pound');
  }
});

convert('pound');
