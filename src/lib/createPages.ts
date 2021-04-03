import { CreatePagesArgs } from 'gatsby';
import path from 'path';

const pages = [
  { id: 1, content: 'Gatsby 로 블로그 만들기' },
  { id: 2, content: '거기에 타입스크립트 적용 해 보기' },
  { id: 3, content: '확실히 어렵네요' },
];

export async function createPages({ actions, graphql }: CreatePagesArgs) {
  const { createPage } = actions;

  const { data, errors } = await graphql<any, any>(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (errors) {
    throw errors;
  }

  data.allMarkdownRemark.edges.forEach(({ node }: any) => {
    createPage({
      path: node.frontmatter.title,
      context: {
        html: node.html,
        title: node.frontmatter.title,
      },
      component: path.resolve(__dirname, '../templates/PostTemplate.tsx'),
    });
  });
}
