const getLikeFromAPI = async () => {
  const getMeals = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  return (await getMeals.json()).meals;
};

export default getLikeFromAPI;