interface MainTitleProps{
  text: string;
}

export const MainTitle=({text}:MainTitleProps)=>{
  return(
    <h1>{text}</h1>
  )
}
