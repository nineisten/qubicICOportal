import Button from "../components/elements/button"
import Div from "../components/elements/div"
import Main from "../components/elements/main"
import Section from "../components/elements/section"
import Badge from "../mods/badge"
import Banner from "../mods/banner"
import Card from "../mods/card"


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
                            <h1>ICO Management Made Easy</h1>
                            ${Button({
                                label:'Get Started'
                            })}
                        <!--end banner-->
                        `,
                    })}
                       
                 <!--end section 1-->
                `,class:'flex_columns'
            })}
            ${Section({
                content:/*html*/`
                <!--start section 2-->
                    
                    ${Card({
                                card_header:/*html*/`
                                <!-- start card header-->
                                    <h3>$ABC</h3> 
                                    ${Badge({
                                        label:'active',
                                        class:'active'
                                    })}
                                <!-- start card header-->
                                `,
                                card_body:/*html*/`
                                <!-- start card body-->
                                    <h1>Abracadabra</h1>
                                <!-- start card body-->
                                `,
                                card_footer:/*html*/`
                                <!-- start card footer-->
                                ${Div({
                                    content:/*html*/`
                                     <!-- start tiles-->
                                     ${Div({
                                        content:/*html*/`
                                         <!-- start tile-->
                                            <h4>Max-Supply:</h4>
                                            <span class="secondary">1b<span>
                                        <!-- end tile-->
                                        `,
                                        class:'tile'

                                    })}
                                    ${Div({
                                        content:/*html*/`
                                        <!-- start tile-->
                                           <h4>Price:</h4><span class="active"> 123 Qubic</span>
                                        <!-- start tile-->
                                        `,
                                        class:'tile',
                                    })}
                                    <!-- end tiles-->
                                    `,
                                    class:'tiles'
                                })}
                                   
                                    ${Button({
                                        label:'View Project',
                                        class:'fullButton'
                                    })}
                                    
                                <!-- start card footer-->
                                `
                            })}
                            ${Card({
                                card_header:/*html*/`
                                <!-- start card header-->
                                    <h3>$DEF</h3> 
                                    ${Badge({
                                        label:'active',
                                        class:'active'
                                    })}
                                <!-- start card header-->
                                `,
                                card_body:/*html*/`
                                <!-- start card body-->
                                    <h1>Decentralized Energy Fund</h1>
                                <!-- start card body-->
                                `,
                                card_footer:/*html*/`
                                <!-- start card footer-->
                                ${Div({
                                    content:/*html*/`
                                     <!-- start tiles-->
                                     ${Div({
                                        content:/*html*/`
                                         <!-- start tile-->
                                            <h4>Max-Supply:</h4>
                                            <span class="secondary">10M<span>
                                        <!-- end tile-->
                                        `,
                                        class:'tile'

                                    })}
                                    ${Div({
                                        content:/*html*/`
                                        <!-- start tile-->
                                           <h4>Price:</h4><span class="active"> 20k Qubic</span>
                                        <!-- start tile-->
                                        `,
                                        class:'tile',
                                    })}
                                    <!-- end tiles-->
                                    `,
                                    class:'tiles'
                                })}
                                   
                                    ${Button({
                                        label:'View Project',
                                        class:'fullButton'
                                    })}
                                    
                                <!-- start card footer-->
                                `
                            })}
                            ${Card({
                                card_header:/*html*/`
                                <!-- start card header-->
                                    <h3>$QST</h3> 
                                    ${Badge({
                                        label:'active',
                                        class:'active'
                                    })}
                                <!-- start card header-->
                                `,
                                card_body:/*html*/`
                                <!-- start card body-->
                                    <h1>Qusino Standard Token</h1>
                                <!-- start card body-->
                                `,
                                card_footer:/*html*/`
                                <!-- start card footer-->
                                ${Div({
                                    content:/*html*/`
                                     <!-- start tiles-->
                                     ${Div({
                                        content:/*html*/`
                                         <!-- start tile-->
                                            <h4>Max-Supply:</h4>
                                            <span class="secondary">1.8b<span>
                                        <!-- end tile-->
                                        `,
                                        class:'tile'

                                    })}
                                    ${Div({
                                        content:/*html*/`
                                        <!-- start tile-->
                                           <h4>Price:</h4><span class="active"> 777 Qubic</span>
                                        <!-- start tile-->
                                        `,
                                        class:'tile',
                                    })}
                                    <!-- end tiles-->
                                    `,
                                    class:'tiles'
                                })}
                                   
                                    ${Button({
                                        label:'View Project',
                                        class:'fullButton'
                                    })}
                                    
                                <!-- start card footer-->
                                `
                            })}

                <!--end section 2-->
                `,class:'grid_columns'
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