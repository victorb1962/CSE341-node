const helloFunction = (req, res, next) => {
  res.json('Victor Boxall');
};

const displayJoke = (req, res, next) => {
  res.json('How did the telephone propose to his girlfriend? ...he gave her a ring.');
};

module.exports = {
  helloFunction, 
  displayJoke
};
