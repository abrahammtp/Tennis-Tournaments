// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-status").on("click", function (event) {
        var id = $(this).data("id");
        var newStatus = $(this).data("newstatus");

        var newAttendanceState = {
            visited: newStatus
        };

        // Send the PUT request.
        $.ajax("/api/tournaments/" + id, {
            type: "PUT",
            data: newAttendanceState
        }).then(
            function () {
                console.log("changed attendance to", newStatus);
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
            // sleepy: $("[name=sleepy]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/tournament", {
            type: "POST",
            data: newTourney
        }).then(
            function () {
                console.log("created new tournament");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});