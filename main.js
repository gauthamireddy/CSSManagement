var myList = [
    {
      "NAME" : "Europe",
      "PLACE" : "10,525,200",
      "FORECAST" : "12,700,200",
      "BEST CASE" : "12,700,200",
      "COMMIT" : "12,700,200"
    },
    {
     "NAME" : "Belgium",
      "PLACE" : "2,525,200",
      "FORECAST" : "3,125,200",
      "BEST CASE" : "2,900,450",
      "COMMIT" : "2,900,450"
    },
    {
      "NAME" : "England",
      "PLACE" : "4600400",
      "FORECAST" : "2500600",
      "BEST CASE" : "3,900,300",
      "COMMIT" : "3,900,300"
    },
    {
      "NAME" : "Sweden",
      "PLACE" : "2,425,200",
      "FORECAST" : "5,425,200",
      "BEST CASE" : "6,200,200",
      "COMMIT" : "6,200,200"
    },
     {
      "NAME" : "Finland",
      "PLACE" : "1,700,200",
      "FORECAST" : "4,700,200",
      "BEST CASE" : "4,702,120",
      "COMMIT" : "4,702,120"
    }  
];

// Builds the HTML Table out of myList.
function buildHtmlTable(selector) {
  var columns = addAllColumnHeaders(myList, selector);

  for (var i = 0; i < myList.length; i++) {
    var row$ = $('<tr/>');
    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
      var cellValue = myList[i][columns[colIndex]];
      if (cellValue == null) cellValue = "";
      row$.append($('<td/>').html(cellValue));
    }
    $(selector).append(row$);
  }
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.
function addAllColumnHeaders(myList, selector) {
  var columnSet = [];
  var headerTr$ = $('<tr/>');

  for (var i = 0; i < myList.length; i++) {
    var rowHash = myList[i];
    for (var key in rowHash) {
      if ($.inArray(key, columnSet) == -1) {
        columnSet.push(key);
        headerTr$.append($('<th/>').html(key));
      }
    }
  }
  $(selector).append(headerTr$);

  return columnSet;
}