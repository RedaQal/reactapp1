import CardBody from "./CardBody"
import CardFooter from "./CardFooter"
import CardHeader from "./CardHeader"


function Card({showThanksHandler}) {
  return (
    <div className="card">
      <CardHeader/>
      <CardBody title="How did we do?"/>
      <CardFooter showThanksHandler = {showThanksHandler}/>
    </div>
  )
}
export default Card
