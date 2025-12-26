import type { GlobalHtmlAttributes} from "../types/html_attrs";
import { html, HtmlSafeString } from "../types/safe_html";
import Container from "./container.ts"


interface AppFrameProps extends GlobalHtmlAttributes {
    content: string | HtmlSafeString
}
//Stylesheet
const css:string = /*css*/`
    .app_frame{
        display:flex;
        flex-direction:column;
        flex-grow:1;
    }
`
//View template
export default function AppFrame(props:AppFrameProps){
    const {content,...attrs} = props
   
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>
         ${Container({
        content:/*html*/`
            ${content}
        `,
        id:'app_frame',
        class:'app-frame',
        attrStr
    })}

    `
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')