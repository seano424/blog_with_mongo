const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
  {
    author: 'Sean O',
    title: 'trial blog 1',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ducimus veritatis eius voluptate quaerat expedita aliquid labore ea adipisci laboriosam.',
  },
  {
    author: 'Michael O',
    title: 'trial blog 2',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ducimus veritatis eius voluptate quaerat expedita aliquid labore ea adipisci laboriosam.',
  },
]

const nonExistingId = async () => {
  const blog = new Blog({
    author: 'Stephanie R',
    title: 'trial blog 3',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ducimus veritatis eius voluptate quaerat expedita aliquid labore ea adipisci laboriosam.',
  })
  await blog.save()
  await blog.remove()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map((blog) => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map((u) => u.toJSON())
}

module.exports = {
  initialBlogs,
  nonExistingId,
  blogsInDb,
  usersInDb,
}
