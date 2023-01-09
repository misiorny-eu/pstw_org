interface ArticleTitleProps{
  text: string;
}

export const ArticleTitle=({text}:ArticleTitleProps)=>{
  return(
    <h2>{text}</h2>
  )
}
