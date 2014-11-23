    /**
     * Post new task values to web service
     */
    var createNewTask = function() {
        // Show the creating task message
        $('.msg-creating-task').show();
        // Store the data to be posted to the web service
        var postData = { 
            title: $('#createTaskTitle').val(), 
            description: $('#createTaskDescription').val(),
            status: $('#createTaskStatus').val()
        };
        // Post new data to the webservice create API endpoint
        // Add the postData variable to the $.post function
        $.post(webserviceURL + "task/new", postData, function(data){
            // Hide the creating task message
            $('.msg-creating-task').hide();
            // Refresh the form values
            $('#createTaskTitle').val('');
            $('#createTaskDescription').val('');
            $('#createTaskStatus').val('PENDING').selectmenu('refresh');
            // Force a refresh against the web service
            refreshToDoTaskList();
            // Force home page to show
            $.mobile.navigate("#home");
        }, 'json'); 
    };
    
    // Assign submit functionality to create task form
    $('#createTask').submit(function(){
        // Execute the create task function
        createNewTask();
        // Return false to stop any further form action
        return false;
    });
