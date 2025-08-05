type ButtonProps = {
    fontFamily : string,
    color : string,
    size : string,
    weight : string,
    text : string,
    radius: string
};

export const Button = ({buttonProps}: {buttonProps: ButtonProps}) => {
  return (
    <div className='Button-container' style={{fontFamily: buttonProps.fontFamily, color : buttonProps.color, fontSize : buttonProps.size, fontWeight : buttonProps.weight, borderRadius: buttonProps.radius}}>
        <p>{buttonProps.text}</p>
    </div>
  )
}
