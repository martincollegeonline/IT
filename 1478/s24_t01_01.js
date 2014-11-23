// Delete a specific item in the TO DO task data file
app.get('/task/delete/:id', function(req, res){
    // Send a simple text message to start with
    res.send('Delete a Single Task with ID '+req.params.id);
});