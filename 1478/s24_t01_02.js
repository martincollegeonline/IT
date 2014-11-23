// Delete a specific item in the TO DO task data file
app.get('/task/delete/:id', function(req, res){
    // Delete task id
    var deleteTaskWithID = req.params.id;
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
                if (task.ID[0] == deleteTaskWithID) {
                    // Remove the found task from the array
                    Tasks.splice(index, index);
                    // Set taskFound as true
                    taskFound = true;
                }
            });
            // If a task is not found
            if (taskFound == false) { 
                // Return an error message
                res.json({'error':'No task found'}); 
            } // Otherwise if a task was found and deleted
            else { 
                // Create a new xml builder instance
                var builder = new xml2js.Builder();
                // Build the xml string using the xml object
                var xml = builder.buildObject(result);
                // Write the changes to the tasks.xml file
                fs.writeFile("data/tasks.xml", xml, function(err) {
                    // If an error was returned
                    if(err) {
                        // Return a JSON object containing the error
                        res.json({'error':'Error updating XML'});
                    } // Otherwise if the file was successfully updated, return a the task object 
                    else { res.json({'success':true}); }
                });
            }
        });
    });
});

