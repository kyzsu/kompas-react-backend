import HeadlineThumbArticles from '../../data/articles/headlineThumb';

export default (req, res) => {
  res.statusCode = 200;
  res.json(HeadlineThumbArticles);
};
