import React, { useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Popup from '../Popup/Popup';

const gridDiv = document.querySelector('#myGrid');

const StudentEligibleScheme = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const academic_year = currentYear - 1 - currentYear
  const [rowData, setRowData] = useState([
    { 
      Sno: 1, 
      Scheme_Name: 'Central Scheme-Post-Matric Scholarship(ST)',
      Academic_Year: academic_year,
      Fee: 60000, 
      Total_Fee: 100000
    },
    { 
      Sno: 2, 
      Scheme_Name: 'State Scheme-Higher Education Special Scholarship(SC,SCC)',
      Academic_Year: academic_year,
      Fee: 40000, 
      Total_Fee: 100000
    },
    { 
      Sno: 3, 
      Scheme_Name: 'State Scheme-Special Post-Matric Scholarship Scheme(SCC)',
      Academic_Year: academic_year,
      Fee: 25000, 
      Total_Fee: 100000
    },
  ]);

  const [columnDefs, setColumnDefs] = useState([
    {
        field: "Scheme_Name",
        checkboxSelection: true,
        editable: true,
        cellEditor: 'agSelectCellEditor',
        // cellEditorParams: {
        //     values: ["Tesla", "Ford", "Toyota", "Mercedes", "Fiat", "Nissan", "Vauxhall", "Volvo", "Jaguar"],
        // },
    },
    //{ field: "Scheme_Name" },
    { field: "Fee", filter: 'agNumberColumnFilter' },
    { field: "Total_Fee", filter: 'agNumberColumnFilter' },
  ]);
  
  const defaultColDef = useMemo(() => {
    return {
      //filter: 'agTextColumnFilter',
      //floatingFilter: true,
      flex: 1,
    }
  }, []);

  const gridRef = useRef();
  const [selectAll, setSelectAll] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [appliedBtn, setAppliedBtn] = useState(false);
  
  const onButtonClick = () => { debugger;
    openPopup();
    if (gridRef.current) {
      const selectedNodes = gridRef.current.api.getSelectedNodes();
      const selectedData = selectedNodes.map(node => node.data);
      if(selectedData.length === 0){
        setAppliedBtn(false);
      } else {
        setAppliedBtn(true);
      }
      const sumOfFees = selectedData.reduce((sum, item) => sum + item.Fee, 0);
      if (sumOfFees > 100000) {
        setErrorMessage(`Total selected Schemes exceed the maximum allowed limit of 100,000.`);
        setAppliedBtn(false);
      } else {
        setErrorMessage('');
      }
    }
  };
  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      gridRef.current.api.selectAll();
    } else {
      gridRef.current.api.deselectAll();
    }
  };
  return (
    <>
      <div className="ag-theme-alpine">
        <p className='selectAllSchemes'>
          <input
          type="checkbox"
          checked={selectAll}
          onChange={toggleSelectAll}
          style={{ marginBottom: 10 }}
          /> Select All Schemes
        </p>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          suppressRowClickSelection={true}
          pagination={true}
          paginationPageSize={3}
          paginationPageSizeSelector={[1, 3, 5]}
          domLayout='autoHeight'
        />
      </div>
      {/* <p className={appliedBtn ? 'appliedBtn approveBtn' : 'approveBtn'} onClick={onButtonClick}>
        {
          appliedBtn ? 'Scheme Applied' : 'Apply Schemes'
        }
      </p> */}
      <p className='approveBtn' onClick={onButtonClick}>
        Apply Schemes
      </p>
      {
        errorMessage &&
        <div className='text-center'>
          <Popup isOpen={isOpen} closePopup={closePopup}>
            <h5 className='errHead'>Error</h5>
            <p>{errorMessage}</p>
          </Popup>
        </div>
      }
      {
        appliedBtn &&
        <div className='text-center'>
          <Popup isOpen={isOpen} closePopup={closePopup}>
            <h5>SCHEME APPLIED</h5>
            <p>Sent to Institute for Approval!</p>
          </Popup>
        </div>
      }
    </>
  );
}

export default StudentEligibleScheme;