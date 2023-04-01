import tw from "tailwind-styled-components"


const SmallBtn = tw.button`
    bg-gray-400
    w-fit
    py-3
    px-16
    rounded-sm 
    leading-snug
    text-black
    text-xs
    font-semibold
    tracking-wider
`

const BigBtn = tw.button`
    bg-gray-400
    w-fit
    py-3
    px-20
    rounded-md 
    leading-snug
    text-black
    text-regular
    tracking-wide
    font-bold
`

const GreenBtnS = tw(SmallBtn)`
    bg-mainGreen
    text-white
`


const BeigeBtnS = tw(SmallBtn)`
    bg-mainBrown
    text-white
`

const GreenBtnL = tw(BigBtn)`
    bg-mainGreen
    text-white
`


const BeigeBtnL = tw(BigBtn)`
    bg-mainBrown
    text-white
`


const PlainBtn = tw.button`
    bg-transparent
    w-fit
    py-3
    px-8
    rounded-sm 
    leading-snug
    text-black
    text-sm
    font-light
    tracking-wide
    border
    border-black
`


const QuickBtn = tw.button`
    bg-mainYellow
    w-fit
    p-3
    rounded-sm 
    leading-snug
    text-white
    font-roboto
    uppercase
    font-bold
    text-sm
    tracking-widest
`

const LinedLink = tw.span`
    underline
    underline-offset-4
`



export {GreenBtnS, BeigeBtnS, GreenBtnL, BeigeBtnL, PlainBtn, QuickBtn, LinedLink} 