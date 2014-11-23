var deleteTask = function() {
        // Show the updating task message
        $('.msg-deleting-task').show();
        // Post updated data to the webservice update API endpoint
        // Add the postData variable to the $.post function
        $.get(webserviceURL + "task/delete/" + $('#updateTaskID').val(), function(data){
            // Hide the updating task message
            $('.msg-deleting-task').hide();
            // Force a refresh against the web service
            refreshToDoTaskList();
            // Force home page to show
            $.mobile.navigate("#home");
        }, 'json'); 
    }
    
    // Assign functionality to refresh button
    $('.delete-task').click(function(){ 
        // Refresh the task items
        deleteTask(); 
        // Return false to stop any further click action
        return false; 
    });
