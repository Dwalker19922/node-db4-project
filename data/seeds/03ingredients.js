exports.seed = function (knex) {
  return knex("ingredients")
    .truncate()
    .then(function () {
      return knex("ingredients").insert([
        {
          ingredient_name: "pasta",
        },
        {
          ingredient_name: "chicken",
        },
        {
          ingredient_name: "tomato sauce",
        },
        {
          ingredient_name: "alfredo sauce",
        },
        {
          ingredient_name: "water",
        },
        {
          ingredient_name: "hamburger",
        },
      ]);
    });
};