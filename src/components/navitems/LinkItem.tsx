import Link from 'next/link'

interface LinkItemProps{
  href: string;
  text: string;
}

export const LinkItem=({href,text}:LinkItemProps)=>{
  return(
    <Link href={href}>{text}</Link>
  )
}
