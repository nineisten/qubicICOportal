import type { GlobalHtmlAttributes} from "../../types/html_attrs";
import { html, HtmlSafeString } from "../../types/safe_html";

interface HeaderProps extends GlobalHtmlAttributes {
    content: string | HtmlSafeString
}

const css = /*css*/`
  header{
    display: flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    color:white;
    width:100%;
  }
`
//View template
export default function Header(props:HeaderProps){
    const {content,...attrs} = props
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>
        <header ${attrStr}>
        ${content}
        </header>
    `.trim()
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')
