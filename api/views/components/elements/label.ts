import type { GlobalHtmlAttributes} from "../../types/html_attrs";
import { html, HtmlSafeString } from "../../types/safe_html";

interface LabelProps extends GlobalHtmlAttributes {
    label: string | HtmlSafeString
}

const css = /*css*/`
    label{
        padding:10pt;
    }
`

//View template
export default function Label(props:LabelProps){
    const {label,...attrs} = props
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>
        <label ${attrStr}>
        ${label}
        </label>
    `.trim()
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')
