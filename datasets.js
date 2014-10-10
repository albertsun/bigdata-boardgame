// var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html';
var public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/1-Hod344h0PELAqZ4Hicp3APU85NT56cVTp8YqlukdQc/pubhtml";


$(document).ready(function() {

  function renderRows(data,tabletop) {
    console.log(data);
    console.log(tabletop);
    var data = _(data).chain().reduce(function(memo,item) {
      memo[item['dataset']] = {
        'dataset': item['dataset'],
        'category': item['category']
      }
      return memo;
    }, {})
    .values()
    .value();

    console.log(data);
    $.each(data, function(i,row) {
      $("body").append(
        "<div>"+
          "<p>"+row['category']+"</p>"+
          "<h1>"+row['dataset']+"</h1>"+
        "</div>"
        );
    });
  }
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: renderRows,
                   simpleSheet: true } )
});
