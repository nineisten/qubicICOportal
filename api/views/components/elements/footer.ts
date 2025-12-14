import type { GlobalHtmlAttributes} from "../../types/html_attrs";
import { html, HtmlSafeString } from "../../types/safe_html";

interface FooterProps extends GlobalHtmlAttributes {
    content: string | HtmlSafeString
}

const css = /*css*/`
    footer{
        color:white;
        padding:20pt;
        border-top:1pt solid var(--primary-color);
        text-align: center;
    }

`

//View template
export default function Footer(props:FooterProps){
    const {content,...attrs} = props
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>
        <footer ${attrStr}>
        ${content}
        </footer>
    `
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')
