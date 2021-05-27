$(document).ready(function() {
    $('#example').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'csv',
        {
            extend: 'excel',
            text: 'PLANILHA'
        },
        'pdf',
        {
            extend: 'print',
            text: 'IMPRIMIR',
        },
        {
            extend: 'copy',
            text: 'COPIAR'
        }
        ],
        select: true
    } );
} );