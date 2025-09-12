import Link from 'next/link'
import { posts } from '../../lib/posts'

export default function Blog(){
  return (
    <div className="page">
      <main className="container" style={{padding:'60px 20px'}}>
        <h1>Blog</h1>
        <div style={{display:'grid',gap:16}}>
          {posts.map(p => (
            <article key={p.slug} style={{padding:16,background:'rgba(255,255,255,0.03)',borderRadius:8}}>
              <h3><Link href={'/blog/'+p.slug}><a style={{color:'#00ffe7'}}>{p.title}</a></Link></h3>
              <p style={{color:'#bbb'}}>{p.excerpt}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
