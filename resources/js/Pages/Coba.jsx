function App() {
    return (
     <User>
       <h1>Hello, John Doe!</h1>
     </User>
    );
  }
  
  function User({ children }) {
    return children; // Hello, John Doe!
  }

  export default User;