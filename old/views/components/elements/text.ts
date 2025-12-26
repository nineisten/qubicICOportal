import type { GlobalHtmlAttributes} from "../../types/html_attrs";
import { html, HtmlSafeString } from "../../types/safe_html";

interface TextProps extends GlobalHtmlAttributes {
    content: string | HtmlSafeString
}
//Stylesheet
const css:string = /*css*/`
    p{
        
    }
`
//View template
export default function Text(props:TextProps){
    const {content,...attrs} = props
   
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>
        <p ${attrStr}>
        ${content}
        </p>
    `
    .trim()
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')

