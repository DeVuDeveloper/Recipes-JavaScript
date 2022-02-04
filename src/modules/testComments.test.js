import commentCounter from './commentCounter.js';
import commentsDataFromAPI from './mockCommentsData.js';

describe('Testing counter function', () => {
  test(' if it gives right numbers of comments', () => {
    const data = commentsDataFromAPI;

    const comments = commentCounter(data);

    expect(comments).toBe(4);
  });

  test('if it gives right username', () => {
    const data = commentsDataFromAPI;

    const comments = commentCounter(data);

    for (let i = 0; i < comments; i += 1) {
      return comments[i];
    }

    expect(comments[0].username).toBe('Jane');
    return comments[i];
  });

  test('if it gives right comment', () => {
    const data = commentsDataFromAPI;

    const comments = commentCounter(data);

    for (let i = 0; i < comments; i += 1) {
      return comments[i];
    }

    expect(comments[4].comment).toBe('I want one Kedgeree.');
    return comments[i];
  });
});
