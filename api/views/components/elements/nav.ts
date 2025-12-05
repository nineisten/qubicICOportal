import type { GlobalHtmlAttributes} from "../../types/html_attrs";
import { html, HtmlSafeString } from "../../types/safe_html";

interface NavProps extends GlobalHtmlAttributes {
    content: string | HtmlSafeString
}

const css =/*css*/`
    nav {
        display:flex;
        align-items:center;
        justify-content: center;
        gap:10pt;
    }
    nav a{
        font-size:9pt;
        font-weight:600;
    }
`

//View template
export default function Nav(props:NavProps){
    const {content,...attrs} = props
   
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>
        <nav ${attrStr}>
        ${content}
        </nav>
    `
    .trim()
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')