/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
<script>
    // Add products to <table>
    function productsAdd() {
        // First check if a <tbody> tag exists, add one if not
        if ($("#productTable tbody").length == 0) {
            $("#productTable").append("<tbody></tbody>");
        }
        
        // Append product to the table
        $("#productTable tbody").append("<tr>" +
            "<td>Extending Bootstrap with CSS, JavaScript and jQuery</td>" +
            "<td>6/11/2015</td>" +
            "<td>http://bit.ly/1SNzc0i</td>" +
            "</tr>");
            
        $("#productTable tbody").append("<tr>" +
            "<td>Build your own Bootstrap Business Application Template in MVC</td>" +
            "<td>1/29/2015</td>" +
            "<td>http://bit.ly/1I8ZqZg</td>" +
            "</tr>");
}
</script>
