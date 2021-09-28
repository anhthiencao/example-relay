import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FeedIcon from "@mui/icons-material/Feed";
import PhotoIcon from "@mui/icons-material/Photo";
import {
  CardActionArea,
  CardActions,
  CardHeader,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { QueryRenderer } from "react-relay";
import RelayEnvironment from "../../../RelayEnvironment";
import getTotalQueryType from "../../../relay/Total";
import { graphql } from "babel-plugin-relay/macro";

const totalType = [
  {
    key: "todos",
    name: "Todos",
    icon: <ListAltIcon sx={{ fontSize: "8rem", color: "#ffd54f" }} />,
  },
  {
    key: "posts",
    name: "Posts",
    icon: <FeedIcon sx={{ fontSize: "8rem", color: "#4fc3f7" }} />,
  },
  {
    key: "photos",
    name: "Photos",
    icon: <PhotoIcon sx={{ fontSize: "8rem", color: "#ffcdd2" }} />,
  },
];

const renderTotalQuery = ({ error, props }) => {
  console.log(props);
  if (error) {
    return <div>{error.message}</div>;
  } else if (props) {
    return (
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <CardActionArea
            sx={{ textAlign: "center", boxShadow: 3, height: "100%" }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              src={props.photos.data[0]?.url}
              sx={{ height: "300px" }}
            />
            <CardActions>
              <Typography variant="body2" color="text.secondary">
                Latest Photo
              </Typography>
            </CardActions>
          </CardActionArea>
        </Grid>

        <Grid item xs={4}>
          <Card sx={{ height: "100%", boxShadow: 3 }}>
            <Box sx={{minHeight: '300px'}}>
              <CardHeader title={props.posts.data[0]?.title} />
              <CardContent sx={{ height: "150px" }}>
                <Typography sx={{ mb: "1rem" }} gutterBottom variant="body2">
                  {props.posts.data[0]?.body}
                </Typography>
              </CardContent>
            </Box>
            <CardActions>
              <Typography variant="body2" color="text.secondary">
                Latest Post
              </Typography>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ height: "100%", boxShadow: 3 }}>
            <CardContent py={0} sx={{minHeight: '300px'}}>
              <List component="nav">
                {props.todos.data.map((todo) => (
                  <ListItem key={todo.id} button>
                    <ListItemText primary={todo.title} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <CardActions>
              <Typography variant="body2" color="text.secondary">
                Latest Totos Completed
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }
  return <div>Loading</div>;
};

function LatestItem({ type }) {
  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={graphql`
        query LatestItemQuery($options: PageQueryOptions) {
          posts(options: $options) {
            data {
              id
              title
              body
            }
          }
          photos(options: $options) {
            data {
              id
              title
              url
            }
          }
          todos(
            options: {
              sort: { field: "id", order: DESC }
              operators: { kind: LIKE, field: "completed", value: "true" }
              paginate: { page: 1, limit: 5 }
            }
          ) {
            data {
              id
              title
              completed
            }
          }
        }
      `}
      variables={{
        options: {
          sort: {
            field: "id",
            order: "DESC",
          },
          paginate: {
            page: 1,
            limit: 1,
          },
        },
      }}
      render={renderTotalQuery}
    />
  );
}

export default LatestItem;
