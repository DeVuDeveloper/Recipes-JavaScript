// const getInfo = async () => {
//   const getMeals = await fetch(
//     'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772',
//   );
//   return (await getMeals.json()).meals;
// };
// export default getInfo;

const getInfo = async (idMeal) => {
  const getMealsInfo = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  return (await getMealsInfo.json()).meals;
};

export default getInfo;
