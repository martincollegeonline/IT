// Display all of the items in the TO DO task data file
app.get('/tasks/view', function(req, res){ 
    // An array to contain task objects
    var taskList = [];
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
                // Display the contents of each task
                taskList.push({
                    'id' : task.ID[0],
                    'title' : task.TITLE[0],
                    'description' : task.DESCRIPTION[0],
                    'status' : task.STATUS[0],
                    'created' : task.CREATED[0],
                    'updated' : task.UPDATED[0]
                })
            });
            // Return a JSON message
            res.json(taskList)
        });
    });
});
