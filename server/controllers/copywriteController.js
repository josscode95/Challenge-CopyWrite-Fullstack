
const getReverseFn = (req, res) => {
  const { text } = req.query
  const response = text.split("").reverse().join("")
  if( text === response ) return res.json({text:response, "palindrome": true})
  res.json({text:response})
}

module.exports = {
  getReverseFn
}