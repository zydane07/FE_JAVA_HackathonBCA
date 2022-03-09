$(document).ready(function () {
    var table = $("#dataTable").DataTable({
        buttons: ["copy", "csv", "print", "excel", "pdf"],
        dom: "<'row'<'col-md-3'l><'col-md-5 text-center'B><'col-md-4'f>>" + "<'row'<'col-md-12'tr>>" + "<'row'<'col-md-5'i><'col-md-7'p>>",
    });

    table.buttons().container().appendTo("#dataTable_wrapper .col-md-5:eq(0)");
});
