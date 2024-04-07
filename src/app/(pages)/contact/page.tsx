import Contact from "@/app/components/Contact"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'お問い合わせ | Nextjs超初心者入門',
    description: 'お問い合わせページです。',
    openGraph: {
        title: 'お問い合わせ | Nextjs超初心者入門',
        description: 'お問い合わせページです。',
        url: 'http://zenn-next-demo.vercel.app',
        siteName: 'SSGブログ',
        images: [
            {
                width: '1200',
                height: '675',
                url: '<http://zenn-next-demo.vercel.app/ogp-contact.png'
            }
        ],
        locale: 'jp',
        type: 'article',
    }
}

const ContactPage = () => {
    return (
        <div>
            <Contact />
        </div>
    )
}

export default ContactPage