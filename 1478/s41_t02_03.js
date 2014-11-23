    /**
     * Populate the task view page
     */
    var viewTaskItem = function(data) { 
        // Populate the update task title with the task title
        $('#updateTaskTitle').val(data.title);
        // Populate the update task title with the task description
        $('#updateTaskDescription').val(data.description);
        // Populate the update task title with the task status
      $('#updateTaskStatus').val(data.status).selectmenu('refresh');
        // Populate the update task title with the task id
        $('#updateTaskID').val(data.id);
    };
