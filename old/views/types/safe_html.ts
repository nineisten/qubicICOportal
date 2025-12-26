export type HtmlSafeString = string & {__brand:'HtmlSafe'}

export const html = (content:TemplateStringsArray, ...meta:unknown[]):HtmlSafeString=>
    String.raw(content,...meta) as HtmlSafeString 