const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Food" },
    { name: "Drinks" },
    { name: "Merchandise" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Chicken & Waffles",
      description:
        "Our delicious Chicken & Waffles comes with spicy blueberry syrup and a honey mustard sauce drizzled over our perfectly cooked fried chicken and buttermilk waffle.",
      image: "Slide3.PNG",
      category: categories[0]._id,
      price: 13,
      quantity: 30,
    },
    {
      name: "Breakfast Tacos",
      category: categories[0]._id,
      description:
        "Set of three deliciously put together tacos with a fried egg on top.",
      image: "Slide14.PNG",
      price: 9,
      quantity: 30,
    },
    {
      name: "Chocolate Chip Pancakes",
      description: "Perfectly round buttermilk pancakes with chocolate chips that will melt in your mouth.",
      image: "Slide4.PNG",
      category: categories[0]._id,
      price: 9,
      quantity: 30,
    },

    {
      name: "Stuffed French Toast",
      category: categories[0]._id,
      description:
        "Golden, fluffy delicant french toast stuffed with chocolate and topped with fresh strawberries.",
      image: "Slide5.PNG",
      price: 11,
      quantity: 30,
    },

    {
      name: "Bacon Cheeseburger",
      category: categories[0]._id,
      description:
        "Thick, juicy cheeseburger wrapped in crispy bacon on top of a brioche bun.",
      image: "Slide1.PNG",
      price: 13,
      quantity: 30,
    },
    {
      name: "Pimiento Grilled Cheese",
      category: categories[0]._id,
      description: "Pimiento grilled cheese with crispy bacon and garlic aoli",
      image: "Slide2.PNG",
      price: 12,
      quantity: 30,
    },
    {
      name: "Steak & Spinach Quesadilla",
      category: categories[0]._id,
      description: "Crispy, delicious Steak and spinach quesadilla.",
      image: "Slide6.PNG",
      price: 10,
      quantity: 30,
    },
    {
      name: "Wings",
      category: categories[0]._id,
      description:
        "Crispy, delicious wings tossed in our homemade Spicy Garlic Sauce.",
      image: "Slide15.PNG",
      price: 16,
      quantity: 30,
    },
    {
      name: "Water",
      category: categories[1]._id,
      description: "Water",
      image: "Slide16.PNG",
      price: 0,
      quantity: 30,
    },
    {
      name: "GingerAle",
      category: categories[1]._id,
      description: "Gingerale",
      image: "Slide11.PNG",
      price: 2,
      quantity: 30,
    },
    {
      name: "Milk",
      category: categories[1]._id,
      description:
        "Whole milk with your choice between Chocolate and Strawberry",
      image: "Slide7.PNG",
      price: 2,
      quantity: 30,
    },
    {
      name: "Latte",
      category: categories[1]._id,
      description:
        "Sweet Cream milk steamed to perfection with a shot of espresso, with your choice of flavoring between Vanilla, Hazelnut, Mocha.",
      image: "Slide8.PNG",
      price: 5,
      quantity: 30,
    },
    {
      name: "White Coffee Breve",
      category: categories[1]._id,
      description: "A smooth white coffee with a pump of breve flavoring",
      image: "Slide13.PNG",
      price: 7,
      quantity: 30,
    },
    {
      name: "Strawberry Matcha Latte",
      category: categories[1]._id,
      description:
        "Organic premium-grade matcha, milk and our housemade strawberry puree.",
      image: "Slide9.PNG",
      price: 8,
      quantity: 30,
    },
    {
      name: "Chai Snow Tea",
      category: categories[1]._id,
      description: "A smooth chai tea, with options of Matcha tea on top",
      image: "Slide10.PNG",
      price: 7,
      quantity: 30,
    },

    {
      name: "Sweet Cheese Slush",
      category: categories[1]._id,
      description:
        "Your choice of strawberry, mango, peach, watermellon and taro slush topped with a thick slice of cheese.",
      image: "Slide12.PNG",
      price: 7,
      quantity: 30,
    },

    {
      name: "Hat",
      category: categories[2]._id,
      description:
        "Hat that says 'The Bailey Cafe', will come in colors of blue, gray, white, or black.",
      image: "hat.png",
      price: 15,
      quantity: 600,
    },
    {
      name: "Shirt",
      category: categories[2]._id,
      description:
        "Shirt that says 'The Bailey Cafe', the back has our slogan 'Better than your MaMa's Breakfast', will come in colors of blue, gray, white, or black.",
      image: "shirt.png",
      price: 15,
      quantity: 600,
    },
    {
      name: "Sweatshirt",
      category: categories[2]._id,
      description:
        "A Sweatshirt that says 'The Bailey Cafe', will come in colors of blue, gray, white, or black.",
      image: "sweatshirt.png",
      price: 45,
      quantity: 600,
    },
    {
      name: "Apron",
      category: categories[2]._id,
      description:
        "An apron that says 'The Bailey Cafe', comes in premium denim fabric.",
      image: "apron.png",
      price: 35,
      quantity: 600,
    },
    {
      name: "Mug",
      category: categories[2]._id,
      description:
        "A mug that says 'The Bailey Cafe', will come in colors of blue, gray, white, or black.",
      image: "mug.png",
      price: 20,
      quantity: 600,
    },
    {
      name: "Gift Card",
      category: categories[2]._id,
      description: "A gift card to be used at 'The Bailey Cafe'",
      image: "gift-card.png",
      price: 25,
      price: 50,
      price: 100,
      quantity: 600,
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
