const getLikeFromAPI = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FcpkzxWLTUfzFEr80gST/likes',
  );
  return response.json();
};

export default getLikeFromAPI;