import type { GlobalHtmlAttributes} from "../../types/html_attrs";
import { html, HtmlSafeString } from "../../types/safe_html";

interface LinkProps extends GlobalHtmlAttributes {
    label: string | HtmlSafeString
}

const css = /*css*/`
    a{          
        color:#fff;
    }
`

//View template
export default function Link(props:LinkProps){
    const {label,...attrs} = props
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>
        <Link ${attrStr}>
        ${label}
        </Link>
    `.trim()
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')
