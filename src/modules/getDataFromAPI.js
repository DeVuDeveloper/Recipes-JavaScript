const getDataFromAPI = () => fetch('https:www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
  .then((response) => response.json())
  .then((data) => data.meals);

export default getDataFromAPI;