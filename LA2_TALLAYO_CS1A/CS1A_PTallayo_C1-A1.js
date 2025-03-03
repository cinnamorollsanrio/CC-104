// Student Information
let student = {
    firstName: "Princess",
    middleName: "", // No middle name
    lastName: "Tallayo",
    birthdate: "May 2, 2006",
    birthplace: "Bugbuga, Sta. Cruz, Ilocos Sur, Philippines 2710",
    address: "Sitio Quimmarayan, Candon City, Ilocos Sur, Philippines 2710", // Fixed "adress" to "address"
    courseAndYear: "Bachelor of Science in Computer Science 1A",
    dreamJob: "Software Engineer"
};

let cmate1 = {
    firstName: "Mark Daniel",
    middleName: "Castillo", 
    lastName: "De Guia",
    birthdate: "October 2, 2006",
    birthplace: "San Jose, Candon City, Ilocos Sur, Philippines 2710",
    address: "Bagani Campo, Candon City, Ilocos Sur, Philippines 2710", // Fixed "adress" to "address"
    courseAndYear: "Bachelor of Science in Computer Science 1A",
    dreamJob: "Software Engineer"
};

let cmate2 = {
    firstName: "Haylie",
    middleName: "Gacusan", 
    lastName: "Antolin",
    birthdate: "August 21, 2006",
    birthplace: "San Rafael, San Esteban, Ilocos Sur, Philippines 2710",
    address: "San Rafael, San Esteban, Ilocos Sur, Philippines 2710", // Fixed "adress" to "address"
    courseAndYear: "Bachelor of Science in Computer Science 1A",
    dreamJob: "Software Engineer"
};

function displayInfo(student) {
    let fullName = student.firstName;
    
    if (student.middleName !== "") { // Check if middle name is not empty
        fullName += " " + student.middleName; // Add middle name if it exists
    }
    
    fullName += " " + student.lastName; // Add last name

    let fullNameUpper = fullName.toUpperCase();
    let fullNameLower = fullName.toLowerCase();
    let birthplaceUpper = student.birthplace.toUpperCase();
    let addressUpper = student.address.toUpperCase(); // Fixed "adress" to "address"
    let courseLower = student.courseAndYear.toLowerCase();
    
    let output = "[" + fullNameUpper + "] was born on [" + student.birthdate + "] at [" + birthplaceUpper + "], " +
        "and currently living at [" + addressUpper + "]. [" + fullNameLower + "] is taking up " +
        "[" + courseLower + "] and dreams to be a [" + student.dreamJob + "] after graduation.";
    
    console.log(output);
}

// Display information
displayInfo(student);
displayInfo(cmate1);
displayInfo(cmate2);
