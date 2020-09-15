import gramediaAds from '../../data/articles/gramedia';

export default (req, res) => {
  res.statusCode = 200;
  res.json(gramediaAds);
};
