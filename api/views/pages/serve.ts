import AppFrame from "../mods/app_frame.ts"
import MainHeader from "../mods/main_header.ts";

const serve = ()=>{
    const html = /*html*/`
        ${AppFrame(/*html*/`
            ${MainHeader(true)} 
            `)}
        
    `
    return html
}
export default serve;