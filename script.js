function Person(name, birth, end) {
  this.name = name;
  this.birth = birth;
  this.end = end;
}

var persons = [],
  john = new Person("John", "1904", "1963"),
  jack = new Person("Jack", "1984", null),
  jill = new Person("Jill", "1979", null),
  susan = new Person("Susan", "1925", "1987"),
  beth = new Person("Beth", "1912", "1960"),
  ron = new Person("Ron", "1956", "1962"),
  bob = new Person("Bob", "1963", "1999"),
  bill = new Person("Bill", "1945", null);

persons.push(john, jack, jill, susan, beth, ron, bob, bill);

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