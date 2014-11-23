// Display all of the items in the TO DO task data file
app.get('/tasks/view', function(req, res){
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
                console.dir(task);
            });
        });
    });
    // Send a simple text message to start with
    res.send('A Full List Of To Do Items');
});