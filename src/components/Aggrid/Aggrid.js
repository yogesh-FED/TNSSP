import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './aggrid.scss';
import Popup from '../Popup/Popup';
import Table from 'react-bootstrap/Table';
import { Card, ListGroup, Container, Row, Col, Form } from 'react-bootstrap';

const Aggrid = () => {
  const [gridApi, setGridApi] = useState(null);
  const [columnApi, setColumnApi] = useState(null);
  const [showPop, setShowPop] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);
  const paginationPageSizeSelector = useMemo(() => {
    return [1, 2, 5, 10];
  }, []);

  const onGridReady = params => {
    setGridApi(params.api);
    setColumnApi(params.columnApi);
  };
  const exportToExcel = () => {
    gridApi.exportDataAsExcel({
      fileName: 'grid-data.xlsx',
      sheetName: 'Data'
    });
  };
  const [rowData, setRowData] = useState([
    { 
      flex: 1,
      SNo: 1, 
      Scheme_Name: 'Central Scheme-Post-Matric Scholarship(ST)', 
      Applied_On: '12/03/2023',
      Academic_Year: '2023-24',
      Scheme_Fee: 60000,
      status: 'Applied',
    },
    { 
      flex: 1,
      SNo: 2, 
      Scheme_Name: 'State Scheme-Higher Education Special Scholarship(SC,SCC)', 
      Applied_On: '19/10/2022',
      Academic_Year: '2021-22',
      Scheme_Fee: 40000,
      status: 'Rejected',
    },
    { 
      flex: 1,
      SNo: 3, 
      Scheme_Name: 'State Scheme-Special Post-Matric Scholarship Scheme(SCC)', 
      Applied_On: '18/08/2021',
      Academic_Year: '2021-22',
      Scheme_Fee: 25000,
      status: 'Pending',
    },
    { 
      flex: 1,
      SNo: 4, 
      Scheme_Name: 'ADW-Law Incentivescheme (Final Year Law students) (SC,SCC)', 
      Applied_On: '17/05/2022',
      Academic_Year: '2022-23',
      Scheme_Fee: 24000,
      status: 'Applied',
    },
    { 
      flex: 1,
      SNo: 5, 
      Scheme_Name: 'Central Scheme-Free Education Scheme(Professional Courses)', 
      Applied_On: '08/04/2023',
      Academic_Year: '2023-24',
      Scheme_Fee: 20450,
      status: 'Approved',
    },
    { 
      flex: 1,
      SNo: 6, 
      Scheme_Name: 'Central Scheme-Post-Matric Scholarship Scheme(SC)', 
      Applied_On: '21/06/2024',
      Academic_Year: '2024-25',
      Scheme_Fee: 20000,
      status: 'Approved',
    },
    { 
      flex: 1,
      SNo: 7, 
      Scheme_Name: 'State Scheme-Free Educationfor UGBoys,Girls,Transgenderonly(SC,SCC)', 
      Applied_On: '21/06/2024',
      Academic_Year: '2024-25',
      Scheme_Fee: 10000,
      status: 'Applied',
    },
    { 
      flex: 1,
      SNo: 8, 
      Scheme_Name: 'State Scheme-Higher Education Special Scholarship(ST)', 
      Applied_On: '21/06/2024',
      Academic_Year: '2024-25',
      Scheme_Fee: 10000,
      status: 'Pending',
    }
  ]);

  const gridOptions = {
    rowSelection: 'multiple'
  };
  const ButtonRenderer = ({ value, data, node, colDef, api, columnApi, context }) => {
    const handleClick = () => {
      setTableData(data);
      setIsOpen(true);
    };
  
    return (
      <>
        <p className= {data.status === 'Pending' ? 'Pending btnStyle' : data.status === 'Applied' ? 'Applied btnStyle' : data.status === 'Approved' ? 'Approved btnStyle' : data.status === 'Rejected' ? 'Rejected btnStyle' : ''}  onClick={handleClick}> {
          data.status === 'Pending' ? 'Pending' : data.status === 'Applied' ? 'Applied' : data.status === 'Approved' ? 'Approved' : data.status === 'Rejected' ? 'Rejected' : ''
        } </p>
      </>
    );
  };

  const columnDefs = [
    { field: 'Scheme_Name' },
    { field: 'Applied_On' },
    { field: 'Academic_Year' },
    { field: 'Scheme_Fee' },
    { 
      headerName: 'Status', 
      cellRenderer: ButtonRenderer,
      cellRendererParams: {
        clickFunction: (fieldValue, rowIndex) => {
          console.log('Button clicked:', fieldValue, rowIndex);
        }
      }
    }
  ];

  const defaultColDef = useMemo(() => {
    return {
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      flex: 1,
    }
  }, []);
  return (
    <>
      <div className="ag-theme-alpine" style={{ height: 'auto' }}>
        <AgGridReact
          suppressRowClickSelection={true}
          onGridReady={onGridReady}
          filter= 'agTextColumnFilter'
          floatingFilter = {true}
          rowData={rowData}
          columnDefs={columnDefs}
          gridOptions={gridOptions}
          pagination={true}
          paginationPageSize={5}
          paginationPageSizeSelector = {paginationPageSizeSelector}
          domLayout='autoHeight'
          defaultColDef = {defaultColDef}
          // defaultColDef={{
          //   sortable: true,
          //   resizable: true,
          //   flex: 1
          // }}
        >
        </AgGridReact>
      </div>
      <div className='exportToXl'>
        <button onClick={() => exportToExcel()}>Export to Excel</button>
      </div>
      <div className='text-left'>
        <Popup isOpen={isOpen} closePopup={closePopup}>
        <Col lg={12}>
            <Table>
              <tbody>
                <tr>
                  <td><b>Scheme Name :</b></td>
                  <td>{ tableData.Scheme_Name }</td>
                </tr>
                <tr>
                  <td><b>Status :</b></td>
                  <td><b className= {tableData.status === 'Applied' ? 'statusHighlight applied' : tableData.status === 'Approved' ? 'statusHighlight approved' : tableData.status === 'Rejected' ? 'statusHighlight rejected' : tableData.status === 'Pending' ? 'statusHighlight pending' : ''}>{ tableData.status === 'Applied' ? 'Scheme Approval is pending with Institute.' : tableData.status === 'Approved' ? 'Your Scheme is Approved.' : tableData.status === 'Rejected' ? 'Scheme Rejected.' : tableData.status === 'Pending' ? 'Scheme Approval is pending with Department.' : '' }</b></td>
                </tr>
                <tr>
                  <td><b>Academic Year :</b></td>
                  <td>{tableData.Academic_Year}</td>
                </tr>
                <tr>
                  <td><b>Scheme Fee :</b></td>
                  <td>{tableData.Scheme_Fee }</td>
                </tr>
                <tr>
                  <td><b>Account Number :</b></td>
                  <td>99442233450002</td>
                </tr>
                <tr>
                  <td><b>IFSC Code :</b></td>
                  <td>UIB0003456</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Popup>
      </div>
    </>
  );
};

export default Aggrid;
