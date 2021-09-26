import React, { useEffect, useState } from "react";
import "./App.css";
import { RelayEnvironmentProvider, useQueryLoader } from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import SideBar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { Typography } from "@mui/material";
import ListTodo from "./pages/ListTodo";
import ListPost from "./pages/ListPost";
import ListPhoto from "./pages/ListPhoto";
import Dashboard from "./pages/Dashboard";
import { usePreloadedQuery } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { loadQuery } from "react-relay";
import { getTitle } from "./common/helper";
const DashboardQuery = require("./pages/__generated__/DashboardQuery.graphql");

const { Suspense } = React;

const initDashboardQueryRef = loadQuery(RelayEnvironment, DashboardQuery, {
  options: {
    sort: {
      field: "id",
      order: "DESC",
    },
  },
});

const appQuery = graphql`
  query AppQuery($options: PageQueryOptions) {
    posts(options: $options) {
      ...ListPostSection_post
    }
    todos(options: $options) {
      ...ListTodoSection_todo
    }
    photos(options: $options) {
      ...ListPhotoSection_photo
    }
  }
`;

const HeaderContent = () => {
  const location = useLocation();
  const title = getTitle(location.pathname);

  return (
    <Typography variant="h5" gutterBottom>
      {title}
    </Typography>
  );
};

const App = () => {
  const [appQueryRef, loadAppQuery] = useQueryLoader(
    appQuery,
    initDashboardQueryRef
  );
  const data = usePreloadedQuery(appQuery, appQueryRef);

  useEffect(() => {
    loadAppQuery({});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <HeaderContent />
          <Switch>
            <Route exact path="/">
              <Dashboard queryRef={initDashboardQueryRef} />
            </Route>
            <Route path="/todo">
              {appQueryRef !== null && data?.todos && (
                <ListTodo todos={data?.todos} />
              )}
            </Route>
            <Route path="/post">
              {appQueryRef !== null && data?.posts && (
                <ListPost posts={data?.posts} />
              )}
            </Route>
            {appQueryRef !== null && data?.photos && (
              <ListPhoto photos={data?.photos} />
            )}
            <Route path="/photo"></Route>
          </Switch>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
