function myFunction() {
    let cupsDrank, response;
    cupsDrank = document.getElementById("cupsDrank").value; 

    if (cupsDrank < 4) {
        response = "You are fine, maybe have another cup."

    }

    else {
        response = "Run to the bathroom NOW!"

    }


    console.log(response);

}
