import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import userstyle from './Users.module.css'


const Users = () => {
  const [user, setUsers] = useState([]);
  const fetchUsers = () => {
    let token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (email) => {
    if (window.confirm("Are you sure you want to delete?")) {
      let token = localStorage.getItem("token");
      axios({
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/delete/${email}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response, "response");
          toast.success("succeffuly deleted")
        })
        .catch((error) => {
          console.log(error, "error");
          toast.error(error.message)
        });
    }
  };
   
  return (
    <>
    <div className={userstyle.tableWrapper}>
      <table className={userstyle.tableRow}>
        <ToastContainer/>
        <thead>
          <tr className={userstyle.tableRowTwo }>
            <td>Image</td>
            <td>Email</td>
            <td>FullName</td>
            <td>Role</td>
            {/* <td>DOB</td> */}
            {/* <td>Price</td> */}
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          
         {user.map((item,idx) =>(
            <tr key={idx} >
            <td><img className={userstyle.image01} src={item.backdropImage} alt="view" /></td>
            <td> {item.email}</td>
            <td> {item.fullName}</td>
            <td> {item.role}</td>
            <td> {item.GroupSize}</td>
            <td>{item.Price}</td>
            <td>
            
              <span className={userstyle.editDeletebtn}>          
              <button><BsFillTrashFill className={userstyle.trash} onClick={()=>{handleDelete(item._id)}}/></button>
              <Link to={`UserEdit/${item._id}`}>
                <button><BsFillPencilFill className={userstyle.pencilEdit} /></button>
              </Link>
              </span>
            </td>
          </tr>
         ))}
        </tbody>
      </table>
    </div>
    </>
  );
};
export default Users