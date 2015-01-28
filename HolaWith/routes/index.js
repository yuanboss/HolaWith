var express = require('express');
var router = express.Router();
var data = {
  "data": [
    {
      "name": "百事可乐",
      "license": "12330393",
      "email": "1229084233@qq.com",
      "status": "已通过",
    },
    {
      "name": "百事可乐",
      "license": "12330393",
      "email": "1229084233@qq.com",
      "status": "已通过",
    },
    {
      "name": "百事可乐",
      "license": "12330393",
      "email": "1229084233@qq.com",
      "status": "已通过",
    },
    {
      "name": "百事可乐",
      "license": "12330393",
      "email": "1229084233@qq.com",
      "status": "已通过",
    },
    {
      "name": "百事可乐",
      "license": "12330393",
      "email": "1229084233@qq.com",
      "status": "已通过",
    },
    ]
}


test = {
  "data": [
    {
      "name": "百事可乐",
      "license": "12330393",
      "email": "1229084233@qq.com",
      "status": "已通过",
    },
    {
      "name": "百事可乐",
      "license": "12330393",
      "email": "1229084233@qq.com",
      "status": "已通过",
    }
  ]
}

review = {
    "data": [
      {
        "name": "百事可乐",
        "license": "12330393",
        "id": "214234",
        "email": "1229084233@qq.com",
        "status": "待审核",
      },
      {
        "name": "可口可乐",
        "license": "12330394",
        "id": "214234",
        "email": "1229084233@qq.com",
        "status": "待审核",
      },
      {
        "name": "百事可乐",
        "license": "12330395",
        "id": "214234",
        "email": "1229084233@qq.com",
        "status": "待审核",
      },
      {
        "name": "百事可乐",
        "license": "12330396",
        "id": "214234",
        "email": "1229084233@qq.com",
        "status": "待审核",
      },
      {
        "name": "百事可乐",
        "license": "12330397",
        "id": "214234",
        "email": "1229084233@qq.com",
        "status": "待审核",
      }
      ]
}

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/test', function(req, res) {
  res.render('test');
});

router.get('/alluser', function(req, res) {
    res.json(data);
});

router.post('/:id/delete', function(req, res) {
    id = req.body.id;
    res.send('success');
});

router.get('/common', function(req, res) {
  res.render('common-user');
});

router.get('/review', function(req, res) {
  res.render('bussiness-review');
});

router.get('/allreview', function(req, res) {
  res.json(review);
})

router.post('/:id/accept', function(req, res) {
    id = req.body.id;
    res.send('success');
});

router.post('/:id/refuse', function(req, res) {
    id = req.body.id;
    res.send('success');
});

router.get('/raider', function(req, res) {
  res.render("raiders-release");
})

router.get('/raider-detail', function(req, res) {
  res.render("raiders-detail");
})

module.exports = router;
