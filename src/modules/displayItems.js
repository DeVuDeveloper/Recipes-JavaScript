
const mealsContainer = document.querySelector('.cards-wrapper');

const ul = document.createElement('ul');
ul.id = 'meal.id';
ul.classList.add('cards');
mealsContainer.appendChild(ul);
const imageContainer = document.createElement('li');
ul.appendChild(imageContainer);
const image = document.createElement('img');
image.src = 'img/meals.png';
image.classList.add('image');
imageContainer.appendChild(image);
const mealTitle = document.createElement('li');
ul.appendChild(mealTitle);
mealTitle.classList.add('flex-li');
const mealName = document.createElement('span');
mealName.innerHTML = `This meal`;
mealTitle.appendChild(mealName);
const spanHeart = document.createElement('span');
mealTitle.appendChild(spanHeart);
const heart = document.createElement('i');
heart.classList.add('far', 'fa-heart', 'like');
heart.id = 'heart';
mealTitle.appendChild(heart);
const likes = document.createElement('li');
likes.classList.add('likeCounter')
likes.innerHTML = `O likes`;
ul.appendChild(likes);
const commentBtn = document.createElement('li');
ul.appendChild(commentBtn);
const anchor = document.createElement('a');
anchor.id = 'anchor';
anchor.classList.add('comments-btn');
anchor.href = '#';
anchor.text = 'Comments';
commentBtn.appendChild(anchor); 
  
export default mealsContainer;