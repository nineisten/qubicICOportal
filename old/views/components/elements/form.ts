import type { GlobalHtmlAttributes} from "../../types/html_attrs";
import { html, HtmlSafeString } from "../../types/safe_html";

interface FormProps extends GlobalHtmlAttributes {
    content: string | HtmlSafeString
}

const css = /*css*/`
    form{
    }
`

//View template
export default function Form(props:FormProps){
    const {content,...attrs} = props
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>
        <form ${attrStr}>
        ${content}
        </form>
    `
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')


