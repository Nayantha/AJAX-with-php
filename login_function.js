$(document).on("submit", "#login-form", function (e){
    e.preventDefault();
    let formData = new FormData(this);
    formData.append("email", "aa@aa.com");
    formData.append("password", "a");
    $.ajax({
        type:"POST",
        url: "./login.php",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            const res = jQuery.parseJSON(response);
            if (res.status === 422){
                // if mandatory field empty
            }
            else if (res.status === 200){
                // on success handler
            }
        }
    });
});