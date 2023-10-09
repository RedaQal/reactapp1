import { useState } from "react";
import CardButton from "./CardButton"
import Rating from "./Rating"

function CardFooter({showThanksHandler}) {
  const [currentBtn, setCurrentBtn] = useState(0);
  const thanksHandler = ()=>currentBtn && showThanksHandler([true,currentBtn]);
  return (
    <div>
      <Rating setCurrentBtn={setCurrentBtn} currentBtn={currentBtn}/>
      <CardButton showThanksHandler = {thanksHandler}/>
    </div>
  )
}
export default CardFooter