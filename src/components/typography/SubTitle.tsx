interface SubTitleProps{
  text: string;
}

export const SubTitle=({text}:SubTitleProps)=>{
  return(
    <h3>{text}</h3>
  )
}
