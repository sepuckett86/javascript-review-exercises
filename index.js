function createDog(name, age, weight) {
  const dog = {
    name,
    age,
    weight 
  };

  return dog;
}

const dog = createDog('spot', 5, '20lbs');
console.log(dog);
