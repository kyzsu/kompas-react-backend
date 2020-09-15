import headlinesItems from '../../data/articles/headlines';

export default (req, res) => {
  res.statusCode = 200;
  res.json(headlinesItems);
};
