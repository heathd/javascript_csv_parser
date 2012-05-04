module("Javscript Csv Parser Test");

$(document).ready(function(){
  test("Parsing a simple CSV", function() {
    deepEqual(
      JavascriptCsvParser.parse("cat,dog"), 
      [['cat', 'dog']]
    );
  });  

  test("Parsing quoted CSV", function() {
    deepEqual(
      JavascriptCsvParser.parse('"cat",mouse'),
      [['cat', 'mouse']]
    );
  });

  test("Parsing multi-line CSV", function() {
    deepEqual(
      JavascriptCsvParser.parse(['"cat",mouse', 'duck,cow'].join("\n")), 
      [['cat', 'mouse'], ['duck', 'cow']]
    );
  });

  test("Strip whitespace around entries", function() {
    deepEqual(
      JavascriptCsvParser.parse(" fred , \" bob \" "), 
      [['fred', ' bob ']]
    );
  });

  test("Input string has trailing newline", function() {
    deepEqual(
      JavascriptCsvParser.parse("fred\n"), 
      [['fred']]
    );
  });
});