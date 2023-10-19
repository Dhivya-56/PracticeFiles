import { mycontext } from "./Context";
import { useContext } from "react";
export default function Section({ children }) {
const level=useContext(mycontext)
console.log(level)
    return (
      <section className="section">
        <mycontext.Provider value={level + 1 }>
        {children}
        </mycontext.Provider>
      </section>
    );
  }
  