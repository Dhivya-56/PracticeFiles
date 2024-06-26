import logo from './logo.svg';
import './App.css';
import TablePractice1 from './TablePractice1';
import TablePractice2 from './TablePractice2';
import Antd from './Antd';
// import Pract from './Axios pract/Pract';
import Pract from './summa/Pract';
import Pract2 from './summa/Pract2';
function App() {
const data = {
  nodes: [
    { name: "A", category: "Category1" },
    { name: "B", category: "Category2" },
    // ... other nodes
  ],
  links: [
    { source: "A", target: "B", value: 10 },
    // ... other links
  ],
};

const width = 800;
const height = 600;


  return (
    <div>
      {/* <Pract/> */}
  <Pract2 width={width} height={height} data={data} /> 
      {/* <Pract/> */}
      {/* <DesignPractice/> */}
      {/* <TablePractice1/> */}
    {/* <TablePractice2/> */}
    {/* <Antd/> */}
  
    </div>
  );
}

export default App;
