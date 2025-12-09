
import type { GlobalHtmlAttributes} from "../../types/html_attrs";
import { html, HtmlSafeString } from "../../types/safe_html";

interface ButtonProps extends GlobalHtmlAttributes {
    label: string | HtmlSafeString
}
const css = /*css*/`
    button{
        padding:5pt 10pt;
        font-size:9pt;
        font-weight:600;
        box-sizing:border-box;
        text-transform:uppercase;
        border-radius:10pt;
        border:1pt solid var(--primary-color);
        color:var(--primary-color);
        background:none;
        min-width: max-content;
        display:flex;
        align-items:center;
        justify-content:space-evenly;
        gap:5pt;
        cursor:pointer;
    }
`

//View template
export default function Button(props:ButtonProps){
    const {label,...attrs} = props
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>
        <button ${attrStr}>
        ${label}
        </button>
    `
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')
