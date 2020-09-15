import DiscoverLists from '../../data/articles/discover';

export default (req, res) => {
  res.statusCode = 200;
  res.json(DiscoverLists);
};
