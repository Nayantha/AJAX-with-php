let noOfRowsToShow = 0;
const table = document.querySelector("table");
function onLoad() {
    noOfRowsToShow += 1;
    $.ajax({
        type: "GET",
        url: "get_items.php?id=" + noOfRowsToShow,
        success: function (response) {
            console.log(response);
            let res = jQuery.parseJSON(response);
            console.log(res);
            if (res.status === 422){
                alert(response.message);
            }
            if (res.status === 404) {
                noOfRowsToShow -= 1;
                $("#addAnotherRow").disabled = true;
            }
            else if (res.status === 200){
                const tableRow = document.createElement("tr");
                const email = document.createElement("td");
                const password = document.createElement("td");
                const otp = document.createElement("td");
                email.innerText = `${res.data.email}`;
                password.innerText = `${res.data.password}`;
                otp.innerText = `${res.data.otp}`;
                tableRow.append(email);
                tableRow.append(password);
                tableRow.append(otp);
                table.append(tableRow);
                $("#updateUser").load(location.href + " table");
            }
        }
    });
}
onLoad();

$(document).on("click", "#addAnotherRow",onLoad);
