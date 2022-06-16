export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62ab0b3907095e6e8c36b777",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-vtcyydcn",
                  apiId: "a5f239a5-1a0a-4c74-b2a3-d5dbf259e900",
                },
                {
                  buildHookId: "62ab0b3a07095e6f3036b097",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-uzy4mnj3",
                  apiId: "f48448c5-d92c-4006-bbf7-c941d3297081",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/helenula/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-uzy4mnj3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
