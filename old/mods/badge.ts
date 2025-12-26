import type { GlobalHtmlAttributes} from "../types/html_attrs";
import { html, HtmlSafeString } from "../types/safe_html";
import Div from "../components/elements/div";

interface BadgeProps extends GlobalHtmlAttributes {
        class: string | HtmlSafeString
}
const css = /*css*/`
    .badge{
        display:flex;
        padding:2.5pt 5pt;
        text-transform:uppercase;
        font-size:7pt;
        font-weight:bold;
        align-items:center;
        justify-content:center;
        border:1pt solid var(--primary-color);
        border-radius:10pt;
    }
`

export default function Badge(props:BadgeProps){
    const {label,...attrs} = props
    const attrStr = Object.entries(attrs)

    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>
        ${Div({
            content:/*html*/`
                ${label}
            `,
            class:`badge`,
            attrStr
        })}
    `
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')