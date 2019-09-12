

const Person = {
  name: "kanye-west",
  bornYear: 1900,
  age: function getAge(){

    let today = new Date();
    let todayYear = today.getFullYear();
    // console.log('%%%%%%%', todayYear)
    let age = todayYear - this.bornYear
    return age;

  }
}

// const fun = Person.age()

// console.log('&&&&&&&&&', fun)

const keys = Object.values(Person)
for (const key of keys) {
  console.log('&&&&&&&&&', key)
}

// var today = new Date();
//       var birthDate = new Date(dateString);
//       var age = today.getFullYear() - birthDate.getFullYear();
//       var m = today.getMonth() - birthDate.getMonth();
//       if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age;
//       console.log(birthDate);
      
//       for (var i = 0; i < Person.length; i++) {
//       console.log(Person[i]);