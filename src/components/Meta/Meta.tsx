import React from "react";

interface Props {
  description: string;
  image?: string;
  title: string;
  date?: string;
}

const Meta: React.FC<Props> = ({ description, title, image, date}: Props) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />

    <meta name="author" content="Nathan Ross Powell"></meta>


    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content="Tech Blog - Nathan Ross Powell" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:locale:alternate" content="en" />


    {image ? (
      <>
        <meta name="image" content={image} />
        <meta name="twitter:image" content={image} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </>
    ) : null}

    {date ? (
      <>
        <meta property="article:published_time" content={date} />
      </>
    ) : null}
  </>
);

export default Meta;
