'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "images",
      [
        {
          userId: 1,
          path: "https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          path: "https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          path: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          path: "https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          path: "https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          path: "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          path: "https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          path: "https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          path: "https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          path: "https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("images", null, {});
  }
};
