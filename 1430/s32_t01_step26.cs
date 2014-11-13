private void NavigateRecords(){
dRow = ds.Tables[0].Rows[inc];
txtFirstName.Text = dRow.ItemArray.GetValue(1).ToString();txtSurname.Text = dRow.ItemArray.GetValue(2).ToString();txtJobTitle.Text = dRow.ItemArray.GetValue(3).ToString();txtDepartment.Text = dRow.ItemArray.GetValue(4).ToString();
}
