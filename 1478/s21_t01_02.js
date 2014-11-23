// Display all of the items in the TO DO task data file
app.get('/tasks/view', function(req, res){
    // Send a simple text message to start with
    res.send('A Full List Of To Do Items');
});