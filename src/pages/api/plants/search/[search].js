import Cors from 'cors'
import axios from 'axios'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors)

  const { query: { search } } = req

  const url = `https://trefle.io/api/v1/plants/search?q=${search}&token=wSkc_R6AF0mUZ34uVC22fOoxu7BNjQ2Zl1MhTrmRFRg`

  axios.get(url)
  .then(response => {
    res.send(response.data.data)
  })
  .catch(error => {
    res.send(error)
  })
}
