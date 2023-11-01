function addTask() {
    var taskName = document.getElementById("taskname").value;
    var startDate = document.getElementById("startdate").value;
    var endDate = document.getElementById("enddate").value;

    if (taskName && startDate && endDate) {
      var table = document.getElementById("taskList");
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = taskName;
      cell2.innerHTML = startDate;
      cell3.innerHTML = endDate;

      // Clear the input fields
      document.getElementById("taskname").value = "";
      document.getElementById("startdate").value = "";
      document.getElementById("enddate").value = "";
    }
  }