exports.seed = function (knex) {
  return knex("steps")
    .truncate()
    .then(function () {
      return knex("steps").insert([
        {
          recipe_id: 1,
          step_instruction: "boil pasta",
          step_number: 1,
        },
        {
          recipe_id: 2,
          step_instruction: "cook chicken",
          step_number: 1,
        },
        {
          recipe_id: 2,
          step_instruction: "boil water and cook pasta",
          step_number: 2,
        },
        {
          recipe_id: 2,
          step_instruction: "make alfredo sauce",
          step_number: 3,
        },
        {
          recipe_id: 2,
          step_instruction: "combine chicken and pasta",
          step_number: 4,
        },
        {
          recipe_id: 3,
          step_instruction: "coming soon",
          step_number: 1,
        },
        {
          recipe_id: 1,
          step_instruction: "make sauce",
          step_number: 2,
        },
        {
          recipe_id: 1,
          step_instruction: "combine noodles and sauce",
          step_number: 3,
        },
      ]);
    });
};