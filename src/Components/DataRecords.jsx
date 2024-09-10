import React, {useState, useEffect} from 'react'
import {Container} from "react-bootstrap"
import './DataRecords.css'

const DataRecords = () => {

    const [userData, setUserData] = useState([]);

    useEffect( ()=>{
        const getUserData = async()=>{
            const reqData = await fetch("https://raw.githubusercontent.com/CS-4800-Knule-Group/meeting-notes/main/ExportScrumNotes");
            const resData = await reqData.json();
            console.log(resData);
            setUserData(resData);
        }
        getUserData();
    }, []);

  return (
    <>
        <Container>
            <div style={{whiteSpace: "pre-line"}}>
                <div className='columns'>
                <h1 className='dataRecordText'> Meeting Minutes Records</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th style={{width: "10%"}}>Date</th>
                            <th>Completed Task</th>
                            <th>Current Task</th>
                            <th>Additional Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map( (getusers, index) =>(
                            <tr key={index}>
                                <td>{getusers.Date}</td>
                                <td>{getusers.Finished}</td>
                                <td>{getusers.Todo}</td>
                                <td>{getusers.Notes}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </Container>
    </>
  )
}

export default DataRecords