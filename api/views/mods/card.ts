import Div from "../components/elements/div";
import type { GlobalHtmlAttributes} from "../types/html_attrs";
import { html, HtmlSafeString } from "../types/safe_html";

interface CardProps extends GlobalHtmlAttributes {
    card_header: string | HtmlSafeString
    card_body: string | HtmlSafeString
    card_footer: string | HtmlSafeString
}

const css = /*css*/`
    .card{


    }
    .card_head{

    }
    .card_body{

    }
    .card_footer{
        
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
