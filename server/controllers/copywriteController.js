
const { Search } = require('../models/search');
const search = new Search();

const getReverseFn = (req, res) => {
  const { text } = req.query
  const response = text.split("").reverse().join("")
  if( text === response ){
    const resp = search.addSearch({text:response, "palindrome": true})
    return res.json(resp)
  }
  const resp = search.addSearch({text:response})
  res.json(resp)
}

const allSearch = (req, res) => {
  const resp = search.getSearch()
  res.json(resp)
}

module.exports = {
  getReverseFn,
  allSearch
}