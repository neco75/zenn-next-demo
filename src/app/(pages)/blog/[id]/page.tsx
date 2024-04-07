import NotFound from "@/app/not-found"
import { Metadata } from "next"

export const metadata: Metadata= {
  title: 'Nextjs超初心者入門',
  description: 'SSR,SSG,ISRでブログを作成する。',
  openGraph: {
    title: 'Nextjs超初心者入門',
    description: 'SSR, SSG, ISRブログを作成する。',
    url: 'https://zenn-next-demo-levtddqh1-neco75s-projects.vercel.app',
    siteName: 'SSGブログ',
    images: [
      {
        width: '1200',
        height: '675',
        url: 'https://zenn-next-demo-levtddqh1-neco75s-projects.vercel.app/ogp-home.png'
      }
    ],
    locale: 'jp',
    type: 'article',
  }
}

const getBlogArticle = async (id: string) => {
  const res = await fetch('https://zenn-next-demo.vercel.app/api/blog/'+id,{ cache: 'no-store' })

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