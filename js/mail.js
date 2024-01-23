// Функия для формы отправки письма
// Данные собранные из формы будут перенаправленны в mail.php
function clickForm() {
    console.log(1);
    // Collect data from the form
    var user_name    = $('#user_name').val();
    var user_email   = $('#user_email').val();
    var text_comment = $('#text_comment').val();
    // Send collected data
    $.ajax({
        url: "/mail.php", // address for sent data
        type: "post", // send method
        dataType: "json", // type of data transfer
        data: { // What we send
            "user_name":    user_name,
            "user_email":   user_email,
            "text_comment": text_comment
        },
        // When server replied
        success: function(data){
            $('.messages').html(data.result); // Show server's answer
        }
    })
}
