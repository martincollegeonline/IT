    /**
     * Refesh the To Do items against the webservice
     */
    var refreshToDoTaskList = function (){
        // Show the refreshing task list message
        $('.msg-refreshing-list').show();
        // Attempt to retrieve the webservice json list containing the To Do items
        $.get(webserviceURL + "tasks/view", function(data) { 
            // Retrieve the complete list
            var completedList = $("#completeTaskList");
            // Retrieve the pending list
            var pendingList = $("#pendingTaskList");
            // Clear the items in the current list
            $('.task-item').remove();
            // Refresh the completed task items list
            $(completedList).listview('refresh');
            // Refresh the pending task items list
            $(pendingList).listview('refresh');
            // Loop through each of the items
            $.each(data,function(i,task){
                // Task DOM variable
                var taskDOM = $('<li class="task-item"><a href="#view">'+task.title+'</a></li>');
                // If the task is marked as pending
                if (task.status == 'PENDING') {
                    // Append the task DOM to the pending list
                    $(pendingList).append(taskDOM);
                } // Otherwise if the task is marked as complete 
                else { 
                    // Append the task DOM to the completed list
                    $(completedList).append(taskDOM); 
                }
                // Assign the view logic to the task item link
                $(taskDOM).find('a').click(function(){
                    // Execute the function and pass the task object
                    viewTaskItem(task);
                });
            });
            // jQuery Mobile requires us to refresh list views
            // If this is not done, it will appear native and un styled.
            // Refresh the completed task items list
            $(completedList).listview('refresh');
            // Refresh the pending task items list
            $(pendingList).listview('refresh');
            // Hide the refreshing task list message
            $('.msg-refreshing-list').hide();
        }, 'json');
    };
