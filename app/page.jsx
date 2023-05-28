import list from '../public/postsdata'
import Post from '@/components/Post'

const page = () => {
  return (
    <section>
      {list.map((postItem) => (
        <Post key={postItem.id} postItem={postItem}  />
      ))}

    </section>
  )
}

export default page