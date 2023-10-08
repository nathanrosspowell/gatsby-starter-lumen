import React from "react";

import { render as reactTestingLibraryRender } from "@testing-library/react";
import { StaticQuery, useStaticQuery } from "gatsby";

import * as mocks from "@/mocks";
import { testUtils } from "@/utils";

import IndexTemplate, { Head as GatsbyHead } from "./IndexTemplate";

const mockedStaticQuery = StaticQuery as jest.Mock;
const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("IndexTemplate", () => {
  const props = {
    data: {
      allMarkdownRemark: mocks.allMarkdownRemark,
    },
    pageContext: mocks.pageContext,
  };

  beforeEach(() => {
    mockedStaticQuery.mockImplementationOnce(({ render }) =>
      render(mocks.siteMetadata),
    );
    mockedUseStaticQuery.mockReturnValue(mocks.siteMetadata);
  });

  test("renders correctly", () => {
    const tree = testUtils
      .createSnapshotsRenderer(<IndexTemplate {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  /* complains about the path to an image, which is the way it's meant to be used?
  
   ● IndexTemplate › head renders correctly

    TypeError: symbol is not a function
        at String.concat (<anonymous>)

      77 |   const pageTitle = page > 0 ? `Posts - Page ${page} - ${title}` : title;
      78 |
    > 79 |   const image = url.concat(social);
         |                     ^
      80 |
      81 |   return <Meta title={pageTitle} description={subtitle} image={image}/>;
      82 | }; 
  
  test("head renders correctly", () => {
    reactTestingLibraryRender(<GatsbyHead {...props} />);

    expect(testUtils.getMeta("twitter:card")).toEqual("summary_large_image");
    expect(testUtils.getMeta("twitter:title")).toEqual(
      "Posts - Page 2 - Blog by Nathan Ross Powell",
    );
    expect(testUtils.getMeta("og:title")).toEqual(
      "Posts - Page 2 - Blog by Nathan Ross Powell",
    );
    expect(testUtils.getMeta("description")).toEqual(
      "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.",
    );
    expect(testUtils.getMeta("twitter:description")).toEqual(
      "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.",
    );
    expect(testUtils.getMeta("og:description")).toEqual(
      "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.",
    );
  });
  */
});
