import Div from "../components/elements/div.ts";
import type { GlobalHtmlAttributes} from "../types/html_attrs";
import { html, HtmlSafeString } from "../types/safe_html";
import Sidebar from "../mods/sidebar.ts"

interface DashFrameProps extends GlobalHtmlAttributes {
    content: string | HtmlSafeString,
}
//Stylesheet
const css:string = /*css*/`

    .dashFrame{
        display:flex;
        flex-direction:row;
        flex-grow:1;
    }
    .list{

    }
    .ico_listing{
        border:1pt solid var(--primary-color);
        padding:10pt;
        margin:10pt;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        gap:10pt;
        font-size:9pt;
        font-weight:bold;
        text-transform:uppercase;
        
    }
   .ico_listing div{
            display:flex;
            align-items:center;
            justify-content:space-evenly;
            min-width:max-content;
        }
    .content_section{
        flex-grow:1;
        padding:10pt;
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content:flex-start;
    }
   @media screen and (max-width:63em){
        .dashFrame{
            flex-direction:column;
        }
    }

`
//View template
export default function DashFrame(props:DashFrameProps){
    const {content,clientUrl,tmplUrl,...attrs} = props
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>
         ${Div({
        content:/*html*/`
        ${Sidebar()}
        ${content}
        `,
        class:'dashFrame',
        attrStr
    })}

    `
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')