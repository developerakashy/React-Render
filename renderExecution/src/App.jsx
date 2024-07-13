import { ArrayUseState } from "./component/ImmutableState/ArrayUseState"
import { ObjectUseState } from "./component/ImmutableState/ObjectUseState"
import { ChildOne } from "./component/Optimization/ChildOne"
import { ParentOne } from "./component/Optimization/ParentOne"
import { Child } from "./component/ParentChild/Child"
import { Parent } from "./component/ParentChild/Parent"
import { UseReducer } from "./component/UseReducer/UseReducer"
import { UseState } from "./component/UseState/UseState"


function App() {

  return (
    <>
      <ParentOne>
        <ChildOne/>
      </ParentOne>
      {/* <Parent/> */}
      {/* <ArrayUseState/> */}
      {/* <ObjectUseState/> */}
      {/* <UseReducer/> */}
      {/* <UseState/> */}
    </>
  )
}

export default App
