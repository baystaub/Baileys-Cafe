const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Food" },
    { name: "Drinks" },
    { name: "Merch" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Chicken and waffles",
      description:
        "Chicken and waffles is an American dish combining chicken with waffles. It is part of a variety of culinary traditions, including Pennsylvania Dutch cuisine and soul food, and is served in certain specialty restaurants in the United States",
      image: "Chicken-and-waffles-18.jpg",
      category: categories[0]._id,
      price: 5.49,
    },
    {
      name: "Chocolate chip Pancakes",
      description: "Light fluffy Filled with pockets of Chocolate Chips",
      image: "best-mini-chocolate-chip-pancakes-720x720.jpg",
      category: categories[0]._id,
      price: 6.79,
    },
    {
      name: "Breakfast Tacos",
      category: categories[0]._id,
      description:
        "A good breakfast taco is a thing of beauty. Not only will these keep you full until lunch, they've also been known to cure a mean hangover.",
      image: "Breakfast-tacos.jpg",
      price: 4.11,
    },
    {
      name: "Cinimmon suger French Toast",
      category: categories[0]._id,
      description:
        "Golden, fluffy delicant french toast with a heap of cinimmon and suger baked in",
      image: "French-Toast.jpg",
      price: 7.99,
    },
    {
      name: "Steak and Spinich Quesadilla",
      category: categories[0]._id,
      description: "Crispy, delicious Steak and spiniach Quesadilla.",
      image: "Steak-and-Spinach-Quesadilla.jpg",
      price: 9.85,
    },
    {
      name: "Bacon Cheese burger",
      category: categories[0]._id,
      description:
        "Thick juicy Cheese burger wrapped in cripsy bacon, smooshed between a briouce bun",
      image: "Bacon-and-cheese-burgers-3.jpg",
      price: 12.99,
    },
    {
      name: "Permento Cheese and bacon Grilled cheese with garlic aoli",
      category: categories[0]._id,
      description: "Permento Cheese and bacon Grilled cheese with garlic aoli",
      image: "GrilledCheese.jpg",
      price: 8.99,
    },
    {
      name: "Milk",
      category: categories[1]._id,
      description:
        "Whole milk with your choice between Chocolate and Strawberry",
      image: "Chocolate-milk.jpg",
      price: 2.5,
    },
    {
      name: "Lattee",
      category: categories[1]._id,
      description:
        "Sweet Cream milk steamed to perfection with a shot of epresso, With your choice of flavoring between Vanilla, Hazlenut, Mocha",
      image: "latte.jpg",
      price: 3.5,
    },
    {
      name: "Strawberry Matcha Latte",
      category: categories[1]._id,
      description:
        "Organic premium-grade matcha, milk and our housemade strawberry puree.",
      image: "STRAWBERRY-MATCHA-LATTE_Thumb.jpeg",
      price: 4.99,
    },
    {
      name: "Chai Snow Tea",
      category: categories[1]._id,
      description: "A smooth chai tea, with options of Matcha tea on top",
      image: "",
      price: 7.99,
    },
    {
      name: "GingerAle",
      category: categories[1]._id,
      description: "Ginger in an ale",
      image: "gingerale.jpg",
      price: 2.5,
    },
    {
      name: "Sweet Cheese slush",
      category: categories[1]._id,
      description:
        "Your choice of starwberry, mango, peach, watermello and taro slush topped with a thick slice of cheese.",
      image: "slush.jpg",
      price: 2.5,
    },
    {
      name: "White coffee breve",
      category: categories[1]._id,
      description: "A smooth white coffee with a pump of breve flavoring",
      image: "",
      price: 2.5,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Kelsea",
    lastName: "Hunt",
    email: "hunt.kelsearyan@gmail.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Jared",
    lastName: "Neisen",
    email: "jared.Neisen@gmail.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Nick",
    lastName: "Clymer",
    email: "nick_clymer2018@yahoo.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Chris",
    lastName: "Garcia",
    email: "chrisg1821@gmail.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Bailey",
    lastName: "Staub",
    email: "staubbm@gmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
