students.RemoveRange(0, 2);
listBox1.Items.Add("=================");
foreach (string child in students){
    listBox1.Items.Add(child);
}