// Data object for a person
// Contains items for name, birth and end dates
function Person(name, birth, end) {
  this.name = name;
  this.birth = birth;
  this.end = end;
}

function Count(year) {
  this.year = year;
  this.count = 0;
}

var persons = [],   // Array/List to hold data for people in list
  yearCount = [],
  results = {
    "years": [],
    "value": 0
  },
  john = new Person("John", "1904", "1963"),
  jack = new Person("Jack", "1984", null),
  jill = new Person("Jill", "1979", null),
  susan = new Person("Susan", "1925", "1987"),
  beth = new Person("Beth", "1912", "1960"),
  ron = new Person("Ron", "1956", "1962"),
  bob = new Person("Bob", "1963", "1999"),
  bill = new Person("Bill", "1945", null);

// Push mock data to array for analysis later
persons.push(john, jack, jill, susan, beth, ron, bob, bill);

// For loop to display each person's details
for (var a = 0; a < persons.length; a++) {
  document.write(persons[a].name + " | ");
  document.write(persons[a].birth + " | ");

  if (persons[a].end === null) {
    document.write("N/A");
  } else {
    document.write(persons[a].end);
  }

  document.write("<br />");
}

for (var b = 1900; b <= 2000; b++) {
  var year = new Count(b);

  for (var c = 0; c < persons.length; c++) {
    var mYear = year.year,
        mBirth = persons[c].birth,
        mEnd = persons[c].end;
    
    if (mEnd === null) {
      mEnd = 2001;
    }
    
    if (mYear <= mEnd && mYear >= mBirth) {
      year.count++;
    }
  }

  yearCount.push(year);
}

for (var a = 0; a < persons.length; a++) {
  document.write(persons[a].name + " | ");
  document.write(persons[a].birth + " | ");

  if (persons[a].end === null) {
    document.write("N/A");
  } else {
    document.write(persons[a].end);
  }

  document.write("<br />");
}

document.write("<br />");

document.write("Highest count per year: " + results.value + "<br />");
document.write("Years with highest count: ");