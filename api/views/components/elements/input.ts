
import type { GlobalHtmlAttributes} from "../../types/html_attrs";
import { html, HtmlSafeString } from "../../types/safe_html";

interface InputProps extends GlobalHtmlAttributes {
    content: string | HtmlSafeString
}

const css = /*css*/`
    input{
        padding:10pt;
    }
`

//View template
export default function Input(props:InputProps){
    const {content,...attrs} = props
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>
        <input ${attrStr}>
        ${content}
        </input>
    `
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')
