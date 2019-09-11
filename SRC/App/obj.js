const Person = {
  name: "kanye-west",
  bornYear: 1900,
  age: function getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age;

      return age;
      
      for (var i = 0; i < Person.length; i++) {
      console.log(Person[i]);

}
    
  }
};

export{getAge};