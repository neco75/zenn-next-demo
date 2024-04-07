import NotFound from "@/app/not-found"
import { Metadata } from "next"

export const metadata: Metadata= {
  title: 'Nextjs超初心者入門',
  description: 'SSR,SSG,ISRでブログを作成する。',
  openGraph: {
    title: 'Nextjs超初心者入門',
    description: 'SSR, SSG, ISRブログを作成する。',
    url: '<サイトのurl>',
    siteName: 'SSGブログ',
    images: [
      {
        width: '1200',
        height: '675',
        url: '<サイトのurl>/ogp-home.png'
      }
    ],
    locale: 'jp',
    type: 'article',
  }
}

const getBlogArticle = async (id: string) => {
  const res = await fetch('http://localhost:3000/api/blog/'+id,{ cache: 'no-store' })

  const blogArticle = await res.json()

  if(res.status === 404){
    return "NotFound"
  }

  return blogArticle
}

const BlogArticlePage = async ({ params }: { params: { id: string } }) => {

  const blogArtcile = await getBlogArticle(params.id)

  if(blogArtcile === "NotFound"){
    return <NotFound />
  }

  return (
    <div className="container mx-auto py-5">
      <h2 className="text-[50px]">{blogArtcile.title}</h2>
      <p>{blogArtcile.content}</p>
    </div>
  )
}

export default BlogArticlePage