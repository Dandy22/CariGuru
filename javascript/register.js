function validateForm() {
    const studentName = document.getElementById("studentName").value;
    const studentEmail = document.getElementById("studentEmail").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const address = document.getElementById("address").value;
    const pass = document.getElementById("pass").value;
    const confpass = document.getElementById("confpass").value;

    if (studentName === "" || studentEmail === "" || phoneNumber === "" || address === "" || pass === "" || confpass === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (pass !== confpass) {
        alert("Passwords do not match.");
        return false;
    }

    return true;
}
