         // Initial value to store the total when incremented
document.getElementById('total').textContent = 'Total Points = 0';
document.getElementById('totalHours').textContent = 'Total Hours = 0';

document.getElementById('sub').onclick = function() {
    var name = document.getElementById('name').value;
    // document.getElementById('value').textContent = name;

    var hours = document.getElementById('hours').value;
    var grade = document.getElementById('grade').value;

    var points = Number(hours) * Number(grade);

    // Points
    // var p = document.getElementById('Points').textContent = 'Points = ' + points;
    var Tp = document.getElementById('total').textContent = 'Total Points = ' + (Number(document.getElementById('total').textContent.split('=')[1].trim()) + points);
    
    // Hours
    // document.getElementById('Hou').textContent = 'Hours = ' + hours;
    var Th = document.getElementById('totalHours').textContent = 'Total Hours = ' + (Number(document.getElementById('totalHours').textContent.split('=')[1].trim()) + Number(hours));

    var GPA = Number(Tp.split('=')[1].trim()) / Number(Th.split('=')[1].trim());
    document.getElementById('GPA').textContent = 'المعدل الفصلي = ' + GPA.toFixed(2);


    
    // Add subject to the table
    var table = document.querySelector('.Table');
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = name;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = hours;
    var cell3 = row.insertCell(2);
    //to select the text that is in the option
    var gr = document.getElementById('grade');
    var textOption = gr.options[gr.selectedIndex].text;
    cell3.innerHTML=textOption;
}