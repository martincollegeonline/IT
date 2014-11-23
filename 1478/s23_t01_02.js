// Update an existing task item in the TO DO task data file
app.post('/task/update/:id', function(req, res) {
    // Retrieve task id
    var updateTaskWithID = req.params.id;
    // A boolean to flag if a task was found or not
    var taskFound = false;
    // Read the tasks.xml file from the data folder
    fs.readFile('data/tasks.xml', function(err, data) {
        // Create a new XML parser object
        var parser = new xml2js.Parser();
        // Use the parser to parse the contents
        parser.parseString(data, function (err, result) {
            // Retrieve the TASK objects
            var Tasks = result.DATA.TASKS[0].TASK;
            // Loop through each task from the task array
            Tasks.forEach(function(task, index, array){
                // If the task id matches the search for id
                if (task.ID[0] == updateTaskWithID) {
                    // Display the task object
                    console.dir(task);
                    // Set taskFound as true
                    taskFound = true;
                }
            });
            // If a task is not found, return an erryr
            if (taskFound == false) { res.json({'error':'No task found'}); }
        });
    });
    // Send a simple text message to start with
    res.send('Update a single task item');
});
