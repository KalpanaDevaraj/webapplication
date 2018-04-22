module.exports = {
  // Load Mock Product Data Into localStorage
  init: function () {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: '0011001',
        name: 'Healthy Fruit Salad',
        image: 'FruitSalad.jpg',
        description: 'Fruit has been recognized as a good source of vitamins and minerals, and for their role in preventing vitamin C and vitamin A deficiencies. People who eat fruit as part of an overall healthy diet generally have a reduced risk of chronic diseases.',
        variants: [
          {
            sku: '123123',
            type: '1 pack',
            price: 4.99,
            inventory: 1

          },
          {
            sku: '123124',
            type: '6 Pack',
            price: 24.99,
            inventory: 5
          },
          {
            sku: '1231235',
            type: '12 Pack',
            price: 49.99,
            inventory: 3
          }
        ]
      }
    ]));
  }

};