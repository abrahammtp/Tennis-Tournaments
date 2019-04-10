$(function () {
    // When we click on change-status (each tournament), we are going to send the PUT request
    $(".change-status").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var attended = $(this).data("attended");
        console.log("Changed status", attended)
        if (attended == true) {
            attended == false
        } else {
            attended == true
        }

        var newAttendanceState = {
            attendance: attended
        };
        console.log(newAttendanceState);
        // Send the PUT request
        $.ajax("/api/tourneys/" + id, {
            type: "PUT",
            data: newAttendanceState
        }).then(
            function() {
                console.log("Changed attendance to" + newAttendanceState);
                // Reload the page to get the updated list without having to refresh the browser
                location.reload();
            }
        );
    });
    // When we click on the submit button, a new tournament is going to be added to the list sending the POST request
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newTourney = {
            name: $("#tournament").val().trim(),
            attendance: $("[name=attended]:checked").val().trim()
        };

        // Send the POST request
        $.ajax("/api/tourneys", {
            type: "POST",
            data: newTourney
        }).then(
            function (data) {
                console.log("created new tournament" + data);
                // Reload the page to get the updated list without having to refresh the browser
                location.reload();
            }
        );
    });
});