import featuredArticles from '../../data/articles/featured';

export default (req, res) => {
  res.statusCode = 200;
  res.json(featuredArticles);
};
