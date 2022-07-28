const validarParams = (req, res, next) => {
  const { text } = req.query
  if( !text ){
    return res.status(400).json({error: 'Tiene que mandar la palabra text es obligatorio'})
  }
  if( text.length < 2 ){
    return res.status(400).json({error: 'Tiene que mandar mas de 1 caracter!!'})
  }
  next();
}

module.exports = {
  validarParams
}