import Button from "../components/elements/button"
import Main from "../components/elements/main"
import Section from "../components/elements/section"
import Banner from "../mods/banner"


const css = /*css*/`

`
function Home(){
    const html = /*html*/`
    <style>${css}</style>
    ${Main({
        content:/*html*/`
             <!--start content-->
            ${Section({
                content:/*html*/`
                <!--start section 1-->
                    ${Banner({
                        content:/*html*/`
                        <!--start banner-->
                            <h2>ICO Management Made Easy </h2>
                            ${Button({
                                label:'Get Started'
                            })}
                        <!--end banner-->
                        `,
                    })}
                       
                 <!--end section 1-->
                `,class:'columns'
            })}
            ${Section({
                content:/*html*/`
                <!--start section 2-->
                    
                <!--end section 2-->
                `,class:'columns'
             })}
        <!--end content-->
        `,
        id:'content_module',
        'hx-location':`/`
    })}
    `
    return html.trim()
}
export default Home