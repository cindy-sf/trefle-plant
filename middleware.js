function cors(req, res, next) {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE, PUT',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'User-Agent, Keep-Alive, Content-Type',
  })

  next()
}

module.exports = cors
