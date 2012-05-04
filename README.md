Javascript CSV Parser
=====================

Simple library for parsing a CSV file in javascript.

Usage:

    csv_data = "ID,Name\n1,Fred\n";
    csv = JavascriptCsvParser.parse(csv_data);
       -> [['ID', 'Name'], ['1', 'Fred']]

