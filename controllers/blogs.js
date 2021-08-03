const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs)
  })
})

blogRouter.get('/:id', (request, response, next) => {
  Blog.findById(request.params.id)
    .then((blog) => {
      if (blog) {
        response.json(blog)
      } else {
        response.status(404).end()
      }
    })
    .catch((error) => next(error))
})

blogRouter.post('/', (request, response, next) => {
  const body = request.body
  if (body.content === undefined) {
    return response.status(400).json({
      error: 'content is missing',
    })
  }
  const blog = new Blog({
    title: body.title,
    author: body.author,
    content: body.content,
    image: body.image,
  })
  blog
    .save()
    .then((savedBlog) => {
      response.json(savedBlog)
    })
    .catch((error) => next(error))
})

blogRouter.delete('/:id', (request, response, next) => {
  Blog.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end()
    })
    .catch((error) => next(error))
})

module.exports = blogRouter
