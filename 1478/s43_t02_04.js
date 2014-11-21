    // Assign submit functionality to create task form
    $('#customiseApp').submit(function(){
        // Execute the create task function
        updateAppSettings();
        // Return false to stop any further form action
        return false;
    });
    // Refresh app settings based on stored settings
    refreshAppSettings();
