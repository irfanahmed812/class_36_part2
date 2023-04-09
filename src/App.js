import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <TasbihPath></TasbihPath>
      {/* <Users></Users> */}
    </div>
  );
}

export default App;


// function Users() {

//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => setUsers(data))
//   }, [])

//   return (
//     <div>
//       <h2>Users {users.length}</h2>
//       {
//         users.map(user => <User
//           name={user.name}
//           email={user.email}></User>)
//       }
//     </div>
//   )
// }


// function User(props) {
//   return (
//     <div className='container' style={{ border: '2px solid grey', margin: '20px' }}>
//       <h4 className='text-danger'>Name: {props.name}</h4>
//       <h5>Email: {props.email}</h5>
//     </div>
//   )
// }


/* Tasbih path */
function TasbihPath() {
  const [count, setCount] = useState(0); // user state using

  const increaseNumber = () => setCount(count + 1); // useState method 2
  // useState method 1
  /* {
    const newCount = count + 1;
    setCount(newCount);
  } */

  const dicreaseNumber = () => setCount(count - 1); // useState method 2
  // useState method 1 
  /* {
    const newCount = count - 1;
    setCount(newCount);
  } */

  return (
    <div className="pt-5 pb-5">
      <div className="">
        <h4>Say:
          <p className='pt-2'>Allah - 100</p>
          <p>SubahanAllah - 200</p>
          <p>Astagfirullah - 300</p>
        </h4>
      </div>
      <div className='container tasibh pt-3'>
        <h1>Number: <span className="fw-bold text-danger">{count}</span></h1>
        <div className="d-flex justify-content-center">
          <div className="px-2 pt-2 pb-3">
            <button className='btn1' onClick={dicreaseNumber}> - </button>
          </div>
          <div className="px-2 pt-2 pb-3">
            <button className='btn2' onClick={increaseNumber}> + </button>
          </div>
        </div>
      </div>
    </div>
  )
}