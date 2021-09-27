import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FeedIcon from "@mui/icons-material/Feed";
import PhotoIcon from "@mui/icons-material/Photo";
import {
  Avatar,
  CardActionArea,
  CardActions,
  CardHeader,
  CardMedia,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { usePreloadedQuery } from "react-relay";
import graphql from "babel-plugin-relay/macro";

function Dashboard({ queryRef }) {
  const data = usePreloadedQuery(
    graphql`
      query DashboardQuery ($options: PageQueryOptions){
        posts(options: $options) {
          data {
            id
            title
            body
          }
          meta {
            totalCount
          }
        }
        todos(options : {operators: {kind: LIKE,  field: "completed", value: "true"}}) {
          data {
            id
            title
            completed
          }
          meta {
            totalCount
          }
        }
        photos(options: $options) {
          data {
            id
            title
            url
          }
          meta {
            totalCount
          }
        }
      }
    `,
    queryRef
  );

  console.log(data.todos)
  useEffect(() => {
    return () => {
      queryRef.dispose();
    };
  }, []);

  return (
    <Grid container spacing={4}>
      <Grid item xs={3}>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            boxShadow: 3,
            height: "100%",
          }}
        >
          <Box>
            <ListAltIcon sx={{ fontSize: "8rem", color: "#ffd54f" }} />
            <CardContent>
              <Typography variant="h4">
                {data.todos.meta?.totalCount}
              </Typography>
              <Typography variant="h5" color="text.secondary" component="div">
                Todos
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            boxShadow: 3,
            height: "100%",
          }}
        >
          <Box>
            <FeedIcon sx={{ fontSize: "8rem", color: "#4fc3f7" }} />
            <CardContent>
              <Typography variant="h4">
                {data.posts.meta?.totalCount}
              </Typography>
              <Typography variant="h5" color="text.secondary" component="div">
                Posts
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            boxShadow: 3,
            height: "100%",
          }}
        >
          <Box>
            <PhotoIcon sx={{ fontSize: "8rem", color: "#ffcdd2" }} />
            <CardContent>
              <Typography variant="h4">
                {data.photos.meta?.totalCount}
              </Typography>
              <Typography variant="h5" color="text.secondary" component="div">
                Photos
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <CardActionArea
          sx={{ textAlign: "center", boxShadow: 3, height: "100%" }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            src={data.photos.data[0]?.url}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Latest Photo
            </Typography>
          </CardContent>
        </CardActionArea>
      </Grid>

      <Grid item xs={6}>
        <Card sx={{ boxShadow: 3 }}>
          <CardHeader
            sx={{ minHeight: "150px" }}
            title={data.posts.data[0]?.title}
          />
          <CardContent>
            <Typography sx={{ mb: "1rem" }} gutterBottom variant="body2">
              {data.posts.data[0]?.body}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Latest Post
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ boxShadow: 3 }}>
          <CardContent> 
            <List component="nav">
              {data.todos.data.map((todo) => (
                <ListItem key={todo.id} button>
                  <ListItemText primary={todo.title} />
                </ListItem>
              ))}
            </List>
            <Typography variant="body2" color="text.secondary">
              Latest Todos Completed
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
