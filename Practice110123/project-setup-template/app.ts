const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
    hobbies: object;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "Agreat carpet - almost brand-new!",
    hobbies: ["sport", "cooking", "swimming"],
  },
};

console.log(product);

const person: { name: string; age: number; hobbies: string[] } = {
  name: "Gordei",
  age: 10,
  hobbies: ["sport", "cooking", "swimming"],
};

// let favAct: string[];
// favAct = ["sport"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
