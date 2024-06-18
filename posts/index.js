const express = require('express');
const router = express.Router();

const app = express();
app.use(express.json());
const posts = []
router.get('/posts', async (req, res) => {
  try {
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/posts', async (req, res) => {
    console.log(req.body)
  try {
    let post ={
        id : Math.random(),
        title : req.body.title
    };
    posts.push(post)
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.use(router);

app.listen(3000,() => {
    console.log('app is running on localhost:3000')
})
module.exports = router;