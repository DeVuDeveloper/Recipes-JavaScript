const involementKeys = 'AZ7zWk86jgEHTkrEg7LZ';

const setCommentsToAPI = async (mealId) => {
  const getComments = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involementKeys}/likes`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: mealId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  return getComments;
};

const getCommentsFromAPI = async () => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involementKeys}/comments`,
  );
  const { result } = await response.json();
  return result;
};

export default { setCommentsToAPI, getCommentsFromAPI };
