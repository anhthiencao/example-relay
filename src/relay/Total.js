import { graphql } from "babel-plugin-relay/macro";

// Define a query
const queryTotalTodos = graphql`
  query TotalTodosQuery($options: PageQueryOptions) {
    todos(options: $options) {
      meta {
        totalCount
      }
    }
  }
`;

const queryTotalPosts = graphql`
  query TotalPostsQuery($options: PageQueryOptions) {
    posts(options: $options) {
      meta {
        totalCount
      }
    }
  }
`;

const queryTotalPhotos = graphql`
  query TotalPhotosQuery($options: PageQueryOptions) {
    photos(options: $options) {
      meta {
        totalCount
      }
    }
  }
`;

const getTotalQueryType = (key) => {
  switch (key) {
    case "todos":
      return queryTotalTodos;
    case "posts":
      return queryTotalPosts;
    case "photos":
      return queryTotalPhotos;
    default:
      break;
  }
};

export default getTotalQueryType;
