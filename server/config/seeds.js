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
      image: "clientpublicimagesChicken-and-waffles-18.jpg",
      category: categories[0]._id,
      price: 2.99,
      quantity: 500,
    },
    {
      name: "",
      description: "",
      image: "",
      category: categories[0]._id,
      price: 1.99,
      quantity: 500,
    },
    {
      name: "",
      category: categories[1]._id,
      description: "",
      image: "",
      price: 7.99,
      quantity: 20,
    },
    {
      name: "",
      category: categories[1]._id,
      description: "",
      image: "",
      price: 3.99,
      quantity: 50,
    },
    {
      name: "",
      category: categories[1]._id,
      description: "",
      image: "",
      price: 14.99,
      quantity: 100,
    },
    {
      name: "",
      category: categories[2]._id,
      description: "",
      image: "",
      price: 399.99,
      quantity: 30,
    },
    {
      name: "",
      category: categories[2]._id,
      description: "",
      image: "",
      price: 199.99,
      quantity: 30,
    },
    {
      name: "",
      category: categories[3]._id,
      description: "",
      image: "",
      price: 9.99,
      quantity: 100,
    },
    {
      name: "",
      category: categories[4]._id,
      description: "",
      image: "",
      price: 1.99,
      quantity: 1000,
    },
    {
      name: "",
      category: categories[4]._id,
      description: "",
      image: "",
      price: 2.99,
      quantity: 1000,
    },
    {
      name: "",
      category: categories[4]._id,
      description: "",
      image: "",
      price: 7.99,
      quantity: 100,
    },
    {
      name: "",
      category: categories[4]._id,
      description: "",
      image: "",
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
