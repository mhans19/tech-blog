// DEPENDENCIES
const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post, User, Comment } = require('../models');
// GET ALL FOR DASHBOARD
router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'title',
      'body',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 
                     'comment_text', 
                     'post_id', 
                     'user_id', 
                     'created_at'
                    ],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      // serialize data before passing to template
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Post.findOne({
      where: {
          id: req.params.id
      },
      attributes: [
          'id',
          'title',
          'body',
          'created_at'
      ],
      include: [{
              model: Comment,
              attributes: ['id', 
                           'comment_text', 
                           'post_id', 
                           'user_id', 
                           'created_at'
                          ],
              include: {
                  model: User,
                  attributes: ['username']
              }
          },
          {
              model: User,
              attributes: ['username']
          }
      ]
  })
  .then(dbPostData => {
      const post = dbPostData.get({ plain: true });
  
      res.render('edit-post', {
          post,
          loggedIn: true
      });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});
// EXPORT MODULE
module.exports = router;