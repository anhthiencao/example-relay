import React, { useState } from "react";
import { QueryRenderer, useFragment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import usePage from "../../hooks/usePage";
import RelayEnvironment from "../../RelayEnvironment";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

const ListPost = (props) => {
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } =
    usePage();

  const renderQuery = ({ error, props }) => {
    if (error) {
      return <div>{error.message}</div>;
    } else if (props) {
      return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Tilte</TableCell>
                <TableCell>Body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.posts.data?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell style={{ width: 700 }} align="left">
                    {row.title}
                  </TableCell>
                  <TableCell style={{ width: 700 }} align="left">
                    {row.body}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={3}
                  count={props.posts.meta.totalCount}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      );
    }
    return <div>Loading</div>;
  };

  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={graphql`
        query ListPostsQuery($options: PageQueryOptions) {
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
        }
      `}
      variables={{
        options: {
          paginate: {
            page: page + 1,
            limit: rowsPerPage,
          },
        },
      }}
      render={renderQuery}
    />
  );
};

ListPost.propTypes = {};

export default ListPost;
