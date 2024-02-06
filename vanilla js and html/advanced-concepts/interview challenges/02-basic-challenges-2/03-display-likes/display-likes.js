/**
 * Returns a string of who likes the post.
 * @param {string[]} names - The names of the people who like the post.
 * @returns {string} - A string of who likes the post.
 */
function displayLikes(names) {
  let message = '';
  const length = names.length;
  if (length === 0) {
    message = 'no one likes this';
  } else if (length === 1) {
    message = `${names[0]} likes this`;
  } else if (length > 1 && length < 3) {
    message = `${names[0]} and ${names[1]} like this`;
  } else if (length > 2 && length <= 3) {
    message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (length > 3) {
    message = `${names[0]}, ${names[1]} and ${length - 2} others like this`;
  }
  return message;
}

module.exports = displayLikes;
