import logo from './logo.svg';
import addMember from './addMember.js';
import './App.css';

const memberList = document.getElementById("memberList");
let memberList2 =[];

function onInputChange(event){
  memberList.textContent=event.target.value;
  console.log(event.target.value);
  // memberList2.forEach(nam){(nam)=>{console.log(nam)}};
}

function addMember2(nam){
  memberList2.push(nam);
  return nam;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1>Family Tree</h1>
        <input className='pa3 ba b--green bg-lightest-blue'type='search' placeholder='add family member' onChange={onInputChange}  />
        <button onClick={addMember2}>Add a Member</button>
        <p id='memberList'> Text </p>
        <div id='memberList2'>
        <p>Test</p>
         {/*{{ memberList2.forEach((nam)=>
            {console.log(nam)})
       }}*/}
        </div>
      </header>
    </div>
  );
}

export default App;