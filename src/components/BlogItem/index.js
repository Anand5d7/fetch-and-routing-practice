// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, id, imageUrl, avatarUrl, topic, author} = blogDetails

  return (
    <li className="blogs-list">
      <Link to={`/blogs/${id}`} className="blogs-list-link">
        <div className="list-item">
          <img src={imageUrl} alt={`item${id}`} className="image" />
          <div className="item-content">
            <p className="para">{topic}</p>
            <h1 className="heading">{title}</h1>
            <div className="user-container">
              <img src={avatarUrl} alt={`avatar${id}`} className="avatar-pic" />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
