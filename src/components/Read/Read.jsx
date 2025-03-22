import React, { useEffect, useState } from "react";
import "./Readstyle.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark,setTableDark]=useState('');

  function getdata() {
    axios
      .get("https://672f1196229a881691f1bcf6.mockapi.io/crud-project")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
  const handleDelete = (id) => {
    axios
      .delete(`https://672f1196229a881691f1bcf6.mockapi.io/crud-project/${id}`)
      .then(() => {
        getdata();
      });
  };
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
 
      <div className="table-container">
        <div class="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
           onClick={()=>{
             if(tabledark ==='table-dark') setTableDark("")
                else setTableDark("table-dark")
           }}
          />
        </div>
        <div className="info-data">
          <h1>All Data</h1>
          <Link to="/">
            <button className="btn btn-info">Create</button>
          </Link>
        </div>
        <table className={`table ${tabledark}`} >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          {data.map((eachdata) => {
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row">{eachdata.id}</th>
                    <td>{eachdata.name}</td>
                    <td>{eachdata.email}</td>
                    <td>
                      <Link to="/update">
                        <button
                          className="btn-success"
                          onClick={() => {
                            setToLocalStorage(
                              eachdata.id,
                              eachdata.name,
                              eachdata.email
                            );
                          }}
                        >
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn-danger"
                        onClick={() => {
                          handleDelete(eachdata.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Read;
