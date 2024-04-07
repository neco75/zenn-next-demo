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

const AboutPage = () => {
    return (
      <div className="text-[50px]">About</div>
    )
  }
  
  export default AboutPage