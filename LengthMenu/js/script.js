$(document).ready(function() {
    $('#example').DataTable({
        lengthMenu: [
            [10, 25, 50, 100],
            ['10 Lines', '25 Lines', '50 Lines', '100 Lines']
        ]
    });
} );