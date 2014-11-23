// Display a specific item in the TO DO task data file
app.get('/task/view/:id', function(req, res){
    // Retrieve task id
    var searchForID = req.params.id;
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
                if (task.ID[0] == searchForID) {
                    // Return a JSON message
                    res.json({
                        'id' : task.ID[0],
                        'title' : task.TITLE[0],
                        'description' : task.DESCRIPTION[0],
                        'status' : task.STATUS[0],
                        'created' : task.CREATED[0],
                        'updated' : task.UPDATED[0]
                    });
                    // Set taskFound as true
                    taskFound = true;
                }
            });
            // If a task is not found, return an erryr
            if (taskFound == false) { res.json({'error':'No task found'}); }
        });
    });
});
