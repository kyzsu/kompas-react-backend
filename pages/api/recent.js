import recentArticles from '../../data/articles/recent';

export default (req, res) => {
  res.statusCode = 200;
  res.json(recentArticles);
};
