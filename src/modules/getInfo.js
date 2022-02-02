const getInfo = async (idMeal) => {
  const getMealsInfo = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  return (await getMealsInfo.json()).meals;
};

export default getInfo;
