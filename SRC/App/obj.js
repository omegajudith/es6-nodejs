

function oblits() {
  const Person = {
    name: "kanye-west",
    bornYear: 1900,
    age: function getAge(){

      let today = new Date();
      let todayYear = today.getFullYear();
      let age = todayYear - this.bornYear;
      console.log(Person)
      return age;
  
    }
  }
}
  // const fun = Person.age()
 
  
  const keys = Object.values(Person)
  for (const key of keys) {
    console.log('&&&&&&&&&', key)
  }
export {oblits}