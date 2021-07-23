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
        "Chicken and waffles is an American dish combining chicken with waffles. It is part of a variety of culinary traditions, including Pennsylvania Dutch cuisine and soul food, and is served in certain specialty restaurants in the United States",
      image: "Slide3.PNG",
      category: categories[0]._id,
      price: 5.49,
      quantity: 30,
    },
    {
      name: "Breakfast Tacos",
      category: categories[0]._id,
      description:
        "A good breakfast taco is a thing of beauty. Not only will these keep you full until lunch, they've also been known to cure a mean hangover.",
      image: "Slide14.PNG",
      price: 4.11,
      quantity: 30,
    },
    {
      name: "Chocolate Chip Pancakes",
      description: "Light fluffy Filled with pockets of Chocolate Chips",
      image: "Slide4.PNG",
      category: categories[0]._id,
      price: 6.79,
      quantity: 30,
    },

    {
      name: "Stuffed French Toast",
      category: categories[0]._id,
      description:
        "Golden, fluffy delicant french toast stuffed with chocolate and topped with fresh strawberries.",
      image: "Slide5.PNG",
      price: 7.99,
      quantity: 30,
    },

    {
      name: "Bacon Cheeseburger",
      category: categories[0]._id,
      description:
        "Thick juicy Cheese burger wrapped in cripsy bacon, smooshed between a briouce bun",
      image: "Slide1.PNG",
      price: 12.99,
      quantity: 30,
    },
    {
      name: "Pimiento Grilled Cheese",
      category: categories[0]._id,
      description: "Pimiento grilled cheese with bacon and garlic aoli",
      image: "Slide2.PNG",
      price: 8.99,
      quantity: 30,
    },
    {
      name: "Steak & Spinach Quesadilla",
      category: categories[0]._id,
      description: "Crispy, delicious Steak and spiniach Quesadilla.",
      image: "Slide6.PNG",
      price: 9.85,
      quantity: 30,
    },
    {
      name: "Wings",
      category: categories[0]._id,
      description: "Crispy, delicious wings tossed in our homemade Spicy Garlic Sauce.",
      image: "Slide15.PNG",
      price: 9.85,
      quantity: 30,
    },
    {
      name: "Water",
      category: categories[1]._id,
      description: "Water",
      image: "Slide16.PNG",
      price: 2.5,
      quantity: 30,
    },
    {
      name: "GingerAle",
      category: categories[1]._id,
      description: "Ginger in an ale",
      image: "Slide11.PNG",
      price: 2.5,
      quantity: 30,
    },
    {
      name: "Milk",
      category: categories[1]._id,
      description:
        "Whole milk with your choice between Chocolate and Strawberry",
      image: "Slide7.PNG",
      price: 2.5,
      quantity: 30,
    },
    {
      name: "Latte",
      category: categories[1]._id,
      description:
        "Sweet Cream milk steamed to perfection with a shot of epresso, With your choice of flavoring between Vanilla, Hazlenut, Mocha",
      image: "Slide8.PNG",
      price: 3.5,
      quantity: 30,
    },
    {
      name: "White Coffee Breve",
      category: categories[1]._id,
      description: "A smooth white coffee with a pump of breve flavoring",
      image: "Slide13.PNG",
      price: 2.5,
      quantity: 30,
    },
    {
      name: "Strawberry Matcha Latte",
      category: categories[1]._id,
      description:
        "Organic premium-grade matcha, milk and our housemade strawberry puree.",
      image: "Slide9.PNG",
      price: 4.99,
      quantity: 30,
    },
    {
      name: "Chai Snow Tea",
      category: categories[1]._id,
      description: "A smooth chai tea, with options of Matcha tea on top",
      image: "Slide10.PNG",
      price: 7.99,
      quantity: 30,
    },
    
    {
      name: "Sweet Cheese Slush",
      category: categories[1]._id,
      description:
        "Your choice of starwberry, mango, peach, watermello and taro slush topped with a thick slice of cheese.",
      image: "Slide12.PNG",
      price: 2.5,
      quantity: 30,
    },
    
    {
      name: "Hat",
      category: categories[2]._id,
      descriaption:
        "Hat that says 'The Bailey Cafe', will come in colors of Grey, Black, White.",
      image:
        "https://topchefuniforms.com.au/wp-content/uploads/2013/12/1-CAP-BLACK.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Shirt",
      category: categories[2]._id,
      description:
        "Shirt that says 'The Bailey Cafe', the back has our slogan 'Better than your MaMa's Breakfest', will come in colors of Grey, Black, White, Blue, and Red.",
      image:
        "https://pyxis.nymag.com/v1/imgs/05d/b15/f4c61238a24a34610ae3a41dede1df90a4-Gildan-black-tshirt.rsquare.w600.jpg",
      price: 14.99,
      quantity: 600,
    },
    {
      name: "Mug",
      category: categories[2]._id,
      description:
        "A mug that says 'The Bailey Cafe', will come in colors of Grey, Black, White.",
      image:
        "https://www.lego.com/cdn/cs/set/assets/blt843679bda9bde338/853910.jpg?fit=bounds&format=jpg&quality=80&width=1600&height=1600&dpr=1",
      price: 4.99,
      quantity: 600,
    },
    {
      name: "Sweatshirt",
      category: categories[2]._id,
      description:
        "A Sweatshirt that says 'The Bailey Cafe', will come in colors of Grey, Black, White, Blue, and Red.",
      image: "https://m.media-amazon.com/images/I/81IEZzMNHvL._AC_UL1500_.jpg",
      price: 19.99,
      quantity: 600,
    },
    {
      name: "Gift Card",
      category: categories[2]._id,
      description: "A gift card to be used at 'The Bailey Cafe'",
      image:
        "https://thumbs.dreamstime.com/b/gift-card-icon-vector-ecommerce-basic-collection-thin-line-outline-illustration-linear-symbol-use-web-mobile-apps-166041074.jpg",
      price: 9.99,
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
