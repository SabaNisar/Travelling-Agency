import React from 'react';
import './ViewAllHotels.css';
import MUIDataTable from 'mui-datatables';

const columns =["HotelName", "StartDate", "EndDate" , "YourName" , "Price"];


 function ViewAllHotels(params) {
    const data = [
        ["Royal Taj", "1-04-2024","10-04-2024", "Saba", "5000"],
        ["Royal Taj", "1-04-2024","10-04-2024", "Saba", "5000"],
        ["Royal Taj", "1-04-2024","10-04-2024", "Saba", "5000"],
        ["Royal Taj", "1-04-2024","10-04-2024", "Saba", "5000"],
    ];
    const options = {
        selectableRows: false,

      };

    return(
        <div className='container mt-5'>
                    <MUIDataTable
                        title={"View All Hotels"}
                        data={data}
                        columns={columns}
                        options={options}
                    />

        </div>

    )
    
 }

 export default ViewAllHotels;