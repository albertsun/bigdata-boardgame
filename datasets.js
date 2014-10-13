// var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html';
// var public_spreadsheet_url = "sheet.html";

$(document).ready(function() {

  var public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/1-Hod344h0PELAqZ4Hicp3APU85NT56cVTp8YqlukdQc/pubhtml?gid=0&single=true";


  function renderDatasets(data,tabletop) {
    console.log(data);
    // console.log(tabletop);
    var data = _(data.Sheet1.elements).chain().reduce(function(memo,item) {
      memo[item['dataset']] = {
        'dataset': item['dataset'],
        'category': item['category']
      }
      return memo;
    }, {})
    .values()
    .value();

    // console.log(data);
    $.each(data, function(i,row) {
      $("body").append(
        "<div class='dataset-card'><table class='front'><tr><td><span>"+
          "<p class='category'>"+row['category']+"</p>"+
          "<table class='inner'><tr><td><h1>"+row['dataset']+"</td></tr></h1></table>"+
        "</span></td></tr></table>"+
        "<table class='back'><tr><td><span><p><label>Dataset</label></p></span></td></tr></table>"+
        "</div>"
        );
    });
  }

  console.log("init datasets");

  Tabletop.init( { key: public_spreadsheet_url,
                   callback: renderDatasets,
                   simpleSheet: false } )
});
