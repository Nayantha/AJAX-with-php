let noOfRowsToShow = 0;
const table = document.querySelector("table");
function onLoad() {
    noOfRowsToShow += 1;
    $.ajax({
        type: "GET",
        url: "get_items.php?id=" + noOfRowsToShow,
        success: function (response){
            // console.log(response);
            let res = jQuery.parseJSON(response);
            if (res.last_item) {
                $("#addAnotherRow").html('End of the line.').prop("disabled", true);
            }
            if (res.status === 422){
                alert(response.message);
            }
            else if (res.status === 404) {
                // noOfRowsToShow -= 1;
            }
            else if (res.status === 200){
                const tableRow = document.createElement("tr");
                for (const key in res.data) {
                    const data = document.createElement("td");
                    data.innerHTML = res.data[key]
                    tableRow.append(data);
                }
                table.append(tableRow);
                // $("#updateUser").load(location.href + " table");
            }
        }
    });
}
onLoad();

$(document).on("click", "#addAnotherRow",onLoad);
