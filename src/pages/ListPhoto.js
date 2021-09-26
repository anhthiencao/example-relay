import React from "react";
import { useFragment } from "react-relay";
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
import TablePaginationActions from "../components/TablePaginationActions";
import usePage from "../hooks/usePage";


const ListPhoto = (props) => {
  const listPhoto = useFragment(
    graphql`
      fragment ListPhotoSection_photo on PhotosPage {
        data {
          id
          title
          url
          album {
            id
          }
        }
        meta {
          totalCount
        }
      }
    `,
    props.photos
  );

  const rows = listPhoto?.data

  const {emptyRows, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage} = usePage(rows)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Tilte</TableCell>
            <TableCell>Url</TableCell>
            <TableCell>Album</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell style={{ width: 700 }} align="left">
                {row.title}
              </TableCell>
              <TableCell style={{ width: 700 }} align="left">
                {row.url}
              </TableCell>
                <TableCell style={{ width: 700 }} align="left">
                  {row.album?.id}
                </TableCell>  
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
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
};

ListPhoto.propTypes = {};

export default ListPhoto;
