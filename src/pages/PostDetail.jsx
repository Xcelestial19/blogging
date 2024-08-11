import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius illo veritatis, autem est quod numquam dolorum ducimus itaque excepturi voluptatibus alias vero, tenetur fuga incidunt facilis dolorem cum ab necessitatibus. Expedita illo repellendus molestias nam perspiciatis voluptatem eius doloribus.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis velit ut doloremque reprehenderit, perspiciatis mollitia adipisci repellendus quo, exercitationem ab nobis at repudiandae quasi doloribus cupiditate maiores a quod possimus similique? Repellendus voluptates voluptatem quisquam obcaecati similique quis deserunt nesciunt deleniti dolores. Odit vel et ad alias debitis in deserunt! Sed, officia obcaecati? Quidem, vero.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quia rerum iusto unde aperiam possimus ipsa alias labore ab officiis, eaque, iste accusamus? Esse quae aliquam dolorem reprehenderit sed veniam harum, fugiat architecto voluptas, ex nesciunt aut iste est, minus doloremque. Maxime, quas inventore reprehenderit fuga aliquam neque possimus quidem tenetur laudantium ut officiis quia corrupti id dolores illo sint odit doloribus nisi. Deleniti corporis odit explicabo dolores odio delectus iusto, earum nisi commodi! Aspernatur fugit quod, dolor alias corporis adipisci fuga placeat. Ab, perspiciatis minima. Voluptate rerum id libero accusamus laborum veritatis eos cum ipsam architecto explicabo delectus consequuntur obcaecati, assumenda placeat minima pariatur alias velit! Esse obcaecati amet nulla.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio modi magni eligendi, dolores quos nisi praesentium voluptates eveniet sunt ipsa.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, fugit! Voluptatem, officia provident laboriosam cumque quisquam tenetur fuga aliquid saepe soluta repellendus rem recusandae voluptate suscipit iusto magnam dolorem, dolores quod repudiandae eligendi. Nobis, qui. Ipsa assumenda labore obcaecati ipsam minus quam ad amet provident adipisci reiciendis vero illo id cum in sit deserunt dolorum quas odit doloremque nam itaque, impedit quis autem facilis. Veniam voluptatum maiores itaque, dolores tempora nemo est atque corporis neque maxime autem deserunt minus fugit sed nulla, ad qui voluptatibus consequuntur quas odio tempore veritatis! Beatae quod voluptate perferendis vero. Expedita non officia autem inventore quidem numquam, blanditiis fuga quibusdam. Dolores dolor, totam autem distinctio sunt magnam quod tenetur ea nesciunt eaque quam necessitatibus expedita deserunt architecto! Laudantium sint libero voluptatem eaque vel repudiandae ab soluta? Quos possimus maiores ab? Non ut vero, eum praesentium expedita ipsa repellendus voluptates molestiae aliquam. Cum itaque voluptas inventore ad veritatis! Aspernatur, itaque. Praesentium officiis quos cumque quas, tempore, eaque ratione possimus labore facere mollitia veniam! Doloribus rem voluptatum ipsa tempora repellat beatae debitis inventore voluptates rerum est ex omnis officiis ullam pariatur dolore voluptate, magni aspernatur ut accusamus optio! Adipisci explicabo laudantium rem? Praesentium modi consequatur voluptatum commodi.</p>
      </div>
    </section>
  )
}

export default PostDetail