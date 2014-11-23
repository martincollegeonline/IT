   /**
     * Post update values to web service
     */
    var updateExistingTask = function() {
        // Show the updating task message
        $('.msg-updating-task').show();
        // Store the data to be posted to the web service
        var postData = { 
            title: $('#updateTaskTitle').val(), 
            description: $('#updateTaskDescription').val(),
            status: $('#updateTaskStatus').val()
        };
        // Post updated data to the webservice update API endpoint
        // Add the postData variable to the $.post function
        $.post(webserviceURL + "task/update/" + $('#updateTaskID').val(), postData, function(data){
            // Hide the updating task message
            $('.msg-updating-task').hide();
            // Force a refresh against the web service
            refreshToDoTaskList();
            // Force home page to show
            $.mobile.navigate("#home");
        }, 'json');  
    };
    
    // Assign submit functionality to update form
    $('#updateTask').submit(function(){
        // Execute the update task function
        updateExistingTask();
        // Return false to stop any further form action
        return false;
    });
