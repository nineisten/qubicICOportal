import type { GlobalHtmlAttributes} from "../../types/html_attrs";
import { html, HtmlSafeString } from "../../types/safe_html";

interface MainProps extends GlobalHtmlAttributes {
    content: string | HtmlSafeString
}
//Stylesheet
const css:string = /*css*/`
    main{
        display:flex;
        flex-grow:1;
    }
    .main_columns{
        flex-direction:column;
        justify-content:center;
    }
    .main_rows{
        flex-direction:row;
    }
`
//View template
export default function Main(props:MainProps){
    const {content,...attrs} = props
   
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>
        <main ${attrStr}>
        ${content}
        </main>
    `
    .trim()
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')