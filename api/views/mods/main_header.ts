import Logo from "../components/branding/logo.ts"
import Link from "../components/elements/link.ts"
import Li from "../components/elements/li.ts"
import Header from "../components/elements/header"
import Button from "../components/elements/button.ts"
import Nav from "../components/elements/nav.ts"
import { lock } from "../components/svg/lock.ts"
import type { GlobalHtmlAttributes} from "../types/html_attrs";
import { html} from "../types/safe_html";
import Ulist from "../components/elements/ul"
import Hamburger from "../components/svg/hamburger.ts"

interface MainHeaderProps extends GlobalHtmlAttributes {
}

//Stylesheet
const css:string = /*css*/`
    .mainHeader{
        padding:10pt 0;
        font-size:10pt;
        font-weight:600;
        border-bottom:1pt solid var(--primary-color);
        min-height:40pt;
    }
    .hamburger{
        padding:10pt 0; 
    }

    @media screen and (min-width:63em){
            .mobile{
            display:none
        }
    }

    @media screen and (max-width:63em){
        .full{
            display:none;
        }
    }
`
//View template
export default function MainHeader(props:MainHeaderProps){
    const {wallet,...attrs} = props
   
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
        ${Button({
            label:`${lock(9,9)} Wallet Connect`,
            class:'full',
            'hx-get': '/connect',
            'hx-swap': ''
        })}

        <!-- responsive menu-->
        ${Hamburger(20,{ 
            class:'mobile hamburger',
            'hx-get':'views/mods/menu',
           'hx-target':'#app_frame',
           'hx-swap':true,
           'hx-trigger':'click'
            })}
        <!-- end responsive menu-->

                <!--end header-->
        `,
        id:'main_header',
        class:'mainHeader',
        attrStr
    })}
    `
    .trim()
}
const escape = (s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;')



                        