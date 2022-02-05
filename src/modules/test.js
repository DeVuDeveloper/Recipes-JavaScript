import homepageCounter from './homepageCounter.js';
import mockJsonFromAPI from './mockJsonFromAPI.js';

describe('Checking if right data fetched from API', () => {
  test('if counter function works properly', () => {
    const receivedData = mockJsonFromAPI;
    const meals = homepageCounter(receivedData);
    expect(meals).toBe(27);
  });

  test('if it is right title', () => {
    const receivedData = mockJsonFromAPI;
    expect(receivedData[12].strMeal).toBe('Mediterranean Pasta Salad');
  });

  test('if it is right id', () => {
    const receivedData = mockJsonFromAPI;
    expect(receivedData[25].idMeal).toBe(52975);
  });
});
