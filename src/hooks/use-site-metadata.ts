import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          author {
            bio
            pronouns
            name
            photo
            contacts {
              rss
              line
              email
              weibo
              gitlab
              medium
              github
              twitter
              codepen
              youtube
              facebook
              linkedin
              telegram
              instagram
              soundcloud
              mastodon
            }
          }
          menu {
            path
            label
          }
          url
          title
          subtitle
          copyright
          disqusShortname
          image
        }
      }
    }
  `);

  return site?.siteMetadata || {};
};

export default useSiteMetadata;
