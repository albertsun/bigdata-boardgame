// var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html';


$(document).ready(function() {

  var public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/1-Hod344h0PELAqZ4Hicp3APU85NT56cVTp8YqlukdQc/pubhtml?gid=953361128&single=true";

  function renderStories(data,tabletop) {
    console.log(data);
    // console.log(tabletop);
    // debugger

    $.each(data.Stories.elements, function(i,row) {
      $("body").append(
        "<div class='stories-card'><table class='front'><tr><td><span>"+
          "<table class='inner'><tr><td>"+
          "<p class='stories'>"+row['stories']+"</p>"+
          "</td></tr></table>"+
        "</span></td></tr></table>"+
        "<table class='back'><tr><td><span>"+
        "<p><label>Story</label></p>"+
        "</span></td></tr></table>"+
        "</div>"
        );
    });
  }

  console.log("init stories");

  Tabletop.init( { key: public_spreadsheet_url,
                   callback: renderStories,
                   simpleSheet: false } )
});
