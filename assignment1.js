//student Info
const name = " John Patrick Mapanao Andaquig";
const birthdate = "April 24 2006";
const birthplace = " Tampugo, Sta. Curz, Ilocos Sur";
const address = "Tampuo,Sta. Cruz, Ilocos Sur, Philippines, 2713";
const course_year = "Bachelor of Science in Computer Science";
const dream_job = "Software Engineer";

//Classmate 1
const name1 = "Kiel Moris Javonillo Calub";
const birthdate1 = "October 19, 2006";
const birthplace1 = "Tagudin Ilocos Sur";
const address1 = "Poblacion Sur,Sta. Cruz, Ilocos Sur, Philippines, 2713";
const course_year1 = "Bachelor of Science in Computer Science";
const dream_job1 = "Software Engineer";

//Classmate 2
const name3 = "Princess Sahagun";
const birthdate3 = "April 30, 2006";
const birthplace3 = "Dili, Sta. Cruz Ilocos Sur";
const address3 = "Suyo, Sta. Cruz Ilocos Sur, Philippines, 2713 ";
const course_year3 = "Bachelor of Science in Computer Science";
const dream_job3 = "Software Developer";

// Function to format student information
function printStudentInfo(name, birthdate, birthplace, address, course_year, dream_job) {
    console.log(`[${name.toUpperCase()}] was born [${birthdate}] at [${birthplace.toUpperCase()}], and currently living at [${address.toUpperCase()}]. [${name.toLowerCase()}] is taking up [${course_year.toLowerCase()}] and dreams to be [${dream_job}] after graduation.\n`);
}

// Printing all students' information
printStudentInfo(name, birthdate, birthplace, address, course_year, dream_job);
printStudentInfo(name1, birthdate1, birthplace1, address1, course_year1, dream_job1);
printStudentInfo(name3, birthdate3, birthplace3, address3, course_year3, dream_job3);