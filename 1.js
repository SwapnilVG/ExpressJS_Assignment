/*
Q.1 Build a Server Using Http Module NodeJS with api endpoints for Getting Products Data

‘/’→send msg as “Welcome to Men & Women Dummy Data”
‘/men’  → send 10 products data of men.
‘/women’→send 10 products data of women;
‘/other’→ send response as page not found
Hind: You can use any data, send data in json format
*/

const http = require('http');
const port = '5000';
const hostname = 'localhost';

const menProducts = [
    {
      id: 1,
      name: "Men's T-Shirt 1",
      brand: 'ABC',
      price: 24.99,
      color: 'Blue',
      inStock: true,
      size: 'M',
      category: 'Clothing',
    },
    {
      id: 2,
      name: "Men's Jeans 1",
      brand: 'XYZ',
      price: 49.99,
      color: 'Black',
      inStock: true,
      size: '32',
      category: 'Clothing',
    },
    {
      id: 3,
      name: "Men's Sneakers 1",
      brand: 'DEF',
      price: 59.99,
      color: 'White',
      inStock: true,
      size: '10',
      category: 'Footwear',
    },
    // Add more products as needed
    // ...
    {
      id: 4,
      name: "Men's Watch 1",
      brand: 'GHI',
      price: 79.99,
      color: 'Silver',
      inStock: true,
      size: null,
      category: 'Accessories',
    },
    {
        id: 5,
        name: "Men's Hoodie 2",
        brand: 'JKL',
        price: 39.99,
        color: 'Gray',
        inStock: true,
        size: 'L',
        category: 'Clothing',
      },
      {
        id: 6,
        name: "Men's Backpack 2",
        brand: 'MNO',
        price: 59.99,
        color: 'Black',
        inStock: true,
        size: null,
        category: 'Accessories',
      },
      {
        id: 7,
        name: "Men's Running Shoes 2",
        brand: 'PQR',
        price: 69.99,
        color: 'Blue',
        inStock: true,
        size: '11',
        category: 'Footwear',
      },

      {
        id: 8,
        name: "Men's Sunglasses 2",
        brand: 'STU',
        price: 29.99,
        color: 'Brown',
        inStock: true,
        size: null,
        category: 'Accessories',
      },
      {
        id: 9,
        name: "Men's Polo Shirt",
        brand: 'VWX',
        price: 29.99,
        color: 'Green',
        inStock: true,
        size: 'XL',
        category: 'Clothing',
      },
      {
        id: 10,
        name: "Men's Laptop Backpack",
        brand: 'YZA',
        price: 79.99,
        color: 'Navy Blue',
        inStock: true,
        size: null,
        category: 'Accessories',
      },
  ];
  
const womenProducts = [
    {
      id: 1,
      name: "Women's Dress 1",
      brand: 'ABC',
      price: 39.99,
      color: 'Red',
      inStock: true,
      size: 'S',
      category: 'Clothing',
    },
    {
      id: 2,
      name: "Women's Handbag 1",
      brand: 'XYZ',
      price: 29.99,
      color: 'Brown',
      inStock: true,
      size: null,
      category: 'Accessories',
    },
    {
      id: 3,
      name: "Women's Sandals 1",
      brand: 'DEF',
      price: 34.99,
      color: 'Silver',
      inStock: true,
      size: '7',
      category: 'Footwear',
    },
    // Add more products as needed
    // ...
    {
      id: 4,
      name: "Women's Necklace 1",
      brand: 'GHI',
      price: 49.99,
      color: 'Gold',
      inStock: true,
      size: null,
      category: 'Jewelry',
    },
    {
        id: 5,
        name: "Women's Blouse 2",
        brand: 'JKL',
        price: 34.99,
        color: 'White',
        inStock: true,
        size: 'M',
        category: 'Clothing',
      },
      {
        id: 6,
        name: "Women's Earrings 2",
        brand: 'MNO',
        price: 19.99,
        color: 'Silver',
        inStock: true,
        size: null,
        category: 'Jewelry',
      },
      {
        id: 7,
        name: "Women's High Heels 2",
        brand: 'PQR',
        price: 49.99,
        color: 'Red',
        inStock: true,
        size: '8',
        category: 'Footwear',
      },
      // Add more products as needed
      // ...
      {
        id: 8,
        name: "Women's Scarf 2",
        brand: 'STU',
        price: 14.99,
        color: 'Green',
        inStock: true,
        size: null,
        category: 'Accessories',
      },
      {
        id: 9,
        name: "Women's Casual Pants",
        brand: 'VWX',
        price: 44.99,
        color: 'Brown',
        inStock: true,
        size: 'L',
        category: 'Clothing',
      },
      {
        id: 10,
        name: "Women's Crossbody Bag",
        brand: 'YZA',
        price: 39.99,
        color: 'Pink',
        inStock: true,
        size: null,
        category: 'Accessories',
      },

  ];

let server = http.createServer((req,res)=>{
    
    if(req.url==='/'){
        res.statusCode =200;
        res.setHeader = 'Content-Type','application/json'
        res.end(JSON.stringify({Message:"Welcome to men & Women Dummy Data"}));
    }else if(req.url==='/men'){
        res.statusCode =200;
        res.setHeader = 'Content-Type','application/json'
        res.end(JSON.stringify({products:menProducts}))
    }else if(req.url==='/women'){
        res.statusCode =200;
        res.setHeader = 'Content-Type','application/json'
        res.end(JSON.stringify({products:womenProducts}))
    }else if(req.url==='/other'){
        res.statusCode =404;
        res.setHeader = 'Content-Type','application/json'
        res.end(JSON.stringify({Message:'Page not found'}))
    }else{
        res.statusCode =404;
        res.setHeader = 'Content-Type','application/json'
        res.end(JSON.stringify({Message:'Page not found'}))
    }
})

server.listen(port,()=>{
    console.log(`Server is Running on http://${hostname}:${port}`)
})