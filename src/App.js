/* eslint-disable */
import React from 'react';
import './App.css';
import { useState } from 'react';


document.onkeydown = function (e) {
    if (e.key === "F12") {
      alert("개발자 도구는 사용할 수 없습니다.");
    }
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
      alert("개발자 도구는 사용할 수 없습니다.");
    }
    if (e.ctrlKey && e.key === "U") {
      e.preventDefault();
    alert("개발자 도구는 사용할 수 없습니다.");
    }
  };

function App() {
 const [value, setValue] = useState("");

  const handleCheck = () => {
    
    if (value === "2135") {
      alert("KfivYozxp");
    }
  };



  return (
    <div className="App">
      <header className="App-header">
        <h2>숫자를 입력하세요</h2>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleCheck}>확인</button>




      </header>
    </div>
  );
}

export default App;
