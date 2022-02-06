const commentCounter = (item) => {
  if (item.length) {
    return item.length;
  } else {
    return 0;
  }
};

export default commentCounter;