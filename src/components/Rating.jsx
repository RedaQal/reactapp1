import RatingButton from "./RatingButton"

function Rating({setCurrentBtn,currentBtn}) {
  const buttonClickHandler= (btnNumber) => {
    setCurrentBtn(btnNumber);
  }
  
  return (
    <div className="rating-container">
      <RatingButton number='1' selected={currentBtn} onSelect={buttonClickHandler}/>
      <RatingButton number='2' selected={currentBtn} onSelect={buttonClickHandler}/>
      <RatingButton number='3' selected={currentBtn} onSelect={buttonClickHandler}/>
      <RatingButton number='4' selected={currentBtn} onSelect={buttonClickHandler}/>
      <RatingButton number='5' selected={currentBtn} onSelect={buttonClickHandler}/>
    </div>
  )
}
export default Rating