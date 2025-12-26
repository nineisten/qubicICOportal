# Views FOLDERS 
**Mods = Modules**
- /api/views/pages - Page Templates
- /api/views/mods - Module templates
- /api/views/components - 1:1 html elemental component templates (Header(),Footer(),etc...)
- These are the folders where you store custom Modules & page templates.
- components should only be used for HTML elements or minor custom components like svg files.
- Modules and pages can be built by nesting componenets and applying attributes (rest operator allows for multiple comma separated objects)
- syntax:  
```javascript
    // use standard functions and not arrow functions
    const html = /*css*/`
        #css goes here
    `
    function SomeModule (content:string,...meta:{tag:string,val:string}[]){
        <style>${css}</style>
          const html = /*html*/`
            ${ExampleModule(
                /*html*/`
                ${ChildModule(/*html*/`
                     <!--insert another html string here-->
                    `, 
                    ${tag:'attribute',val:'correspondingValue'},
                    ${tag:'hx-get',val:"/get-this"}
                )}
                ${AnotherChildModule(/*html*/`
                        <!--keep it going-->
                    `, 
                    ${tag:'attribute',val:'correspondingValue'},
                    ${tag:'hx-get',val:"/get-that"}
                )}
                 `,
                ${tag:'attribute',val:'correspondingValue'},
                ${tag:'hx-get',val:"/get-the-other"}
            )}`
        return html
    
    }
            
```
### Practical Example:
**Serve Template**
- serve.ts
- this is the file that makes the magic happen

    ---
    ~~~javascript 
    //import all necessary components
    import AppFrame from "../mods/app_frame.ts";
    import MainHeader from "../mods/main_header.ts";
    import Main from "../components/elements/main.ts";
    import Footer from "../components/elements/footer.ts";

    function serve(){
    const html = /*html*/`
        <!-- App frame is the root window - include this in all templates -->
        ${AppFrame(/*html*/`
            
            <!--app starts here -->

            ${MainHeader(true)}<1-- goes to the MainHeader module with a boolean value for faux authentication-->

            ${Main(/*html*/` 

            <!-- page content swaps here-->

            `,{tag:'id',val:'content_module'})} <!-- this is where your tag meta data (id, class, data - _____, etc) goes. -->

            ${Footer({year:2025,entity:'Qubic ICO'},/*html*/`
            `)}
            <!-- app ends here -->
        `)}
        
    `
    return html }
    export default serve;

    ~~~
- The creates a contained environment for you to quickly build effective Views.

- happy coding. 