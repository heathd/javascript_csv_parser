var JavascriptCsvParser = JavascriptCsvParser || {};


JavascriptCsvParser.parse = function(csv) {


  var regexp = /^ *("(?:[^"]|"")*"|[^",\n]*?) *(,|\n|$)/m;
  var data = [];
  var row = [];
  var rest = csv;

  while (!/^\W*$/.test(rest)) {
    var matchData = rest.match(regexp);
    var entry = JavascriptCsvParser.stripQuotes(matchData[1]);
    row.push(entry);

    if (matchData[2] == "\n") {
      data.push(row);
      row = [];
    }

    rest = rest.substr(matchData[0].length);
    var ok = /^\W+$/m.test(rest)
  }
  if (row.length > 0) {
    data.push(row);
  }
  return data;
};

JavascriptCsvParser.stripQuotes = function(quotedString) {
  var matchData = quotedString.match(/^"(.*)"$/);
  if (matchData) {
    return matchData[1];
  } else {
    return quotedString;
  }
}