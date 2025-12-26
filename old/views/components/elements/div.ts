import type { GlobalHtmlAttributes} from "../../types/html_attrs";
import { html, HtmlSafeString } from "../../types/safe_html";

interface DivProps extends GlobalHtmlAttributes {
    content: string | HtmlSafeString
}
//Stylesheet
const css:string = /*css*/`

`
//View template
export default function Div(props:DivProps){
    const {content,...attrs} = props
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>
        <div ${attrStr}>
        ${content}
        </div>
    `
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')