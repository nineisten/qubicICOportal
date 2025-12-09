import Div from "../components/elements/div";
import Img from "../components/elements/img";
import Main from "../components/elements/main";
import Section from "../components/elements/section";

const css = /*css*/`
    .imgBox{
        display:flex;
        background:black;
        flex-direction:column;
        overflow: hidden;
        border-radius:10pt;
        max-width: max-content;

    }
    .contentBox{
        padding:10pt;
        display:flex;
        flex-direction:column;
        max-width: 60%;
        gap:10pt;
    }
`
function About(){
    const html = /*html*/`
     <style>${css}</style>
    ${Main({
        content:/*html*/`
        <!--start main-->
        ${Section({
            content:/*html*/`
                <!--start section-->
                ${Div({
                    content:/*html*/`
                        <!--start div-->
                        ${Div({
                            content:/*html*/`
                            <!--start main-->
                                ${Img({
                                    alt:'qipdazzle',
                                    src:'/qipdazzle.png'
                                })}
                            <!--end main-->
                            `,class:'imgBox'
                        })}
                        
                        <h1>What is QIP?</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Voluptatem rerum delectus quae dolores totam illo esse, 
                            aliquid ipsum enim omnis cum, inventore soluta officiis 
                            impedit sunt, porro culpa reiciendis vel!
                        </p>
                        <!--end div-->
                    `,class:'contentBox'
                })}
               
                <!--end section-->
            `,
            class:'flex_columns'
        })}
       
        
        <!--end main-->
    `,
    'hx-location':'/about',
    'hx-push-url':'/about'

    })}
    `
    return html.trim()
}
export default About;