import Div from "../components/elements/div";
import type { GlobalHtmlAttributes} from "../types/html_attrs";
import { html, HtmlSafeString } from "../types/safe_html";

interface CardProps extends GlobalHtmlAttributes {
    card_header: string | HtmlSafeString
    card_body: string | HtmlSafeString
    card_footer: string | HtmlSafeString
}

const css = /*css*/`
    .shop_card{
        max-width: 20rem;
    }
    .card{
        max-width:50dvw;
        max-height:50dvh;
        display:flex;
        flex-grow:1;
        flex-direction:column;
        gap:10pt;
        border-radius:10pt;
        overflow:hidden;
        border:1pt solid var(--primary-color)
    }
    .card_header{
        display:flex;

        flex-direction:row;
        justify-content: space-between;
        min-width:min-content;
        padding: 10pt;
        border-bottom:1pt solid var(--bg-color);
    }
    .card_body{
        padding:0 10pt;
        min-width:min-content;
        display: flex;
        justify-content:center;
        align-items:center;
        text-align:center;
        flex-grow:1;
        
    }
    .card_body{
        h1,h2,h3,h4,h5,h6{
        }
    }
    .card_footer{
        min-width:min-content;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-evenly;
        min-width:max-content;
        border-top:1pt solid var(--primary-color);
        flex-wrap:wrap;

    }
    .tiles{
        display:flex;
        gap:10pt;
        padding:10pt;
        
    }
    .tile{
        display:flex;
        width:max-content;
        align-items:center;
        justify-content:space-evenly;
        white-space: nowrap;
        min-width: max-content;
        gap:2pt;
        h1,h2,h3,h4,h5,h6{
            white-space: nowrap;
        }
    }
    .fullButton{
        border-top:1pt solid var(--primary-color);
        width:100%;
        height:40pt;
        font-size:10pt;
        background:none;
        border-top-left-radius:0;
        border-top-right-radius:0;
        color:var(--primary-color);
        cursor:pointer;
    }
`

//View template
export default function Card(props:CardProps){
    const {card_header,card_body,card_footer,...attrs} = props
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>
        ${Div({
            content:/*html*/`
            <!--start card-->
                 ${Div({
                    content:/*html*/`
                    <!--start card_head-->
                    ${card_header}
                     <!--end card_head-->
                `,
                class:'card_header'
                })}
                ${Div({
                    content:/*html*/`
                    <!--start card_body-->
                    ${card_body}
                    <!--start card_body-->
                `,
                class:'card_body'
                })}
                ${Div({
                    content:/*html*/`
                    <!--start card_footer-->
                    ${card_footer}
                    <!--start card_footer--> 
                `,
                class:'card_footer'
            })}
            <!--end card--> 
            `,
            class:'card',
            attrStr
        })}
    `.trim()
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')
