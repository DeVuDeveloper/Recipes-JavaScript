import { addLikeToAPI, getLikesFromAPI } from './likes.js';
import homepageCounter from './homepageCounter.js';
import popUp from './pop-up.js';
import getInfo from './getInfo.js';

const mealsContainer = document.querySelector('.cards-wrapper');
const numbersOfMeals = document.querySelector('.meals-number');

const list = (meals) => {
  meals.forEach(async (meal) => {
    const ul = document.createElement('ul');
    ul.id = meal.idMeal;
    ul.classList.add('card');
    ul.style.backgroundImage = `url('${meal.strMealThumb}')`;
    mealsContainer.appendChild(ul);
    const imageContainer = document.createElement('li');
    ul.appendChild(imageContainer);
    const image = document.createElement('img');
    image.classList.add('image');
    imageContainer.appendChild(image);
    const mealTitle = document.createElement('li');
    ul.appendChild(mealTitle);
    mealTitle.classList.add('flex-li');
    const mealName = document.createElement('span');
    mealName.classList.add('meal-name');
    mealName.innerHTML = meal.strMeal;
    mealTitle.appendChild(mealName);
    const spanHeart = document.createElement('span');
    mealTitle.appendChild(spanHeart);
    const heart = document.createElement('i');
    heart.classList.add('far', 'fa-heart', 'like');
    heart.id = meal.idMeal;
    mealTitle.appendChild(heart);
    const likesNumber = document.createElement('li');
    likesNumber.classList.add('likeCounter');
    likesNumber.innerHTML = 'O likes';
    ul.appendChild(likesNumber);
    const commentBtn = document.createElement('li');
    ul.appendChild(commentBtn);
    const anchor = document.createElement('a');
    anchor.id = meals.idMeal;
    anchor.classList.add('comments-btn');
    anchor.href = '#';
    anchor.text = 'Comments';
    commentBtn.appendChild(anchor);

    const popUpContainer = document.querySelector('.pop-up-container');
    anchor.addEventListener('click', async () => {
      popUpContainer.classList.add('pop');
      popUp(await getInfo(meal.idMeal));
      const navbar = document.querySelector('.navbar');
      navbar.classList.add('hide');
    });

    const likesData = await getLikesFromAPI();
    const showLikes = (likesData, likesNumber) => {
      likesData.forEach((likeProp) => {
        if (likeProp.item_id === heart.id) {
          likesNumber.innerHTML = `${likeProp.likes} likes `;
        }
      });
    };
    showLikes(likesData, likesNumber);

    heart.addEventListener('click', async () => {
      await addLikeToAPI(heart.id);
      heart.style.color = 'red';
      setTimeout(() => {
        heart.style.color = 'unset';
      }, 2000);

      const likeComing = await getLikesFromAPI();
      showLikes(likeComing, likesNumber);
    });
  });

  numbersOfMeals.textContent = homepageCounter(meals);
};

export default list;
