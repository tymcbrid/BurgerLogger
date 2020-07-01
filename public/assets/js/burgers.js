$(function (){
    $("#submitNew").on("click", function(){
        event.preventDefault();
        var burger_name = $("#newBurger").val().trim();
        console.log(burger_name);
        var newBurger = {
            burger_name: burger_name,
        }
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("ordered burger");
                location.reload();
            }
        );
    });
    $(".change-devoured").on("click", function(){
        event.preventDefault();
        var id = $(this).data("id");
        // var devoured = $(this).data("newdevoured");
        // console.log(id);
        // console.log(devoured);
        // if (devoured == false){
        //     devoured = 0;
        // }
        // else {
        //     devoured = 1;
        // }
        // console.log(devoured);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
        }).then(
            function () {
                console.log("consumed burger ID", id);
                location.reload();
            }
        );
        // $.ajax("/api/burgers", {
        //     type: "POST",
        //     data: newBurger
        // }).then(
        //     function () {
        //         console.log("ordered burger");
        //         location.reload();
        //     }
        // );
    });
});
