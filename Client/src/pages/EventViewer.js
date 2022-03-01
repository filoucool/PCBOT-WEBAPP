import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Page from '../components/Page';

// ----------------------------------------------------------------------

const columns = [
  { id: 'EVENT', label: 'Event', minWidth: 300 },
  {
    id: 'TYPE',
    label: 'Type',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'SEVERITY',
    label: 'Severity',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'DATETIME',
    label: 'Date/Time',
    minWidth: 170,
    align: 'right'
  }
];

function createData(Event, Type, Severity, datetime) {
  return { Event, Type, Severity, datetime };
}

// const rows = [
//   createData(
//     'This is an error, a warning, a notification of any other event',
//     'Error',
//     'High',
//     '23 Dec 2020 23:38'
//   ),

export default function EventViewer() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const [EVENTS, setEVENTS] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/getEvents').then((response) => {
      setEVENTS(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <Page title="Event Viewer">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
          <Typography variant="h4" gutterBottom style={{ color: '#66fcf1' }}>
            Event Viewer
          </Typography>
        </Stack>
        <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ backgroundColor: '#1f2833' }}>
          <TableContainer sx={{ minHeight: 693 }}>
            <Table stickyHeader aria-label="sticky table" style={{ backgroundColor: '#c5c6c7' }}>
              <TableHead style={{ backgroundColor: '#c5c6c7' }}>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        color: '#fff',
                        backgroundColor: '#45a29e',
                        fontWeight: 'bolder'
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {EVENTS.map((row) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            minWidth: column.minWidth,
                            color: '#45a29e',
                            backgroundColor: '#1f2833',
                            fontSize: '1.2em',
                            fontFamily: 'monospace'
                          }}
                        >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={EVENTS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            style={{
              color: '#45a29e',
              backgroundColor: '#1f2833',
              fontSize: '1.2em',
              fontFamily: 'monospace'
            }}
          />
        </Paper>
      </Container>
    </Page>
  );
}
