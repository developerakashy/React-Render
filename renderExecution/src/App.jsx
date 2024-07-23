import { ContextParent } from "./component/Context/ContextParent"
import { ArrayUseState } from "./component/ImmutableState/ArrayUseState"
import { ObjectUseState } from "./component/ImmutableState/ObjectUseState"
import { ParentThree } from "./component/IncorrectOptimization/ParentThree"
import { ChildOne } from "./component/Optimization/ChildOne"
import { GrandParent } from "./component/Optimization/GrandParent"
import { ParentFour } from "./component/Optimization/ParentFour"
import { ParentOne } from "./component/Optimization/ParentOne"
import { ParentTwo } from "./component/Optimization/ParentTwo"
import { Child } from "./component/ParentChild/Child"
import { Parent } from "./component/ParentChild/Parent"
import { UseReducer } from "./component/UseReducer/UseReducer"
import { UseState } from "./component/UseState/UseState"


function App() {

  return (
    <>
      <ContextParent/>
      {/* <ParentFour /> */}
      {/* <ParentThree/> */}
      {/* <ParentTwo/> */}
      {/* <GrandParent/> */}
      {/* <ParentOne>
        <ChildOne/>
      </ParentOne> */}
      {/* <Parent/> */}
      {/* <ArrayUseState/> */}
      {/* <ObjectUseState/> */}
      {/* <UseReducer/> */}
      {/* <UseState/> */}
    </>
  )
}

export default App
