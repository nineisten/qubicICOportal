const css = /*css*/`
    section{
        display:flex;
        flex-grow:1;
    }
    .rows{
        flex-direction:row;
        align-items: center;
        justify-content:space-evenly;
    }
    .columns{
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:10pt;
        /* flex-grow:1; */
    }
    
`
function Section (content:string,...meta:{tag:string,val:string}[]){
    const html = /*html*/`
        <style>${css}</style>
        <section 
        ${meta.map((m)=>/*html*/`
            ${m.tag}=${m.val}
        `
        ).join(' ')}
        >
            ${content}
        </section>
    `
    return html
}
export default Section;