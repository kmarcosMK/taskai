import { posts } from '../../lib/posts'

export default function Post({post}){
  if(!post) return <div className="container" style={{padding:40}}>Post nie znaleziony.</div>
  return (
    <div className="page">
      <main className="container" style={{padding:'60px 20px'}}>
        <h1>{post.title}</h1>
        <p style={{color:'#999'}}>{post.date}</p>
        <div dangerouslySetInnerHTML={{__html: post.content}} />
      </main>
    </div>
  )
}

export async function getStaticPaths(){
  const paths = posts.map(p => ({ params: { slug: p.slug } }))
  return { paths, fallback: false }
}

export async function getStaticProps({params}){
  const post = posts.find(p => p.slug === params.slug) || null
  return { props: { post } }
}
