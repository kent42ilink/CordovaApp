function getJson() {

    var queryString = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=55ec6d6e-dc5c-4268-a725-d04cc262172b"

    $.getJSON(queryString, function (Data) {
        showData(Data);

    }).fail(function (jqXHR) {
        $('#error-msg').show();
        $('#error-msg').text("Error retrieving data. " + jqXHR.statusText);
    });

    return false;
}

function showData(Data) {

    if (Data.length != 0 && Data.result.length != 0) {

        $('#error-msg').hide();
        $('#deviceready').show();

        var tbl = $("#tableData tbody");

        $.each(Data.result.results, function (i, item) {

            tbl.append("<tr><td>" + item._id + "</td><td>"
                + item.Station + "</td><td>" + item.Destination
                + "</td><td>" + item.UpdateTime + "</td></tr>")
                .parents("table")
                .table("refresh");

        });

     
    } else {
        $('#deviceready').hide();
        $('#error-msg').show();
        $('#error-msg').text("Error retrieving data. ");
    }
}