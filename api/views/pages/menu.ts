import type { GlobalHtmlAttributes} from "../types/html_attrs";
import { html, HtmlSafeString } from "../types/safe_html";
import Div from "../components/elements/div";
import Ulist from "../components/elements/ul";
import Button from "../components/elements/button";
import {lock} from "../components/svg/lock"
import Li from "../components/elements/li";
import Link from "../components/elements/link";
import Nav from "../components/elements/nav";

interface MenuProps extends GlobalHtmlAttributes {
}
//Stylesheet
const css:string = /*css*/`
    .menu{
    /* min-width:100dvw; */
        display:flex;
        flex-direction:column;
        color:white;
    }
`
//View template
export default function Menu(props:MenuProps){
    const {...attrs} = props
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
        html`
        <style>${css}</style>
        ${Div({
            content:/*html*/` 
            <!--start-->
                ${Nav({
                    content:/*html*/`
                    <!--start nav-->
                    ${Ulist({
                        content:/*html*/`
                        <!--start unordered list-->
                        ${Li({
                            content:/*html*/`
                            <!--bgein list item-->
                            ${Link({
                                label:'Home',
                                'hx-get':"/",
                                'hx-target':"#content_module",
                                'hx-swap':'innerHtml',
                                'hx-trigger':'click'
                                })}
                            <!--end list item-->
                            `
                        })}
                        ${Li({
                            content:/*html*/`
                        <!--bgein list item-->
                            ${Link({
                                label:'About',
                                'hx-get':"/about",
                                'hx-target':"#content_module",
                                'hx-swap':'innerHtml',
                                'hx-trigger':'click'
                            })}
                            <!--end list item-->
                        `
                        })}
                        ${Li({
                            content:/*html*/`
                            <!--bgein list item-->
                            ${Link({
                                label:'Contact',
                                'hx-get':"/contact",
                                'hx-target':"#content_module",
                                'hx-swap':'innerHtml',
                                'hx-trigger':'click'
                            })}
                            <!--end list item-->
                            `
                    })}
                <!--end unordered list-->
                `,
                id:'main_nav',
                class:'main_nav full'
                })}
                <!--end nav-->
            `,
            id:'main_header_nav',
            class:'mainHeaderNav'
            })}
            ${Div({
                content:/*html*/`
                <!--start-->
                ${Button({
                    label:`${lock(9,9)} Connect`,
                    class:'full',
                    'hx-get': '/connect',
                    'hx-swap': ''
                })}
                <!--end-->        
                `
            })}
                 <!--end-->
            `,
            class:'menu',
            attrStr
        })}
    `
    return html
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')

