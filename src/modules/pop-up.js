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
  comment.innerText = 'comment 1';
  div.appendChild(commentHeader);
  commentText.appendChild(comment);
  div.appendChild(commentText);
  const p = document.createElement('p');
  p.classList.add('p-comment');
  // p.innerText = 'Add a comment';
  div.appendChild(p);
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
  const date = new Date();

  btn.addEventListener('click', () => {
    const comments = `${date.toLocaleDateString()}  ${input.value} : ${
      textArea.value
    }`;
    p.innerText = comments;
    form.reset();
    const commentCount = (str) => {
      let counter = 0;
      for (let i = 0; i < str.length; i += 1) {
        if (str[i] > 0) {
          counter += 1;
        }
      }
      return counter;
    };

    comment.innerText = commentCount(comments);
  });
};

export default popUp;
