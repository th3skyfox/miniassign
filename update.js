    function addRow()
    {   
        var rank = 0;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var table = document.getElementById("myTableData");
        var row_number = table.rows.length;
        if(row_number<=1)
            {
                rank=1;
            }
        else
        {
            rank = parseInt(table.rows[row_number-1].cells[0].innerHTML) + 1;
        }
        // Adding Rows for new values
        var row=table.insertRow(-1);
        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        var cell3=row.insertCell(2);        
        cell1.innerHTML=rank;
        cell2.innerHTML=name;        
        cell3.innerHTML=email; 


        //For Alerting on cell Click
        var data = document.getElementById("myTableData");
        if (data != null) {
            for (var i = 0; i < data.rows.length; i++) {
                for (var j = 0; j < data.rows[i].cells.length; j++)
                    data.rows[i].cells[j].onclick = function(){ getval(this); };
            }
        }

        //alert
    function getval(tableCell){
        alert(tableCell.innerHTML);
    } 

    }

    //Show Form 
    function show()
    {
        var x = document.getElementById("userForm");
        var y = document.getElementById("button_user");
        x.style.display = "block";
        y.style.display = "none";
    }
