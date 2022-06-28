import React, { useContext, useEffect, useState } from 'react';
import './Table.css'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import axios from '../../../axios';
import { LoadingContext } from '../../../AppContext';
import Load from '../../Loader/Load'
import stableSort from './stableSort';
import getComparator from './getComparator';
import { tableBodyData } from '../../../Data/Data';

export default function EnhancedTable({ route, component }) {
    const [order, setOrder] = useState('desc');
    const [orderBy, setOrderBy] = useState('createdAt');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [rows, setRows] = useState([])
    const [modalDetails, setModalDetails] = useState(null)
    const [tableBody, setTableBody] = useState([])
    const [showModal, setShowModal] = useState(false)
    const { loading, setLoading } = useContext(LoadingContext)

    useEffect(() => {
        setLoading(true)
        axios.get(route)
            .then(res => {
                setRows(res.data)
                tableBodyData.forEach((data) => {
                    if (data.id === route) setTableBody(data.bodyData)
                })
                setLoading(false)
            }).catch(err => {
                alert(err + "")
            })
        return () => {
            setRows([])
            setLoading(false)
            setTableBody([])
        }
    }, [showModal, route])


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const handleOrder = (order) => {
        setModalDetails(order)
        setShowModal(true)
    }

    const handleShow = () => {
        setModalDetails(null)
        setShowModal(!showModal)
    }

    const Component = component //modal to show individual component

    const isSelected = (id) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <div className="admin-table">
            {
                showModal &&
                <Component data={modalDetails} handleShow={handleShow} />
            }
            <Box sx={{ width: '100%' }}>
                <Paper sx={{ mb: 2 }}>
                    <EnhancedTableToolbar
                        numSelected={selected.length}
                        title={route} />
                    <TableContainer sx={{ overflowX: 'auto', minHeight: '120px' }}>
                        {
                            loading ? <Load /> :
                                <Table
                                    sx={{ minWidth: '100%', width: 'max-content' }}
                                    aria-labelledby="tableTitle"
                                    size={dense ? 'small' : 'medium'}
                                >
                                    <EnhancedTableHead
                                        numSelected={selected.length}
                                        order={order}
                                        orderBy={orderBy}
                                        onSelectAllClick={handleSelectAllClick}
                                        onRequestSort={handleRequestSort}
                                        rowCount={rows.length}
                                        title={route}
                                    />

                                    <TableBody>
                                        {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                                        {stableSort(rows, getComparator(order, orderBy))
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row, index) => {
                                                const isItemSelected = isSelected(row.id);
                                                const labelId = `enhanced-table-checkbox-${index}`;
                                                const createdAt = new Date(row.createdAt)
                                                    .toLocaleString('en-IN',
                                                        { dateStyle: 'short', timeStyle: 'short' })
                                                return (
                                                    <TableRow
                                                        hover
                                                        role="checkbox"
                                                        aria-checked={isItemSelected}
                                                        tabIndex={-1}
                                                        key={index}
                                                        selected={isItemSelected}
                                                    >
                                                        <TableCell padding="checkbox">
                                                            <Checkbox
                                                                onClick={(event) => handleClick(event, row.id)}
                                                                color="primary"
                                                                checked={isItemSelected}
                                                                inputProps={{
                                                                    'aria-labelledby': labelId,
                                                                }}
                                                            />
                                                        </TableCell>
                                                        <TableCell
                                                            component="th"
                                                            id={labelId}
                                                            scope="row"
                                                            padding="none"
                                                            className='admin-table-order'
                                                            onClick={() => { handleOrder(row) }}
                                                        >
                                                            {row[tableBody[0]]}
                                                        </TableCell>
                                                        <TableCell align="left">{row[tableBody[1]]}</TableCell>
                                                        <TableCell align="left">{row[tableBody[2]]}</TableCell>
                                                        {
                                                            route !== 'customers' &&
                                                            <TableCell align="left">{row[tableBody[3]]}</TableCell>
                                                        }
                                                        <TableCell align="left">{createdAt}</TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        {emptyRows > 0 && (
                                            <TableRow
                                                style={{
                                                    height: (dense ? 33 : 53) * emptyRows,
                                                }}
                                            >
                                                <TableCell colSpan={6} />
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                        }
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
                <FormControlLabel
                    sx={{ marginLeft: '5px' }}
                    control={
                        <Switch
                            Ichecked={dense}
                            onChange={handleChangeDense}
                        />
                    }
                    label="Dense padding"
                />
            </Box>
        </div>
    );
}
