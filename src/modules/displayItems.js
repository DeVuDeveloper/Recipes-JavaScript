import { addLikeToAPI, getLikesFromAPI } from './likes.js';
import homepageCounter from './homepageCounter.js';

const mealsContainer = document.querySelector('.cards-wrapper');
const numbersOfMeals= document.querySelector('.meals-number');
 
const list = (meals) => {
  meals.forEach(async (meal) => {
    const ul = document.createElement('ul');
    ul.id = meal.idMeal;
    ul.classList.add('cards');
    mealsContainer.appendChild(ul);
    const imageContainer = document.createElement('li');
    ul.appendChild(imageContainer);
    const image = document.createElement('img');
    image.src = meal.strMealThumb;
    image.classList.add('image');
    imageContainer.appendChild(image);
    const mealTitle = document.createElement('li');
    ul.appendChild(mealTitle);
    mealTitle.classList.add('flex-li');
    const mealName = document.createElement('span');
    mealName.innerHTML = meal.strMeal;
    mealTitle.appendChild(mealName);
    const spanHeart = document.createElement('span');
    mealTitle.appendChild(spanHeart);
    const heart = document.createElement('i');
    heart.classList.add('far', 'fa-heart', 'like');
    heart.id = meal.idMeal;
    mealTitle.appendChild(heart);
    const likes = document.createElement('li');
    likes.classList.add('likeCounter');
    likes.innerHTML = 'O likes';
    ul.appendChild(likes);
    const commentBtn = document.createElement('li');
    ul.appendChild(commentBtn);
    const anchor = document.createElement('a');
    anchor.id = meals.idMeal;
    anchor.classList.add('comments-btn');
    anchor.href = '#';
    anchor.text = 'Comments';
    commentBtn.appendChild(anchor);

    const likesData = await getLikesFromAPI();
    const showLikes = (likesData, likes) => {
      likesData.forEach((meal) => {
        if (meal.item_id === heart.id) {
          likes.innerHTML = `${meal.likes} likes `;
        }
      });
    };
    showLikes(likesData, likes);

    heart.addEventListener('click', async () => {
      await addLikeToAPI(heart.id);
      heart.style.color = 'red';
      setTimeout(() => {
        heart.style.color = 'unset';
      }, 2000);

      const likeComing = await getLikesFromAPI();
      showLikes(likeComing, likes);
    });
  });

  numbersOfMeals.textContent = homepageCounter(meals);
};

export default list;