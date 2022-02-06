import commentCounter from './commentCounter.js';

const setCommentsToAPI = async (comment) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/puvc7VYSNA8heLggUsN3/comments';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
  return response.ok;
};

const getCommentsFromAPI = async (item) => {
  const involvementAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/puvc7VYSNA8heLggUsN3/comments?item_id=${item.idMeal}`;
  const commentsFromAPI = await fetch(involvementAPI).then((response) => response.json());
  const commentList = commentsFromAPI;
  const counter = commentCounter(commentList);
  const displayComments = document.querySelector('.p-comment');
  const commentNumber = document.querySelector('.comment-counter');

  commentNumber.innerHTML = `Comments (${counter})`;

  displayComments.innerHTML = '';

    commentList.forEach((comment) => {
      const createComment = document.createElement('li');
      createComment.classList.add('create-comment');
      createComment.style.display = 'flex';
      createComment.style.justifyContent = 'center';
      createComment.style.gap = '10px';
      displayComments.appendChild(createComment);
      const span1 = document.createElement('span');
      span1.classList.add('white');
      createComment.appendChild(span1);
      span1.textContent = comment.creation_date;
      const span2 = document.createElement('span');
      span2.classList.add('white');
      span2.innerHTML = `${comment.username}:`;
      createComment.appendChild(span2);
      const span3=  document.createElement('span');
      span3.classList.add('white');
      span3.textContent = comment.comment;
      createComment.appendChild(span3);
  });
};

export { setCommentsToAPI, getCommentsFromAPI };