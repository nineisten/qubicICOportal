import Div from "../components/elements/div";
import Section from "../components/elements/section"
import Sidebar from "../mods/sidebar"
import type { GlobalHtmlAttributes} from "../types/html_attrs";
import { html, HtmlSafeString } from "../types/safe_html";

interface MainDashProps extends GlobalHtmlAttributes {
    content: string | HtmlSafeString
}
//Stylesheet
const css:string = /*css*/`
    main{
        display:flex;
        flex-grow:1;
        padding-bottom:10pt;
    }
    .mainDash_columns{
        flex-direction:column;
    }
    .mainDash_rows{
        flex-direction:row;
    }
`
//View template
export default function MainDash(props:MainDashProps){
    const {content,...attrs} = props
   
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>

        <main ${attrStr}>
        ${Div({
            content:'',
            id:'sidebar',
            'hx-get':'/views/mod/sidebar',
            'hx-target':'#sidebar',
            'hx-swap':'outerHtml',
            'hx-trigger':'load'
        })}
        ${Section({
            content
        })}
        </main>
    `
    .trim()
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')