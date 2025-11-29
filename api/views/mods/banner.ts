const css = /*css*/`
    .banner{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:5pt;
        text-transform:uppercase;
    }
    .banner h1{
        font-size:5rem;
        font-weight:600;
        
        margin:0;
        border:3pt solid #fff;
        padding:10pt 20pt;
        border-radius: 5pt;
        box-sizing: content-box;
    }
    .banner h5{
        font-size:1.25rem;
        font-weight:500;
        margin:0;
        padding:0;
        box
    }
    .banner button{
        padding:10pt 40pt;
        font-size:12pt;
    }
`
function Banner (content:string,...meta:{tag:string,val:string}[]){
    const html = /*html*/`
        <style>${css}</style>
        <div 
        class= 'banner'
        ${meta.map((m)=>/*html*/`
            ${m.tag}=${m.val}
        `
        ).join(' ')}
        >
            ${content}
        </div>
    `
    return html
}
export default Banner;