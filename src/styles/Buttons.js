import tw from "tailwind-styled-components"


const SmallBtn = tw.button`
    bg-gray-400
    w-fit
    py-3
    px-14
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
    font-semibold
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
    py-2
    px-6
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
  
    w-fit
    mx-auto
    underline-offset-8
    underline
    h-12
    inline-block
    transition 
    ease-in
    hover:-translate-y-1
    after:w-fit
    hover:after:content-['--->']
    hover:no-underline
    after:font-regular
    after:text-base
    after:mx-auto
    after:opacity-0
    after:transition-opacity
    after:duration-600
    after:ease-in
    after:block
    after:h-0
    after:leading-none
    hover:after:delay-400
    hover:after:opacity-100
`

const UnderlineLink = tw.span`
    w-fit
    mx-auto
    underline-offset-8
    underline
    h-12
    inline-block
    transition 
    ease-in
    duration-100
    delay-50
    hover:-translate-y-1
    hover:scale-105
`


//border border-solid rounded-md border-white hover:shadow-md hover:border-gray-50 hover:cursor-pointer transition ease-in delay-50 hover:scale-105



export {GreenBtnS, BeigeBtnS, GreenBtnL, BeigeBtnL, PlainBtn, QuickBtn, LinedLink, UnderlineLink} 