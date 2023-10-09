function RatingButton(props) {

  return (
    <button onClick={()=>props.onSelect(props.number)} className={"rating-button round"+ (props.selected==props.number? ' active': '')}>
      {props.number}
    </button>
  )
}
export default RatingButton