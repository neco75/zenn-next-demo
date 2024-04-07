import Link from "next/link"
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

interface TBlog {
    id: string;
    title: string;
    content: string;
}

const getBlogData = async () => {
    const res = await fetch('http://localhost:3000/api/blog')

    const blogData = await res.json()

    return blogData
}

const BlogPage = async () => {

    const blogData = await getBlogData()

    return (
        <div className="container mx-auto py-[50px]">
            <div className="grid grid-cols-12 gap-3">
                {blogData.map((blog: TBlog) => (
                    <div className="col-span-4 border border-black rounded p-5" key={blog.id}>
                        <Link href={`/blog/${blog.id}`} className="w-full">
                            <h2>{blog.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogPage