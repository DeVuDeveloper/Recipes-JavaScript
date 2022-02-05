import { setCommentsToAPI, getCommentsFromAPI } from './involvementkeys.js';
import commentCounter from './commentCounter.js';

const mainPopUp = document.querySelector('.main-pop-up');
const popUpContainer = document.querySelector('.pop-up-container');
const popUp = async ([meal]) => {
  mainPopUp.style.display = 'block';
  popUpContainer.innerHTML = '';
  const div = document.createElement('div');
  div.id = 'some';
  div.classList.add('pop-up');
  popUpContainer.appendChild(div);
  const mealImage = document.createElement('img');
  mealImage.src = meal.strMealThumb;
  mealImage.classList.add('meal-image');
  div.appendChild(mealImage);
  const closeButton = document.createElement('button');
  closeButton.innerText = 'X';
  closeButton.classList.add('close-button');
  div.appendChild(closeButton);
  const ID = document.createElement('h2');
  ID.innerText = meal.strMeal;
  ID.classList.add('id-title');
  div.appendChild(ID);
  const spanDiv = document.createElement('div');
  spanDiv.classList.add('span-div');
  const iDText = document.createElement('ul');
  iDText.classList.add('id-text');
  const li = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  li.innerHTML = `<span class="meal-details1">Category</span> : ${meal.strCategory}`;
  li.classList.add('meal-details');
  li2.innerHTML = `<span class="meal-details1">Origin</span> : ${meal.strArea}`;
  li2.classList.add('meal-details');
  li3.innerHTML = `<span class="meal-details1">Recipe</span> : ${meal.strInstructions}`;
  li3.classList.add('meal-details');
  iDText.appendChild(li);
  iDText.appendChild(li2);
  iDText.appendChild(li3);
  spanDiv.appendChild(iDText);
  div.appendChild(spanDiv);
  const commentHeader = document.createElement('h3');
  commentHeader.classList.add('comment-text');
  commentHeader.innerText = '';
  const commentText = document.createElement('ul');
  commentText.classList.add('comment-container');
  const commentNumber = document.createElement('li');
  commentNumber.classList.add('comment-counter');
  div.appendChild(commentHeader);
  commentText.appendChild(commentNumber);
  div.appendChild(commentText);
  const displayComments = document.createElement('ul');
  displayComments.classList.add('p-comment');
  div.appendChild(displayComments);
  const form = document.createElement('form');
  const input = document.createElement('input');
  input.placeholder = 'Your name';
  input.id = 'username';
  const textArea = document.createElement('textarea');
  textArea.placeholder = 'Your insight';
  textArea.id = 'usercomment';
  form.appendChild(input);
  form.appendChild(textArea);
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.classList.add('btn');
  btn.innerText = 'Comments';
  form.appendChild(btn);
  div.appendChild(form);

  closeButton.addEventListener('click', () => {
    popUpContainer.classList.remove('pop');
    mainPopUp.style.display = 'none';
    const navbar = document.querySelector('.navbar');
    navbar.classList.remove('hide');
  });

  const addComment = (el) => {
    const comments = document.createElement('li');
    comments.classList.add('.comment');
    comments.innerHTML = `<span class='white'>${el.creation_date}</span> <span class='white'>${el.username}:</span> <span class='white'>${el.comment}</span>`;
    displayComments.appendChild(comments);
  };

  const commentList = await getCommentsFromAPI(meal.idMeal);
  let counter = commentCounter(commentList);
  commentNumber.innerHTML = `Comments (${counter})`;

  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const userName = input.value;
    const userComment = textArea.value;
    counter += 1;
    commentNumber.innerHTML = `Comments (${counter})`;
    const date = new Date();
    const creationDate = date.toISOString().split('T')[0];
    addComment({
      creation_date: creationDate,
      comment: userComment,
      username: userName,
    });
    form.reset();
    await setCommentsToAPI(meal.idMeal, userName, userComment);
  });

  commentList.forEach((element) => {
    addComment(element);
  });
};

export default popUp;
