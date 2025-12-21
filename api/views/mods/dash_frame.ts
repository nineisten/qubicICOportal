import Div from "../components/elements/div.ts";
import type { GlobalHtmlAttributes} from "../types/html_attrs";
import { html, HtmlSafeString } from "../types/safe_html";


interface DashFrameProps extends GlobalHtmlAttributes {
    content: string | HtmlSafeString
}
//Stylesheet
const css:string = /*css*/`
    .dash_frame{
        display:flex;
        flex-direction:row;
        flex-grow:1;
        background:black;
    }
`
//View template
export default function DashFrame(props:DashFrameProps){
    const {content,...attrs} = props
   
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>
         ${Div({
        content:/*html*/`
            ${content}
        `,
        id:'dash_frame',
        attrStr
    })}

    `
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')