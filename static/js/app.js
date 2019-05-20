// from data.js
var tableData = data;

// link to table in html
var tbody = d3.select("tbody");

// construct table
data.forEach(function(ufo) {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

// link to button in html
var button = d3.select("#filter-btn");

// link to input element in html
var inputField = d3.select("#datetime");


// define click function
d3.selectAll("button").on("click", function() {
    d3.event.preventDefault();
    d3.selectAll("tbody tr").remove()
    var inputValue = inputField.property("value");
    var filteredData = tableData.filter(event => event.datetime === inputValue);
    
    // filtering function
    filteredData.forEach(function(ufo) {
            var row = tbody.append("tr");
            Object.entries(ufo).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
            });
    });
    
});

