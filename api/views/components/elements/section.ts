import type { GlobalHtmlAttributes} from "../../types/html_attrs";
import { html, HtmlSafeString } from "../../types/safe_html";

interface SectionProps extends GlobalHtmlAttributes {
    content: string | HtmlSafeString
}

const css = /*css*/`
    section{
        flex-grow:1;
    }
    .flex_rows{
        display:flex;
        flex-direction:row;
        align-items: center;
        justify-content:space-evenly;
    }
    .flex_columns{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:10pt;
        /* flex-grow:1; */
    }
    .grid_columns {
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(270pt,1fr));
        gap:10pt;
        padding:10pt;
    }

`
//View template
export default function Section(props:SectionProps){
    const {content,...attrs} = props
   
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>
        <section ${attrStr}>
        ${content}
        </section>
    `.trim()
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')
