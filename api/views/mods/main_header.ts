import Logo from "../components/branding/logo.ts"
import Link from "../components/elements/link.ts"
import Li from "../components/elements/li.ts"
import Ul from "../components/elements/ul.ts"
import Header from "../components/elements/header"
import {links} from "../../models/links.ts"
import Button from "../components/elements/button.ts"
import Nav from "../components/elements/nav.ts"
import { lock } from "../components/svg/lock.ts"
import type { GlobalHtmlAttributes} from "../types/html_attrs";
import { html, HtmlSafeString } from "../types/safe_html";
import Ulist from "../components/elements/ul.ts"

interface MainHeaderProps extends GlobalHtmlAttributes {
    content: string | HtmlSafeString
}
//Stylesheet
const css:string = /*css*/`
    .mainHeader{
        font-size:10pt;
        font-weight:600;
    }
`
//View template
export default function MainHeader(props:MainHeaderProps){
    const {content,...attrs} = props
   
    const attrStr = Object.entries(attrs)
    .filter(([_, v]) => v != null)
    .map(([k, v]) => (v === true ? k : `${k}="${escape(String(v))}"`))
    .join(' ')
    .trim()
   return html`
        <style>${css}</style>
        ${Header({
            content:/*html*/`
                    ${Logo(200)}
                <!--start header-->
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
                                                    label:'home',
                                                    href:"#"
                                                })}
                                            <!--end list item-->
                                         `,
                                        'id:':`nav_link_`,
                                        'key':`nav_link_`,
                                        'hx-get':``,
                                        'hx-swap':'innerHTMl',
                                        'hx-trigger':'click',
                                        'hx-push-url':``,
                                        'hx-target':`#content_module`,
                                        'hx-location':``
                                    })}
                                <!--end unordered list-->
                                `,
                                id:'main_nav',
                                class:'main_nav'
                            })}
                            <!--end nav-->
                        `,
                        id:'main_header_nav',
                        class:'mainHeaderNav'
                    })}
                    ${Button({
                        label:`${lock(9,9)} Wallet Connect`}
                    )}
                <!--end header-->
            `,
            id:'main_header',
            class:'mainHeader'
        })}
    `
    .trim()
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')



                        