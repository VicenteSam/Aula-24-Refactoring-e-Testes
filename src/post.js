const createPostSlug = (title = "") =>
  title
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

const isValidPost = ({ title, content }) =>
  Boolean(title?.trim() && content?.trim());

const filterPublishedPosts = (posts = []) =>
  posts.filter(({ status }) => status === "published");

module.exports = {
  createPostSlug,
  isValidPost,
  filterPublishedPosts,
};
