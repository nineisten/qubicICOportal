export type StandardAttributes = {
    id?:string
    class?:string
    style?:string
    title?:string
    name?:string
    hidden?:boolean
    label?:string
    isLoggedIn?:boolean
    href?:string
    src?:string
}& {
  [key: `data-${string}`]: string | undefined
} & {
  [key: `aria-${string}`]: string | undefined
} &{

}

export type HtmxAttributes={
    [key: `hx=${string}`]: string | boolean | undefined
}

export type GlobalHtmlAttributes = 
    & StandardAttributes
    & HtmxAttributes& {
    // catch-all for very rare attributes (onclick, etc.)
    // keep it extremely narrow so TS still complains on typos
    [key: string]: string | boolean | undefined 
  }