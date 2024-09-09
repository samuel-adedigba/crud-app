// import React, { useState } from 'react';
// import Swal from 'sweetalert2';

// const Edit = ({ employee,setIsEditing }) => {
//   const id = employee.id;

//   const [firstName, setFirstName] = useState(employee.firstName);
//   const [lastName, setLastName] = useState(employee.lastName);
//   const [email, setEmail] = useState(employee.email);
//   const [salary, setSalary] = useState(employee.salary);
//   const [date, setDate] = useState(employee.date);

//   const handleUpdate = e => {
//     e.preventDefault();

//     if (!firstName || !lastName || !email || !salary || !date) {
//       return Swal.fire({
//         icon: 'error',
//         title: 'Error!',
//         text: 'All fields are required.',
//         showConfirmButton: true,
//       });
//     }

//     const newemployee =employee? {
//       id,
//       firstName,
//       lastName,
//       email,
//       salary,
//       date,
//     };
//     employee(newemployee)
//     setIsEditing(true)
//     Swal.fire({
//       icon: 'success',
//       title: 'Updated!',
//       text: `${newemployee.firstName} ${newemployee.lastName}'s data has been updated.`,
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };

//   return (
//     <div className="small-container">
//       <form onSubmit={handleUpdate}>
//         <h1>Edit Employee</h1>
//         <label htmlFor="firstName">First Name</label>
//         <input
//           id="firstName"
//           type="text"
//           name="firstName"
//           value={firstName}
//           onChange={e => setFirstName(e.target.value)}
//         />
//         <label htmlFor="lastName">Last Name</label>
//         <input
//           id="lastName"
//           type="text"
//           name="lastName"
//           value={lastName}
//           onChange={e => setLastName(e.target.value)}
//         />
//         <label htmlFor="email">Email</label>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//         />
//         <label htmlFor="salary">Salary </label>
//         <input
//           id="salary"
//           type="number"
//           name="salary"
//           value={salary}
//           onChange={e => setSalary(e.target.value)}
//         />
//         <label htmlFor="date">Date</label>
//         <input
//           id="date"
//           type="date"
//           name="date"
//           value={date}
//           onChange={e => setDate(e.target.value)}
//         />
//         <div style={{ marginTop: '30px' }}>
//           <input type="submit" value="Update" />
//           <input
//             style={{ marginLeft: '12px' }}
//             className="muted-button"
//             type="button"
//             value="Cancel"
//             onClick={() => setIsEditing(false)}
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Edit;