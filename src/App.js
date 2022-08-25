import REACT from "react"

// Create our component..
function Greetings() {
  return <p>Hello there! Good morning!</p>
}


//Avatar component....
function Avatar () {
  return (
    <img 
      className="card-image"
      src="https://www.w3schools.com/howto/img_avatar.png" 
      alt="Avatar" 
      style={{ width: 100 }}
    />
  );
}


//profile card
function UserprofileCard() {
  return (

  <div ClassName="card">
     <Avatar/>
    <div ClassName="card=name">Godfred Appiah</div>
    <div>Godfred Appiah was the first fine boy to loose an SRC election</div>
   
  </div>
  );
}

// Create our root component => App component
function App() {
  return (
    <section className="main-page" > 
      <UserprofileCard /> 
    </section>
  );
}
  
export default App;
