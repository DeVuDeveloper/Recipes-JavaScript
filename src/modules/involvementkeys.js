const setCommentsToAPI = async (idMeal, userName, userComment) => {
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ctkHUNgZItfXBWAQsE4f/comments',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: idMeal,
        username: userName,
        comment: userComment,
      }),
    },
  )
    .then((res) => res.ok)
    .then((data) => data);
};

const getCommentsFromAPI = async (idMeal) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ctkHUNgZItfXBWAQsE4f
/comments?item_id=${idMeal}`,
  );
  const result = await response.json();
  return result;
};

export { setCommentsToAPI, getCommentsFromAPI };
