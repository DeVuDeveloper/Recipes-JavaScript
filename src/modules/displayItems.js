const list = async (meals) => {
  const mealsContainer = document.querySelector('.cards-wrapper');

  meals.forEach((meal) => {
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
  });


export default list;
