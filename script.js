$(document).ready(function () {
  
  // Data object for a person.
  // Contains items for name, birth and end dates.
  function Person(name, birth, end) {
    "use strict";
    this.name = name;
    this.birth = birth;
    this.end = end;
  }

  // Data object for year count.
  // Contains items for year and count value.
  function Count(year) {
    "use strict";
    this.year = year;
    this.count = 0;
  }

  var persons = [],   // Array/List to hold data for people in list.
    yearCount = [],   // Array/List to hold data for years testing.
    results = {       // Results object for storing final values.
      "years": [],    // Years array for years with same value.
      "persons": [],  // Persons array for persons alive at years in results list.
      "value": 0      // Value for counting number of alive.
    },
    john = new Person("John", "1904", "1963"),
    jack = new Person("Jack", "1984", null),
    jill = new Person("Jill", "1979", null),
    susan = new Person("Susan", "1925", "1987"),
    beth = new Person("Beth", "1912", "1960"),
    ron = new Person("Ron", "1956", "1962"),
    bob = new Person("Bob", "1963", "1999"),
    bill = new Person("Bill", "1945", null),
    jan = new Person("Jan", "1924", "1956");

  // Push mock data to array for analysis later
  persons.push(john, jack, jill, susan, beth, ron, bob, bill, jan);

  // For loop to display each person's details.
  for (var a = 0; a < persons.length; a++) {
    var dataHTML = $('#dataset').html(),
        dataString = persons[a].name + ", ",
        dataString = dataString.concat(persons[a].birth + ", ");

    if (persons[a].end === null) {    
      dataString = dataString.concat("N/A");
    } else {
      dataString = dataString.concat(persons[a].end);
    }

    $('#dataset').html(dataHTML + dataString + "<br />");
  }

  // Create list of years and count the persons alive.
  for (var b = 1900; b <= 2000; b++) {

    // Create new "Count" object for each year.
    var year = new Count(b);

    // For each person, update the new object items.
    for (var c = 0; c < persons.length; c++) {
      var mYear = year.year,
          mBirth = persons[c].birth,
          mEnd = persons[c].end;

      // For our count, if the person is still alive,
      // use year outside of loop range.
      if (mEnd === null) {
        mEnd = 2001;
      }

      // If the counting year is greater than the birth date,
      // and is also lower than the end date of the person,
      // then increment the count item.
      if (mYear <= mEnd && mYear >= mBirth) {
        year.count++;
      }
    }

    // Push new year count object to yearCount list.
    yearCount.push(year);
  }

  // For loop to set results item values,
  // where for each year in yearCount list:
  for (var x = 0; x < yearCount.length; x++) {

    // If the count for year is greater than results value,
    // then set results value to this count, 
    // then clear years list and push current year.
    if (yearCount[x].count > results.value) {
      results.value = yearCount[x].count;
      results.years = [];  
      results.years.push(yearCount[x].year);

    // Else if the count for year is equal to results value,
    // then push current year to years list.
    } else if (yearCount[x].count === results.value) {
      results.years.push(yearCount[x].year);
    }
  }

  // Set count UI ID to display value from results object.
  $('#count').html(results.value);
  
  // Set yearList UI ID to display years list from results object as a string.
  $('#yearList').html(results.years.toString());

  // For loop to create persons list for results,
  // where for each years in years list:
  for (var p = 0; p < results.years.length; p++) {

    // and for each persons in data set list:
    for (var o = 0; o < persons.length; o++) {

      // Set temporary values for later use.
      var year = results.years[p],
          birth = persons[o].birth,
          end = persons[o].end;

      // If end date value is null, set to out of expected range.
      if (end === null) {
        end = 2001;
      }

      // If year is greater than birth year,
      // and it is less than the end year:
      if (year >= birth && year <= end) {

        // If this person's name is not found in the persons results list,
        // then push this person's name to persons results list.
        if (results.persons.indexOf(persons[o].name) == -1) {
          results.persons.push(persons[o].name);        
        }
      }
    }
  }

  // Set personsList UI ID to display years list from results object as a string.
  $('#personsList').html(results.persons.toString());
});