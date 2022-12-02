$(function () {
    let container = $('#users-pagination');
    container.pagination({
        dataSource: users,
        pageSize: 10,
        autoHidePrevious: true,
        autoHideNext: true,
        callback: function (data, pagination) {
            var dataHtml = '<ul>';

            $.each(data, function (index, item) {
                dataHtml += '<tr>';
                dataHtml +=     '<td class="titleUsers">' + item.username + '</td>';
                dataHtml +=     '<td>';
                dataHtml +=         '<a href="/admin/user/' + item.id + '/edit" class="btn btn-info btn-xs" title="Edit"><span class="glyphicon glyphicon-edit"></span></a>';
                dataHtml +=         '<button type="button" class="btn btn-danger btn-xs" title="Delete" data-toggle="modal" data-target="#userDialog' + item.id +'"><span class="glyphicon glyphicon-remove"></span>';
                dataHtml +=         '</button>';
                dataHtml +=         '<div class="modal fade" id="userDialog' + item.id +'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
                dataHtml +=             '<div class="modal-dialog">';
                dataHtml +=                 '<div class="modal-content">';
                dataHtml +=                     '<div class="modal-header">';
                dataHtml +=                         '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
                dataHtml +=                         '<h4 class="modal-title" id="myModalLabel">Confirmation needed</h4>';
                dataHtml +=                     '</div>';
                dataHtml +=                     '<div class="modal-body">';
                dataHtml +=                         'Do you really want to delete this link ?';
                dataHtml +=                     '</div>';
                dataHtml +=                     '<div class="modal-footer">';
                dataHtml +=                         '<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>';
                dataHtml +=                         '<a href="/admin/user/' + item.id + '/delete" class="btn btn-danger">Confirm</a>';
                dataHtml +=                     '</div>';
                dataHtml +=                 '</div><!-- /.modal-content -->';
                dataHtml +=             '</div><!-- /.modal-dialog -->';
                dataHtml +=         '</div><!-- /.modal -->';
                dataHtml +=     '</td>';
                dataHtml += '</tr>';
            });

            dataHtml += '</ul>';

            $("#users-container").html(dataHtml);
        }
    })
})