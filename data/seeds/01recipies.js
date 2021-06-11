exports.seed = function (knex) {
  return knex("recipes")
    .truncate()
    .then(function () {
      return knex("recipes").insert([
        { recipe_name: "Spaghetti" },
        { recipe_name: "Chicken Alfredo" },
        { recipe_name: "Lasagna" },
        { recipe_name: "Chicken Parmagana" },
      ]);
    });
};