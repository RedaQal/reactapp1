import CardText from "./CardText"
import CardTitle from "./CardTitle"

function CardBody(props) {
  return (
    <div className="card-body">
      <CardTitle content={props.title}/>
      <CardText/>
    </div>
  )
}
export default CardBody