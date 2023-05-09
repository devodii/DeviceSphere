import { Helmet } from "react-helmet";

interface Prop {
    title: string,
    description: string,
    keywords: string
}
const MetaTags = ({ title, description, keywords}: Partial<Prop>) => {
  return (
    <Helmet>
          <title>{ title }</title>
          <meta name="descripton" content={description} />
          <meta name="keywords" content={keywords} />
    </Helmet>
  )
}

export default MetaTags
