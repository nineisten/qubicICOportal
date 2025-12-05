import type { GlobalHtmlAttributes} from "../types/html_attrs";
import { html, HtmlSafeString } from "../types/safe_html";
import Div from "../components/elements/div";

interface BannerProps extends GlobalHtmlAttributes {
    content: string | HtmlSafeString
}

const css = /*css*/`
    .banner{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:5pt;
        text-transform:uppercase;
        background:black;
        width:100%;
        flex-grow:1;
    }
    .banner h1{
        font-size:5rem;
        font-weight:600;
        
        margin:0;
        border:3pt solid #fff;
        padding:10pt 20pt;
        border-radius: 5pt;
        box-sizing: content-box;
    }
    .banner h5{
        font-size:1.25rem;
        font-weight:500;
        margin:0;
        padding:0;
        box
    }
    .banner button{
        padding:10pt 40pt;
        font-size:12pt;
    }
`

export default function Banner(props:BannerProps){
    const {content,...attrs} = props
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>
        ${Div({
            content:/*html*/`
                ${content}
            `,
            class:'banner',
            attrStr
        })}
    `
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')



