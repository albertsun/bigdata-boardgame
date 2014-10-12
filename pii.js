// var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html';
var public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/1-Hod344h0PELAqZ4Hicp3APU85NT56cVTp8YqlukdQc/pubhtml";

$(document).ready(function() {

  function renderRows(data,tabletop) {
    console.log(JSON.stringify(data));
    console.log(tabletop);
    $.each(data, function(i,row) {
      $("body").append(
        "<div class='pii-card'><table class='front'><tr><td><span>"+
          "<p class='category'>"+row['category']+"</p>"+
          "<p class='dataset'><b>"+row['dataset']+"</b></p>"+
          "<table class='inner'><tr><td><p class='pii'>"+row['piicard']+"</p>"+
          "<p class='description'><i>"+(row['description'] ? row['description'] : '&nbsp;')+"</i></p></td></tr></table>"+
        "</span></td></tr></table>"+
        "<table class='back'><tr><td><span><label>PII</label></span></td></tr></table>"+
        "</div>"
        );
    });
  }
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: renderRows,
                   simpleSheet: true } )
});
