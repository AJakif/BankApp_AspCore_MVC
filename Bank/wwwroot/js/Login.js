var dataTable;

$(document).ready(function () {
    loadDataTable();
});


function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": "/customer/login/GetAll",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "Date", "width": "80%" }


        ],
        "language": {
            "emptyTable": "no data found."
        },
        "width": "100%"
    });
}