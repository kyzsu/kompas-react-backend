import VIKArticles from '../../data/articles/VIK';

export default (req, res) => {
  res.statusCode = 200;
  res.json(VIKArticles);
};
