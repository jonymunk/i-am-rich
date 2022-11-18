function BallButton({onClick, ballNumber}){
        return <button onClick={onClick}>
        <img src={require(`./../assets/ball${ballNumber}.png`)}/></button>
}
export default BallButton;
