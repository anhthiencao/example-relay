import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FeedIcon from "@mui/icons-material/Feed";
import PhotoIcon from "@mui/icons-material/Photo";
import { Typography } from "@mui/material";
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
        {totalType.map((item) => (
          <Grid key={item.key} item xs={4}>
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
                <CardContent>
                  {item.icon}
                  <Typography variant="h4">
                    {props[item.key].meta?.totalCount}
                  </Typography>
                  <Typography
                    variant="h5"
                    color="text.secondary"
                    component="div"
                  >
                    {item.name}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
  return <div>Loading</div>;
};

function TotalCount({ type }) {
  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={graphql`
        query TotalCountItemQuery($options: PageQueryOptions) {
          posts(options: $options) {
            meta {
              totalCount
            }
          }
          photos(options: $options) {
            meta {
              totalCount
            }
          }
          todos(options: $options) {
            meta {
              totalCount
            }
          }
        }
      `}
      variables={{
        options: {},
      }}
      render={renderTotalQuery}
    />
  );
}

export default TotalCount;
