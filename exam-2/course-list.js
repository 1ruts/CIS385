/*
Student ID: 24219703
Name: Albin Garcia
*/

var course_listings_math = [

    { course: "MAT 008 ", name: "Basic Mathmetics", cred: "4 HRS" },
    { course: "MAT 012", name: "Basic Arithmetic and Algebra", cred: "6 HRS" },
    { course: "MAT 014", name: "Mathematics Literacy with Computational Support", cred: "6 HRS" },
    { course: "MAT 041", name: "Mathematics Literacy Quantway I", cred: "4 HRS" },
    { course: "MAT 051", name: "Elementary Algebra", cred: "4 HRS" },
    { course: "MAT 056", name: "Intermediate Algebra and Trigonometry", cred: "6 HRS" },
    { course: "MAT 056.5", name: "Elementary and Intermediate Algebra with Trigonometry", cred: "7 HRS" },
    { course: "MAT 100", name: "Fundamentals of Mathematics I", cred: "4 CRS, 4 HRS" },
    { course: "MAT 104", name: "Mathematics for Health Sciences", cred: "3 CRS, 3 HRS" },
    { course: "MAT 104.5", name: "Mathematics for Health Sciences with Elementary Algebra", cred: "3 CRS, 5 HRS" },
    { course: "MAT 109", name: "Mathematics for Respiratory Therapy", cred: "3 CRS, 3 HRS" },
    { course: "MAT 110", name: "Fundamentals of Mathematics I", cred: "3 CRS, 3 HRS" },
    { course: "MAT 110.5", name: "Fundamentals of Mathematics I with Algebra", cred: "3 CRS, 5 HRS" },
    { course: "MAT 111", name: "Explorations in Scientific Mathematical Research (Same as SCI 111)", cred: "3 CRS, 4 HRS" },
    { course: "MAT 125", name: "Modern Applied Mathematics", cred: "4 CRS, 4 HRS" },
    { course: "MAT 150", name: "Introduction to Statistics (same as MAT 150.5)", cred: "4 CRS, 4 HRS" },
    { course: "MAT 150.5", name: "Introduction to Statistics with Algebra (same as MAT 150)", cred: "4 CRS, 6 HRS" },
    { course: "MAT 156", name: "College Algebra", cred: "3 CRS, 3 HRS" },
    { course: "MAT 156.5", name: "Elementary and College Algebra", cred: "3 CRS, 5 HRS" },
    { course: "MAT 157", name: "College Algebra with Trigonometry", cred: "4 CRS, 4 HRS" },
    { course: "MAT 157.5", name: "Elementary and College Algebra with Trigonometry", cred: "4 CRS, 6 HRS" },
    { course: "MAT 160", name: "Quantitative Reasoning", cred: "4 CRS, 4 HRS" },
    { course: "MAT 161", name: "Topics in Quantitative Reasoning", cred: "3 CRS, 3 HRS" },
    { course: "MAT 161.5", name: "Mathematics Literacy and Quantitative Reasoning", cred: "3 CRS, 6 HRS" },
    { course: "MAT 200", name: "Introduction to Discrete Mathematics", cred: "4 CRS, 4 HRS" },
    { course: "MAT 202", name: "Fundamentals of Mathematics II", cred: "3 CRS, 3 HRS" },
    { course: "MAT 206", name: "Precalculus", cred: "4 CRS, 4 HRS" },
    { course: "MAT 206.5", name: "Intermediate Algebra and Precalculus (Same as MAT 206)", cred: "4 CRS, 8 HRS" },
    { course: "MAT 208", name: "Mathematical Problem Solving", cred: "2 CRS, 2 HRS" },
    { course: "MAT 209", name: "Statistics", cred: "4 CRS, 4 HRS" },
    { course: "MAT 214", name: "Mathematics for Elementary Education I", cred: "4 CRS, 4 HRS" },
    { course: "MAT 214.5", name: "Mathematics for Elementary Education with Algebra", cred: "4 CRS, 8 HRS" },
    { course: "MAT 216", name: "Mathematics for Elementary Education II", cred: "4 CRS, 4 HRS" },
    { course: "MAT 300", name: "Introduction to Geometry", cred: "4 CRS, 4 HRS" },
    { course: "MAT 301", name: "Analytic Geometry and Calculus I", cred: "4 CRS, 6 HRS" },
    { course: "MAT 302", name: "Analytic Geometry and Calculus II", cred: "4 CRS, 6 HRS" },
    { course: "MAT 303", name: "Analytic Geometry and Calculus III", cred: "4 CRS, 6 HRS" },
    { course: "MAT 310", name: "Bridge to Advanced Mathematics", cred: "3 CRS, 3 HRS" },
    { course: "MAT 315", name: "Linear Algebra", cred: "3 CRS, 3 HRS" },
    { course: "MAT 320", name: "Abstract Algebra", cred: "3 CRS, 3 HRS" },
    { course: "MAT 402", name: "Finite Mathematics", cred: "4 CRS, 4 HRS" },
    { course: "MAT 409", name: "Probability and Statistics for Data Science", cred: "4 CRS, 3 HRS, 2 LAB HRS" },
    { course: "MAT 415", name: "Linear Algebra for Data Science", cred: "3 CRS, 3 HRS, 2 LAB HRS" },
    { course: "MAT 420", name: "An Introduction to Machine Learning", cred: "3 CRS, 3 HRS, 1 LAB HRS" },
    { course: "MAT 470", name: "Mathematical Foundations of Computer Networking (Same as CSC 470)", cred: "4 CRS, 3 HRS, 2 LAB HRS" },
    { course: "MAT 501", name: "Ordinary Differential Equations", cred: "3 CRS, 3 HRS" },
    { course: "MAT 505", name: "History of Mathematics", cred: "3 CRS, 3 HRS" },
    { course: "MAT 601", name: "Advanced Calculus I", cred: "4 CRS, 4 HRS" },
];

var course_listings_science = [
    // Astronomy
    { course: "AST 106", name: "Astronomy: Models", cred: "3 CRS.3 HRS" },
    { course: "AST 108", name: "Astronomy: General Theory", cred: "3 CRS.3 HRS" },
    { course: "AST 109", name: "Astronomy: General Observations", cred: "3 CRS.1 HRS.2 LAB HRS" },
    { course: "AST 110", name: "General Astronomy", cred: "4 CRS.3 HRS.2 LAB HRS" },
    { course: "AST 111", name: "Astronomy: Observations and Models Biology", cred: "4 CRS.2 HRS.3 LAB HRS" },
    // Biology
    { course: "BIO 108", name: "General Biology Theory ", cred: "3 CRS, 3 HRS" },
    { course: "BIO 109", name: "General Biology", cred: "3 CRS, 1 HRS, 2 LAB HRS" },
    { course: "BIO 110", name: "General Biology", cred: "4 CRS, 5 HRS, 2 LAB HRS" },
    { course: "BIO 111", name: "Human Biology", cred: "4 CRS, 3 HRS, 2 LAB HRS" },
    { course: "BIO 210", name: "Biology I", cred: "4 CRS, 6 HRS, 3 LAB HRS" },
    { course: "BIO 220", name: "Biology II", cred: "4 CRS, 3 HRS, 3 LAB HRS" },
    { course: "BIO 230", name: "Fundamentals of Microbiology", cred: "4 CRS, 6 HRS, 3 LAB HRS" },
    { course: "BIO 240", name: "Genetics", cred: "4 CRS, 6 HRS, 3 LAB HRS" },
    { course: "BIO 260", name: "Cell Biology", cred: "4 CRS, 6 HRS, 3 LAB HRS" },
    { course: "BIO 270", name: "Plant Biology", cred: "4 CRS, 6 HRS" },
    { course: "BIO 420", name: "Microbiology ", cred: "4 CRS, 6 HRS, 3 LAB HRS" },
    { course: "BIO 425", name: "Anatomy and Physiology I", cred: "4 CRS, 6 HRS, 3 LAB HRS" },
    { course: "BIO 426", name: "Anatomy and Physiology II", cred: "4 CRS, 6 HRS, 3 LAB HRS" },
    // Biotechnology
    { course: "BTE 201", name: "Introduction to Biotechnology", cred: "5 CRS.4 HRS.3 LAB HRS" },
    // Chemistry
    { course: "CHE 108", name: "Concepts in Chemistry", cred: "3 CRS, 3 HRS" },
    { course: "CHE 109", name: "Concepts in Chemistry Laboratory", cred: "3 CRS, 1 HRS, 2 LAB HRS" },
    { course: "CHE 110", name: "General Chemistry", cred: "4 CRS, 3 HRS, 2 LAB HRS" },
    { course: "CHE 118", name: "Fundamentals of Chemistry", cred: "4 CRS, 3 HRS, 2 LAB HRS" },
    { course: "CHE 120", name: "Fundamentals of Organic Chemistry", cred: "4 CRS, 3 HRS, 3 LAB HRS" },
    { course: "CHE 121", name: "Fundamentals of General, Organic & Biological Chemistry I", cred: "4 CRS, 3 HRS, 3 LAB HRS" },
    { course: "CHE 122", name: "Fundamentals of General, Organic & Biological Chemistry II", cred: "4 CRS, 3 HRS, 3 LAB HRS" },
    { course: "CHE 125", name: "Fundamentals of Biochemistry", cred: "4 CRS, 3 HRS, 3 LAB HRS" },
    { course: "CHE 201", name: "College Chemistry I", cred: "4 CRS, 4 HRS, 3 LAB HRS" },
    { course: "CHE 202", name: "College Chemistry II", cred: "4 CRS, 4 HRS, 3 LAB HRS" },
    { course: "CHE 205", name: "Quantitative Analysis", cred: "4 CRS, 3 HRS, 4 LAB HRS" },
    { course: "CHE 230", name: "Organic Chemistry I", cred: "5 CRS, 3 HRS, 4 LAB HRS" },
    { course: "CHE 240", name: "Organic Chemistry II", cred: "5 CRS, 3 HRS, 4 LAB HRS" },
    // Engineering Science
    { course: "ESC 111", name: "Elements of Engineering Design", cred: "1 CRS, 3 LAB HRS" },
    { course: "ESC 113", name: "Computer Aided Analysis for Engineering", cred: "2 CRS, 1 HRS, 2 LAB HRS" },
    { course: "ESC 130", name: "Engineering Graphics", cred: "2 CRS, 1 HRS, 3 LAB HRS" },
    { course: "ESC 131", name: "Engineering Graphics - AutoCAD", cred: "2 CRS, 4 HRS" },
    { course: "ESC 200", name: "Engineering Mechanics", cred: "4 CRS, 4 HRS" },
    { course: "ESC 201", name: "Engineering Mechanics I", cred: "3 CRS, 2 HRS, 3 LAB HRS" },
    { course: "ESC 202", name: "Engineering Mechanics II", cred: "3 CRS, 2 HRS, 3 LAB HRS" },
    { course: "ESC 211", name: "Thermodynamics I", cred: "3 CRS, 4 HRS" },
    { course: "ESC 221", name: "Circuits and Systems I", cred: "4 CRS, 6 HRS" },
    { course: "ESC 223", name: "Switching Systems and Logic Design", cred: "3 CRS, 2 HRS, 5 LAB HRS" },
    // Environmental Science
    { course: "ENV 250", name: "Environmental Science", cred: "4 CRS, 3 HRS, 3 LAB HRS" },
    // Geology
    { course: "GLY 210", name: "Geology I", cred: "4 CRS, 3 HRS, 3 LAB HRS" },
    // Physics
    { course: "PHY 108", name: "General Physics Theory", cred: "3 CRS, 3 HRS" },
    { course: "PHY 109", name: "General Physics Experiments", cred: "3 CRS, 1 HRS, 2 LAB HRS" },
    { course: "PHY 110", name: "General Physics", cred: "4 CRS, 3 HRS, 2 LAB HRS" },
    { course: "PHY 210", name: "Physics I", cred: "4 CRS, 4 HRS, 2 LAB HRS" },
    { course: "PHY 215", name: "University Physics I", cred: "4 CRS, 4 HRS, 2 LAB HRS" },
    { course: "PHY 220", name: "Physics II", cred: "4 CRS, 4 HRS, 2 LAB HRS" },
    { course: "PHY 225", name: "University Physics II", cred: "4 CRS, 4 HRS, 2 LAB HRS" },
    { course: "PHY 240", name: "Modern Physics", cred: "3 CRS, 4 HRS" },
    { course: "PHY 400", name: "The Physics of Music", cred: "4 CRS, 3 HRS, 2 LAB HRS" },
    // Science
    { course: "SCI 111", name: "Explorations In Scientific Mathematical (Same as MAT 111)", cred: "3 CRS, 4 HRS" },
    { course: "SCI 120", name: "Computer Methods in Science", cred: "4 CRS, 3 HRS, 2 LAB HRS" },
    { course: "SCI 121", name: "Computer Methods in Science (Pascal)", cred: "4 CRS, 3 HRS, 2 LAB HRS" },
    { course: "SCI 140", name: "Introduction to Microprocessors", cred: "4 CRS, 3 HRS, 2 LAB HRS" },
    { course: "SCI 150", name: "Nutrition", cred: "3 CRS, 3 HRS" },
    { course: "SCI 151", name: "The Science of Food", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    { course: "SCI 410", name: "Man and Environment", cred: "3 CRS, 3 HRS" },
    { course: "SCI 430", name: "Scientific Instrumentation", cred: "4 CRS, 2 HRS, 4 LAB HRS" },
    { course: "SCI 510", name: "Pathophysiology", cred: "3 CRS, 3 HRS" },
    { course: "SCI 530", name: "Pharmacology", cred: "3 CRS, 3 HRS" },


];

var course_listings_cis = [
    // Computer Information Systems
    { course: "CIS 100", name: "Introduction to Computer Applications", cred: "3 CRS, 4 HRS" },
    { course: "CIS 115", name: "Introduction to Computer and Information Security", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    { course: "CIS 120", name: "Introduction to Data Base Applications", cred: "2 CRS, 3 HRS" },
    { course: "CIS 140", name: "Introduction to Spreadsheet Applications", cred: "2 CRS, 3 HRS" },
    { course: "CIS 155", name: "Computer Hardware", cred: "4 CRS, 3 HRS, 2 LAB HRS" },
    { course: "CIS 160", name: "Desktop Publishing Packages", cred: "2 CRS, 3 HRS" },
    { course: "CIS 165", name: "Introduction to Operating Systems", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    { course: "CIS 180", name: "Introduction to the Internet", cred: "3 CRS, 4 HRS" },
    { course: "CIS 200", name: "Introduction Systems and Technologies", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    { course: "CIS 207", name: "Healthcare Information Technologies and Management Systems", cred: "4 CRS, 2 HRS, 4 LAB HRS" },
    { course: "CIS 220", name: "Visual BASIC", cred: "3 CRS, 4 HRS" },
    { course: "CIS 235", name: "Computer Operations I", cred: "4 CRS, 5 HRS" },
    { course: "CIS 255", name: "Computer Software", cred: "3 CRS, 4 HRS, 2 LAB HRS" },
    { course: "CIS 272", name: "Introduction to Mobile App Development", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    { course: "CIS 280", name: "Advanced Internet Applications", cred: "3 CRS, 4 HRS" },
    { course: "CIS 285", name: "Mobile Device Security", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    { course: "CIS 316", name: "Introduction to Digital Forensics", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    { course: "CIS 317", name: "Introduction to Cryptography", cred: "4 CRS, 4 HRS" },
    { course: "CIS 325", name: "Systems Analysis", cred: "3 CRS, 4 HRS" },
    { course: "CIS 335", name: "Computer Operations II/ JCL", cred: "3 CRS, 5 HRS" },
    { course: "CIS 345", name: "Telecommunication Networks I", cred: "3 CRS, 2 HRS, 3 LAB HRS" },
    { course: "CIS 359", name: "Information Assurance", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    { course: "CIS 362", name: "Cloud Computing", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    { course: "CIS 364", name: "Mobile Device Programming", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    { course: "CIS 365", name: "Business Systems I", cred: "4 CRS, 5 HRS" },
    { course: "CIS 370", name: "Database Driven Website Programming", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    { course: "CIS 385", name: "Web Programming I", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    { course: "CIS 390", name: "Wireless Programming", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    { course: "CIS 395", name: "Database Systems I", cred: "3 CRS, 2 HRS, 3 LAB HRS" },
    { course: "CIS 420", name: "Systems Implementation", cred: "3 CRS, 5 HRS" },
    { course: "CIS 440", name: "UNIX", cred: "3 CRS, 4 HRS" },
    { course: "CIS 445", name: "Telecommunications Networks II / LAN", cred: "3 CRS, 2 HRS, 3 LAB HRS" },
    { course: "CIS 455", name: "Network Security", cred: "3 CRS, 2 HRS, 3 LAB HRS" },
    { course: "CIS 459", name: "Ethical Hacking and System Defense", cred: "3 CRS, 3 HRS, 2 LAB HRS" },
    { course: "CIS 465", name: "Business Systems II", cred: "3 CRS, 5 HRS, 5 LAB HRS" },
    { course: "CIS 475", name: "Wireless Information Networks", cred: "4 CRS, 3 HRS, 2 LAB HRS" },
    { course: "CIS 480", name: "Operating Systems Concepts", cred: "3 CRS, 3 HRS" },
    { course: "CIS 485", name: "Web Programming II", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    { course: "CIS 490", name: "Introduction to Data Science", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    { course: "CIS 495", name: "Database Systems II", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    // Computer Science
    { course: "CSC 101", name: "Principles in Information Technology and Computation", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    { course: "CSC 103", name: "Introduction to Data Analytics", cred: "3 CRS, 4 HRS" },
    { course: "CSC 110", name: "Computer Programming I", cred: "4 CRS, 5 HRS" },
    { course: "CSC 111", name: "Introduction to Programming", cred: "4 CRS, 3 HRS, 2 LAB HRS" },
    { course: "CSC 203", name: "Python Programming for Data Science", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    { course: "CSC 210", name: "Computer Programming II", cred: "3 CRS, 2 HRS, 3 LAB HRS" },
    { course: "CSC 211", name: "Advanced Programming Techniques", cred: "3 CRS, 2 HRS, 3 LAB HRS" },
    { course: "CSC 215", name: "Fundamentals of Computer Systems", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    { course: "CSC 230", name: "Discrete Structures", cred: "3 CRS, 3 HRS, 3 LAB HRS" },
    { course: "CSC 231", name: "Discrete Structures and Applications to Computer Science", cred: "4 CRS, 4 HRS" },
    { course: "CSC 310", name: "Assembler Language and Architecture I", cred: "3 CRS, 4 HRS" },
    { course: "CSC 330", name: "Data Structures I", cred: "3 CRS, 4 HRS" },
    { course: "CSC 331", name: "Data Structures", cred: "3 CRS, 1 HRS, 4 LAB HRS" },
    { course: "CSC 350", name: "Software Development", cred: "3 CRS, 2 HRS, 3 LAB HRS" },
    { course: "CSC 410", name: "Assembler Language and Architecture II", cred: "3 CRS, 4 HRS" },
    { course: "CSC 430", name: "Data Structures II", cred: "3 CRS, 4 HRS" },
    { course: "CSC 450", name: "Computer Graphics", cred: "3 CRS, 4 HRS" },
    { course: "CSC 470", name: "Mathematical Foundations of Computer (Same as MAT 470)", cred: "4 CRS, 3 HRS, 2 LAB HRS" },

    // Geographic Information Science
    { course: "GIS 101", name: "Digital Earth", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    { course: "GIS 201", name: "Introduction to Geographic Methods", cred: "4 CRS, 3 HRS, 3 LAB HRS" },
    { course: "GIS 261", name: "Introduction to Geographic Information Science", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
    { course: "GIS 325", name: "GIS Internship", cred: "2 CRS, 15 HRS" },
    { course: "GIS 361", name: "Advanced Geographic Information Science", cred: "3 CRS, 2 HRS, 2 LAB HRS" },
];

// for math
course_list = "";

for(let i = 0; i < course_listings_math.length; i++){
    course_list += "<ul>" + course_listings_math[i].course + " | " + course_listings_math[i].name  + " | " + course_listings_math[i].cred
    + "</ul>"
}
document.getElementById("case1").innerHTML= course_list;

// for science
course_list = "";
for(let i = 0; i < course_listings_science.length; i++){
    course_list += "<ul>" + course_listings_science[i].course + " | " + course_listings_science[i].name  + " | " + course_listings_science[i].cred
    + "</ul>"
}
document.getElementById("case2").innerHTML= course_list;

// for cis
course_list = "";
for(let i = 0; i < course_listings_cis.length; i++){
    course_list += "<ul>" + course_listings_cis[i].course + " | " + course_listings_cis[i].name  + " | " + course_listings_cis[i].cred
    + "</ul>"
}
document.getElementById("case3").innerHTML= course_list;