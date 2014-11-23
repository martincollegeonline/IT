    // Assign functionality to refresh button
    $('.refresh-list').click(function(){ 
        // Refresh the task items
        refreshToDoTaskList(); 
        // Return false to stop any further click action
        return false; 
    });
    // Refresh to do task list from web service
    refreshToDoTaskList();
