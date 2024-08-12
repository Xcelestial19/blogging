import React, { useState } from 'react'
import {DUMMY_POSTS} from '../data'

const Dashboard = () => {

  const [posts, setPosts] = useState(DUMMY_POSTS)

  return (
    <section className="dashboard">
      {
        posts.length ? <div className="container dashboard__container">
        {
          posts.map(post => {
            return <article key={post.id} className='dashboard__post' >
              <div className="dashboard__post-info">
                <div className="dashboard__post-thumbnail">
                  
                </div>
              </div>
              <div className="dashboard__post-actions"></div>
            </article>
        })
        }
        </div> : <h2 className="center">You have no posts yet.</h2>
      }
    </section>
  )
}

export default Dashboard