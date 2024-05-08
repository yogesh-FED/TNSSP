import React, { useEffect, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './aggrid.scss';
import Approve  from '../../Assets/icons/approve.png';
import Pending  from '../../Assets/icons/pending.png';
import Payment  from '../../Assets/icons/payment.png';

const Aggrid = () => {
  const [gridApi, setGridApi] = useState(null);
  const [columnApi, setColumnApi] = useState(null);
  const [overLay, setOverLay] = useState(false);
  const [pending, setPending] = useState(false);
  const [approval, setApproval] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [payment, setPayment] = useState(false);
  useEffect(() => {
    if(overLay) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  },[overLay])
  const handleClose = () => {
    setOverLay(false);
    setPending(false);
    setApproval(false);
    setPayment(false);
  }
  const handlePaymentClick = () => {
    setOverLay(true);
    setPayment(true);
  }
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
      status: 'Pending',
    },
    { 
      flex: 1,
      SNo: 2, 
      Scheme_Name: 'State Scheme-Higher Education Special Scholarship(SC,SCC)', 
      Applied_On: '19/10/2022',
      Academic_Year: '2021-22',
      Scheme_Fee: 40000,
      status: 'Approved',
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
      status: 'Approved',
    },
    { 
      flex: 1,
      SNo: 5, 
      Scheme_Name: 'Central Scheme-Free Education Scheme(Professional Courses)', 
      Applied_On: '08/04/2023',
      Academic_Year: '2023-24',
      Scheme_Fee: 20450,
      status: 'Pending',
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
      status: 'Approved',
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

  const ButtonRenderer = ({ value, data, node, colDef, api, columnApi, context }) => { debugger;
    const handleClick = () => { debugger;
      setOverLay(true);
      setTableData(data);
      if(data.status === 'Pending') {
        setPending(true);
      } else {
        setApproval(true);
      }
      //alert(`Clicked row: ${data.SNo}`);
    };
  
    return (
      <>
      <span><button className='btnStyle'  onClick={handleClick}> {
        data.status === 'Pending' ? <img src={Pending} /> : <img src={Approve} />
      } </button></span>
      <span><button className='btnStyle' onClick={handlePaymentClick}> 
      {
        data.status === 'Pending' ? '' : <img src={Payment} />
      }
      </button></span>
      </>
    );
  };

  const columnDefs = [
    { field: 'SNo' },
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

  return (
    <>
      <div className="ag-theme-alpine" style={{ height: 'auto' }}>
        <AgGridReact
          onGridReady={onGridReady}
          rowData={rowData}
          columnDefs={columnDefs}
          gridOptions={gridOptions}
          pagination={true}
          paginationPageSize={5}
          paginationPageSizeSelector = {paginationPageSizeSelector}
          domLayout='autoHeight'
          defaultColDef={{
            sortable: true,
            resizable: true,
            flex: 1
          }}
        >
        </AgGridReact>
      </div>
      {
        overLay && 
        <div className='overLay'></div>
      }
      {
        pending && 
        <div className='screenPop pendingScreen text-center'>
          <h4>Pending Status</h4>
          <p>Scheme Approval: <b>{tableData.Scheme_Name} </b> is <b>pending</b> with <b>Institute</b>!  </p>
          <p className='close' onClick={() => handleClose()}>Close</p>
        </div>
      }
      {
        approval && 
        <div className='screenPop approvalScreen text-center'>
          <h4>Approval Status</h4>
          <p>Scheme Approval: <b>{tableData.Scheme_Name} </b> is <b>Approved</b> </p>
          <p className='close' onClick={() => handleClose()}>Close</p>
        </div>
      }
      {
        payment && 
        <div className='screenPop paymentStatus text-center'>
          <h4>Payment Status</h4>
          <p className='content'><b>Success</b></p>
          <p className='close' onClick={() => handleClose()}>Close</p>
        </div>
      }
      <div className='exportToXl'>
        <button onClick={() => exportToExcel()}>Export to Excel</button>
      </div>
    </>
  );
};

export default Aggrid;
