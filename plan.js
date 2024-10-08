$(document).ready(function() {
    // Fade-in effect for the form
    $("form").hide().fadeIn(1000);

    // Validate end date is after start date on date change
    $("#start-date, #end-date").on("change", function() {
        const startDate = new Date($("#start-date").val());
        const endDate = new Date($("#end-date").val());

        if (endDate <= startDate) {
            $("#end-date").addClass("error");
            alert("Tanggal kepulangan harus lebih lambat dari tanggal keberangkatan.");
        } else {
            $("#end-date").removeClass("error");
        }
    });

    // Validate date on form submit
    $("form").on("submit", function(event) {
        const startDate = new Date($("#start-date").val());
        const endDate = new Date($("#end-date").val());

        if (endDate <= startDate) {
            event.preventDefault(); // Prevent form submission if dates are invalid
            alert("Tanggal keberangkatan harus lebih awal dari tanggal kepulangan.");
        }
    });

    // Button hover animation
    $(".btn").hover(
        function() {
            $(this).animate({ backgroundColor: "#45a049" }, 200);
        },
        function() {
            $(this).animate({ backgroundColor: "#4CAF50" }, 200);
        }
    );
});
