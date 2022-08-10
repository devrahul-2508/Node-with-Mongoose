
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/personDB");

const fruitSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  rating : {
    type : Number,
    min:1,
    max:10
  },
  review:String
});


const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit= new Fruit({
  name : "PineApple",
  rating:7,
  review: "Pretty Solid Fruit"
});

fruit.save()

const kiwi = new Fruit({
  name : "Kiwi",
  rating:7,
  review: "Pretty Solid Fruit"
});

const orange = new Fruit({
  name : "Orange",
  rating:4,
  review: "Sour Fruit"
});

const banana = new Fruit({
  name : "Banana",
  rating:5,
  review: "Weird Texture"
});

Fruit.insertMany([kiwi,orange,banana],function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("Successfully saved");
  }
})

Fruit.find(function(err,fruits){
  if(err){
    console.log(error);
  }
  else{
   
    console.log(fruits);
    fruits.forEach(function(item){
      console.log(item.name);
    })
  }
});

Fruit.updateOne({name:"Orange"},{review:"Tasty"},function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("Succesfully updated the document");
  }
})

Fruit.deleteOne({name:"PineApple"},function(err){
  if(err){
    console.log("Error");
  }
  else{
    console.log("Successfully deleted");
  }
})

const personSchema = new mongoose.Schema(
  {
    name : String,
    age: Number,
    favouriteFruit : fruitSchema

  }
);

const Person = mongoose.model("People",personSchema);

const pineapple = new Fruit(
  {
    name : "PineApple",
    rating:4,
    review:"Great Fruit"
  }
);

pineapple.save();

const person = new Person({
  name : "Andy",
  age:12,
  favouriteFruit: pineapple
});

person.save();




fruit.save();