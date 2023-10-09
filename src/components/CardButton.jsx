function CardButton({showThanksHandler}) {
  return (
    <button className="card-button" onClick={()=>showThanksHandler()}>SUBMIT</button>
  )
}
export default CardButton