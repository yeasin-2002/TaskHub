import { useState } from "react"

import LogInOutAndSingInAndUpContainer from "../../components/LogInOutAndSingInAndUpContainer"
import SingInConfirm from "./SingInConfirm"
import SingInForm from "./SingInForm"

const SingIn = () => {
  const [IsConfirmStage, setIsConfirmStage] = useState(false)

  return (
    <div>
      <LogInOutAndSingInAndUpContainer>
        {!IsConfirmStage ? (
          <SingInForm setIsConfirmStage={setIsConfirmStage} />
        ) : (
          <SingInConfirm setIsConfirmStage={setIsConfirmStage} />
        )}

        <div className="px-14">{/* error state */}</div>
      </LogInOutAndSingInAndUpContainer>
    </div>
  )
}

export default SingIn


const time = Array.from(6)
for (let i = 0; i < time.length; i++) {
  console.log("আমি তোমাকে ভালোবাসি জান")
}