const involementKeys = 'AZ7zWk86jgEHTkrEg7LZ';

const setCommentsToAPI = async (mealId, input, textArea) => {
  const getComments = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involementKeys}/comments`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: mealId,
        username: input.value,
        comment: textArea.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  );
  return getComments;
};

const getCommentsFromAPI = async () => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involementKeys}/comments`
  );
  const { result } = await response.json();
  return result;
};

export { setCommentsToAPI, getCommentsFromAPI };
