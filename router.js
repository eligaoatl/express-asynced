// Promise express
const endpoint = 'https://jsonplaceholder.typicode.com/posts/1';
app.get('/',(req,res) => {
  PromiseBasedDataRequest(endpoint).then(data => {
    const { title, body } = data;
    req.render('post', { title, body });
  })
})


// Async await express router
// https://github.com/geoffdavis92/express-async-await-middleware

const endpoint = 'https://jsonplaceholder.typicode.com/posts/1';
const asyncMiddleware = async (req,res,next) => {
  const data = await PromiseBasedDataRequest(endpoint);
  req.data = data.json()
  next()
}

app.get('/', asyncMiddleware, (req,res) => {
  const { title, body } = req.data;
  req.render('post', { title, body });
})
