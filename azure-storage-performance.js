function displayPerformance() {

    GiB = document.getElementById("id_GiB").value;

    IOPS = 3000 + 1 * GiB;
    IOPS_Burst = Math.min(Math.max(10000, 3 * GiB), 100000);
    Throughput = 100 + Math.ceil(0.04 * GiB) + Math.ceil(0.06 * GiB);

    if (GiB >= 100) {

        var newTable = "<table border='1'>";
        
        newTable += "<tr>";
        newTable += "<td>GiB</td>";
        newTable += "<td class='alnright'>" + GiB + "</td>";
        newTable += "</tr>";

        newTable += "<tr>";
        newTable += "<td>Max. IOPS</td>";
        newTable += "<td class='alnright'>" + IOPS + "</td>";
        newTable += "</tr>";
        
        newTable += "<tr>";
        newTable += "<td>Max. IOPS Burst</td>";
        newTable += "<td class='alnright'>" + IOPS_Burst + "</td>";
        newTable += "</tr>";

        newTable += "<tr>";
        newTable += "<td>Max. Throughput</td>";
        newTable += "<td class='alnright'>" + Throughput + "</td>";
        newTable += "</tr>";

        newTable += "</table>";

        document.getElementById("idCalculation").innerHTML = newTable;
    }
    else {
        document.getElementById("idCalculation").innerHTML = "<br>Miminum File Share Size is 100 GiB"
    }
    
}