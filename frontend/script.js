document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;

    // Send the data to the back-end for processing
    fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, mobile }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Data submitted successfully!");
            document.getElementById("dataForm").reset();
        } else {
            alert("Error submitting data. Please try again later.");
        }
    });
});
