import { setCommentsToAPI, getCommentsFromAPI } from './involvementkeys.js';

const popUpContainer = document.querySelector('.pop-up-container');
const popUp = async ([meal]) => {
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
  div.appendChild(ID);
  const spanDiv = document.createElement('div');
  spanDiv.classList.add('span-div');
  const iDText = document.createElement('ul');
  iDText.classList.add('id-text');
  const li = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  li.innerText = `Category : ${meal.strCategory}`;
  li2.innerText = `Area : ${meal.strArea}`;
  li3.innerText = `Recipe : ${meal.strInstructions}`;
  iDText.appendChild(li);
  iDText.appendChild(li2);
  iDText.appendChild(li3);
  spanDiv.appendChild(iDText);
  div.appendChild(spanDiv);
  const commentHeader = document.createElement('h3');
  commentHeader.innerText = 'Comments';
  const commentText = document.createElement('ul');
  const comment = document.createElement('li');
  comment.classList.add('comment-counter');
  comment.innerHTML = 'Comments (<span>5</span>)';

  div.appendChild(commentHeader);
  commentText.appendChild(comment);
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
  btn.type = 'submit';
  btn.innerText = 'Comments';
  form.appendChild(btn);
  div.appendChild(form);

  closeButton.addEventListener('click', () => {
    popUpContainer.classList.remove('pop');
  });

  const addComment = (el) => {
    const comments = document.createElement('li');
    comments.innerHTML = `<span>${el.creationDate}</span> ${el.username}: ${el.comment}`;
    displayComments.appendChild(comments);
  };

  btn.addEventListener('click', async () => {
    const date = new Date();
    const creationDate = date.toISOString().split('T')[0];
    const userName = input.value;
    const userComment = textArea.value;
    addComment({ creationDate, comment: userComment, username: userName });
    form.reset();
    await setCommentsToAPI(meal.idMeal, userName, userComment);
  });

  const commentList = await getCommentsFromAPI(meal.idMeal);
  commentList.forEach((element) => {
    addComment(element);
  });

  await setCommentsToAPI(meal.idMeal, username, usercomment);
};

export default popUp;
