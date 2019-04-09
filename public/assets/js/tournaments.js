// Make sure we wait to attach our handlers until the DOM is fully loaded.
console.log("Banana")
$(function () {
    $(".change-status").on("click", function (event) {
        var id = $(this).data("id");
        var attended = $(this).data("attended");
        console.log("Changed status", attended)
        var newAttendanceState = {
            attended: true
        };
        console.log(newAttendanceState);
        // Send the PUT request.
        $.ajax("/api/tourneys/" + id, {
            type: "PUT",
            data: newAttendanceState
        }).then(
            function() {
                console.log("Changed attendance to" + newAttendanceState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newTourney = {
            name: $("#tournament").val().trim(),
            attendance: $(".form-group").val(),
        };

        // Send the POST request.
        $.ajax("/api/tourneys", {
            type: "POST",
            data: newTourney
        }).then(
            function (data) {
                console.log("created new tournament" + data);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});