export function render(_url: string) {
  const html = /*html*/`
    <div 
      id="app_frame" 
      hx-root
      hx-get="portal/views/page/serve"
      hx-trigger="load" 
      hx-target="#app_frame" 
      hx-swap="outterHTML"
    >
      <!--app content will be loaded here - do not touch anything above this line. 
      anything below should be for loading effects only-->
      Loading... 
    </div>
  `
  return { html }
}
