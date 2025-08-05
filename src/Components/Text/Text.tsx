type TextProps = {
    fontFamily : string,
    color : string,
    size : string,
    weight : string,
    text : string
};

export const Text = ({textProps}: {textProps: TextProps}) => {
  return (
    <div className='Text-container' style={{fontFamily: textProps.fontFamily, color : textProps.color, fontSize : textProps.size, fontWeight : textProps.weight}}>
        <p>{textProps.text}</p>
    </div>
  )
}
