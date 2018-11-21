(function(){
  $(document).ready(function() {
    $('.table').DataTable({
      'ordering': true,
      'searching': false,
      'paging': false,
      'columnDefs': [
        {
          'targets': 0,
          'seachable': false,
          'visible': true
        }
      ],
      'order': [[2, 'desc']]
  
    });
 });
}());
