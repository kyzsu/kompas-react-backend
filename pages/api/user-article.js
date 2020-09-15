import userArticles from '../../data/articles/user';

export default (req, res) => {
  res.statusCode = 200;
  res.json(userArticles);
};
