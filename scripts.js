$(document).ready(function() {
    $('#taskForm').on('submit', function(event) {
        event.preventDefault();
        const taskText = $('#taskInput').val();
        $('#taskList').append('<li>' + taskText + '</li>');
        $('#taskInput').val('');

        $('#taskList').on('click', 'li', function() {
            $(this).toggleClass('completed');
        });
    });
});