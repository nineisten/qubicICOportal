import Logo from "../components/branding/logo"
import Link from "../components/elements/link"
import Li from "../components/elements/li"
import Header from "../components/elements/header"
import Button from "../components/elements/button"
import Nav from "../components/elements/nav.ts"
import Lock  from "../components/svg/lock.ts"
import Unlock from "../components/svg/unlock.ts"
import type { GlobalHtmlAttributes} from "../types/html_attrs";
import { html} from "../types/safe_html";
import Ulist from "../components/elements/ul"
import Hamburger from "../components/svg/hamburger"
import Input from "../components/elements/input"
import Label from "../components/elements/label"
import Close from "../components/svg/close.ts"

interface MainHeaderProps extends GlobalHtmlAttributes {
}

//Stylesheet
const css:string = /*css*/`
    #mobile_menu_toggle{
        display:none;
    }
    .mobile-menu {
        display:none;
        flex-direction:column;
        background:var(--bg-color),
        padding: 10pt 20pt ;
        gap: 5pt;
        font-size:12pt;
    }
    .mobile-menu a{
        display:block;
        padding:10pt;
        text-align:center;
    }
    .mainHeader{
        display: flex;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;
        color:white;
        width:100%;
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
        .mainHeader{
            flex-direction:column;
        }
        #mobile_menu_toggle:checked ~ .mobile-menu{
        display:flex;
        }
        .ham-icon {
        display: block;
    }
    .x-icon {
        display: none;
    }

    /* When menu open: hide hamburger, show X */
    #mobile_menu_toggle:checked ~ .hamburger .ham-icon {
        display: none;
    }
    #mobile_menu_toggle:checked ~ .hamburger .x-icon {
        display: block;
    }
    }
`
//View template
function MainHeader (props:MainHeaderProps){
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
        ${ 
        !wallet? 
        Button({
            label:`${Lock(9,{})} Connect`,
             'hx-get':"/connect", 
            'hx-target':"#content_module", 
            'hx-swap':'innerHTML', 
            'hx-trigger':'click',
            class:'full'
        }):
        Unlock(15,{
            class:'full',
            'hx-get':"/disconnect", 
            'hx-target':"#content_module", 
            'hx-swap':'innerHTML', 
            'hx-trigger':'click',
        })
        }

        <!-- responsive menu-->
        
        ${Input({
            content:'',
            'type':"checkbox",
            id:"mobile_menu_toggle"
        })}
        ${Label({
            content:/*html*/`
                ${Hamburger(20,{
                    class:'ham-icon'
                })}
                ${Close(20,{
                    class:'x-icon'
                })}
            `,
            'for':"mobile_menu_toggle",
             class:'mobile hamburger'
        })}
        

         ${Nav({
            content:/*html*/`
            ${Link({
                label:'Home', 
                'hx-get':"/", 
                'hx-target':"#content_module", 
                'hx-swap':'innerHTML', 
                'hx-trigger':'click'
            })}
            ${Link({
                label:'About', 
                'hx-get':"/about", 
                'hx-target':"#content_module", 
                'hx-swap':'innerHTML', 
                'hx-trigger':'click'
                })}
            ${Link({
                label:'Contact', 
                'hx-get':"/contact", 
                'hx-target':"#content_module", 
                'hx-swap':'innerHTML', 
                'hx-trigger':'click'
            })}
            ${ 
                !wallet? Button({
                label:`${Lock(9,{})} Connect`,
                'hx-get':"/connect", 
                'hx-target':"#content_module", 
                'hx-swap':'innerHTML', 
                'hx-trigger':'click'
                }):Unlock(15,{
                    class:'mobile'
                })
            }
            `,
            class:'mobile mobile-menu'

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


export default MainHeader;
                        