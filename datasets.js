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
        "<div class='dataset-card'><table class='front'><tr><td><span>"+
          "<p class='category'>"+row['category']+"</p>"+
          "<table class='inner'><tr><td><h1>"+row['dataset']+"</td></tr></h1></table>"+
        "</span></td></tr></table>"+
        "<table class='back'><tr><td><span>&nbsp;</span></td></tr></table>"+
        "</div>"
        );
    });
  }
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: renderRows,
                   simpleSheet: true } )
});
