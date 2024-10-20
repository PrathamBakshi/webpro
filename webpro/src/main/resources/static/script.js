const token = "90934483|-31949222857420526|90962765"; // Your token
const baseURL = "http://api.login2explore.com:5577"; // Base URL for API requests
let currentRollNo = ""; // Variable to track the current Roll No

function resetForm() {
    document.getElementById("enrollmentForm").reset();
    document.getElementById("fullName").disabled = true;
    document.getElementById("class").disabled = true;
    document.getElementById("birthDate").disabled = true;
    document.getElementById("address").disabled = true;
    document.getElementById("enrollmentDate").disabled = true;
    document.getElementById("saveBtn").disabled = true;
    document.getElementById("updateBtn").disabled = true;
    document.getElementById("resetBtn").disabled = true;
    document.getElementById("rollNo").focus();
    currentRollNo = ""; // Reset the current Roll No
}

function checkRollNo() {
    const rollNo = document.getElementById("rollNo").value;
    currentRollNo = rollNo; // Set the current Roll No

    // Enable the next fields after entering roll number
    document.getElementById("fullName").disabled = false;
    document.getElementById("class").disabled = false;
    document.getElementById("birthDate").disabled = false;
    document.getElementById("address").disabled = false;
    document.getElementById("enrollmentDate").disabled = false;

    // Enable the Save and Reset buttons
    document.getElementById("saveBtn").disabled = false;
    document.getElementById("resetBtn").disabled = false;

    // Move the cursor to the Full Name field
    document.getElementById("fullName").focus();
}

function saveStudent() {
    const rollNo = document.getElementById("rollNo").value;
    const fullName = document.getElementById("fullName").value;
    const studentClass = document.getElementById("class").value;
    const birthDate = document.getElementById("birthDate").value;
    const address = document.getElementById("address").value;
    const enrollmentDate = document.getElementById("enrollmentDate").value;

    const jsonStr = {
        rollNo: rollNo,
        fullName: fullName,
        studentClass: studentClass,
        birthDate: birthDate,
        address: address,
        enrollmentDate: enrollmentDate
    };

    const requestPayload = {
        token: token,
        cmd: "PUT", // Use PUT to create a new entry
        dbName: "SCHOOL-DB", // Change according to your database name
        rel: "STUDENT-TABLE", // Change according to your relation name
        jsonStr: jsonStr
    };

    $.ajax({
        url: baseURL + "/api/iml",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(requestPayload),
        success: function (response) {
            alert("Student data saved successfully!");
            resetForm(); // Reset the form after successful save
        },
        error: function (error) {
            console.error("Error saving data:", error);
            alert("Failed to save student data!");
        }
    });
}

function updateStudent() {
    const rollNo = document.getElementById("rollNo").value;
    const fullName = document.getElementById("fullName").value;
    const studentClass = document.getElementById("class").value;
    const birthDate = document.getElementById("birthDate").value;
    const address = document.getElementById("address").value;
    const enrollmentDate = document.getElementById("enrollmentDate").value;

    const jsonStr = {
        "1": { "name": fullName },
        "2": { "class": studentClass },
        "3": { "birthDate": birthDate },
        "4": { "address": address },
        "5": { "enrollmentDate": enrollmentDate }
    };

    const requestPayload = {
        token: token,
        cmd: "UPDATE", // Use UPDATE to modify existing entry
        dbName: "SCHOOL-DB", // Change according to your database name
        rel: "STUDENT-TABLE", // Change according to your relation name
        jsonStr: jsonStr
    };

    $.ajax({
        url: baseURL + "/api/iml",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(requestPayload),
        success: function (response) {
            alert("Student data updated successfully!");
            resetForm(); // Reset the form after successful update
        },
        error: function (error) {
            console.error("Error updating data:", error);
            alert("Failed to update student data!");
        }
    });
}

// Enable the update function if needed
document.getElementById("updateBtn").addEventListener("click", updateStudent);
