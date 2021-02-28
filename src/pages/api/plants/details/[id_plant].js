import Cors from 'cors'
import axios from 'axios'

const cors = Cors({
  methods: ['GET'],
})

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

  const { query: { id_plant } } = req

  console.log('inside api handler', id_plant)

  const url = `https://trefle.io/api/v1/plants/${id_plant}?token=wSkc_R6AF0mUZ34uVC22fOoxu7BNjQ2Zl1MhTrmRFRg`

  axios
  .get(url)
  .then(response => {
    res.send(response.data.data)
  })
  .catch(error => {
    res.send(error)
  })
}
