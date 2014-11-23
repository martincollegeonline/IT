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
    // Display the new task data
    console.dir(taskData);
    // Send a simple text message to start with
    res.send('Create a single new task item');
});
