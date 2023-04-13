import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Typography } from "@mui/material";

function createData(
  Transactionid: string,
  Source: string,
  customerName: string,
  customerEmail: string,
  amount: string,
  request: string,
  status: string
) {
  return {
    Transactionid,
    Source,
    customerName,
    customerEmail,
    amount,
    request,
    status,
  };
}

const rows = [
  createData(
    "GB124QWERTY12346",
    "GTB",
    "Mike Owen",
    "0223337281",
    "230.0",
    "24.08.2021",
    "pending"
  ),
  createData(
    "GB124QWERTY12346",
    "UBA",
    "Steve O'Shassy",
    "0982764829",
    "480.0",
    "24.08.2021",
    "pending"
  ),
  createData(
    "GB124QWERTY12346",
    "GTB",
    "Mike Owen",
    "0223337281",
    "230.0",
    "24.08.2021",
    "pending"
  ),
  createData(
    "GB124QWERTY12346",
    "GTB",
    "Mike Owen",
    "0223337281",
    "230.0",
    "24.08.2021",
    "pending"
  ),
];

export default function TransactionTable() {
  return (
    <TableContainer
      sx={{ borderBottom: "1px solid rgba(240, 240, 240, 1)" }}
      component={Box}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography
                color="rgba(95, 95, 95, 1)"
                variant="subtitle1"
                fontWeight="bold"
              >
                Transaction ID
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography
                color="rgba(95, 95, 95, 1)"
                variant="subtitle1"
                fontWeight="bold"
              >
                Source
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography
                color="rgba(95, 95, 95, 1)"
                variant="subtitle1"
                fontWeight="bold"
              >
                Customer Name
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography
                color="rgba(95, 95, 95, 1)"
                variant="subtitle1"
                fontWeight="bold"
              >
                Customer Email
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography
                color="rgba(95, 95, 95, 1)"
                variant="subtitle1"
                fontWeight="bold"
              >
                Amount
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography
                color="rgba(95, 95, 95, 1)"
                variant="subtitle1"
                fontWeight="bold"
              >
                Request Date
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography
                color="rgba(95, 95, 95, 1)"
                variant="subtitle1"
                fontWeight="bold"
              >
                Status
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Transactionid}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Transactionid}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.Source}
              </TableCell>
              <TableCell align="right">{row.customerName}</TableCell>
              <TableCell align="right">{row.customerEmail}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.request}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
