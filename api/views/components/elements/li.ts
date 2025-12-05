import type { GlobalHtmlAttributes} from "../../types/html_attrs";
import { html, HtmlSafeString } from "../../types/safe_html";

interface LiProps extends GlobalHtmlAttributes {
    content: string | HtmlSafeString
}

const css = /*css*/`
    li{
        padding:10pt;
    }
`

//View template
export default function Li(props:LiProps){
    const {content,...attrs} = props
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>
        <li ${attrStr}>
        ${content}
        </li>
    `.trim()
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')
