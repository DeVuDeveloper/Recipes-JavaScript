const getLikesFromAPI = async () => {
  const getLike = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WCK0EdtmUviPKWBbJC6l/likes');
  const json = await getLike.json();
  return json;
};

const addLikeToAPI = async (mealId) => {
  const postLike = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WCK0EdtmUviPKWBbJC6l/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id: mealId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return postLike;
};

export { getLikesFromAPI, addLikeToAPI };