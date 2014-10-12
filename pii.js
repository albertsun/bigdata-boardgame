// var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html';
var public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/1-Hod344h0PELAqZ4Hicp3APU85NT56cVTp8YqlukdQc/pubhtml";

$(document).ready(function() {

  function renderRows(data,tabletop) {
    console.log(data);
    console.log(tabletop);
    $.each(data, function(i,row) {
      $("body").append(
        "<div><table class='front'><tr><td><span>"+
          "<p>"+row['category']+"</p>"+
          "<p><b>"+row['dataset']+"</b></p>"+
          "<p>"+row['piicard']+"</p>"+
          "<p><i>"+(row['description'] ? row['description'] : '&nbsp;')+"</i></p>"+
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
