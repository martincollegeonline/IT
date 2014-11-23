// Create a new task item in the TO DO task data file
app.post('/task/new', function(req, res) {
    // Create a new date object
    var date = new Date();
    // Store the data for the new task
    var taskData = {
        'ID' : false, // Leave the ID blank for now, will populate once we read the XML data source
        'TITLE' : req.body.title,
        'DESCRIPTION' : req.body.description,
        'STATUS' :req.body.status,
        'CREATED' : date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
        'UPDATED' : date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
    };
    // Read the tasks.xml file from the data folder
    fs.readFile('data/tasks.xml', function(err, data) {
        // Create a new XML parser object
        var parser = new xml2js.Parser();
        // Use the parser to parse the contents
        parser.parseString(data, function (err, result) {
            // Retrieve the last given id
            var lastID = parseFloat(result.DATA.CONFIG[0].ID);
            // Calculate the new ID
            var newID = lastID+1;
            // Issue the new id to the task object
            taskData.ID = newID;
            // Populate the new ID inside of the config data
            result.DATA.CONFIG[0].ID = newID;
            // Push the new task data into the task list
            result.DATA.TASKS[0].TASK.push(taskData);
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
                else { res.json({'task':taskData}); }
            }); 
        });
    });
});
