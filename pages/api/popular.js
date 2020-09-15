import popularArticles from '../../data/articles/popular';

export default (req, res) => {
  res.statusCode = 200;
  res.json(popularArticles);
};
