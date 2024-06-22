var f=Object.defineProperty,d=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols,l=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,y=Reflect.get;var u=(a,e,r)=>e in a?f(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,N=(a,e)=>{for(var r in e||={})w.call(e,r)&&u(a,r,e[r]);if(o)for(var r of o(e))p.call(e,r)&&u(a,r,e[r]);return a},B=(a,e)=>d(a,h(e));var E=(a,e)=>{var r={};for(var t in a)w.call(a,t)&&e.indexOf(t)<0&&(r[t]=a[t]);if(a!=null&&o)for(var t of o(a))e.indexOf(t)<0&&p.call(a,t)&&(r[t]=a[t]);return r};var $=(a,e)=>{for(var r in e)f(a,r,{get:e[r],enumerable:!0})};var g=(a,e,r)=>y(l(a),r,e);var P=(a,e,r)=>new Promise((t,s)=>{var c=n=>{try{m(r.next(n))}catch(i){s(i)}},k=n=>{try{m(r.throw(n))}catch(i){s(i)}},m=n=>n.done?t(n.value):Promise.resolve(n.value).then(c,k);m((r=r.apply(a,e)).next())});var M=class a{constructor(e,r){this.correlationId=r,this.measureName=a.makeMeasureName(e,r),this.startMark=a.makeStartMark(e,r),this.endMark=a.makeEndMark(e,r)}static makeMeasureName(e,r){return`msal.measure.${e}.${r}`}static makeStartMark(e,r){return`msal.start.${e}.${r}`}static makeEndMark(e,r){return`msal.end.${e}.${r}`}static supportsBrowserPerformance(){return typeof window<"u"&&typeof window.performance<"u"&&typeof window.performance.mark=="function"&&typeof window.performance.measure=="function"&&typeof window.performance.clearMarks=="function"&&typeof window.performance.clearMeasures=="function"&&typeof window.performance.getEntriesByName=="function"}static flushMeasurements(e,r){if(a.supportsBrowserPerformance())try{r.forEach(t=>{let s=a.makeMeasureName(t.name,e);window.performance.getEntriesByName(s,"measure").length>0&&(window.performance.clearMeasures(s),window.performance.clearMarks(a.makeStartMark(s,e)),window.performance.clearMarks(a.makeEndMark(s,e)))})}catch{}}startMeasurement(){if(a.supportsBrowserPerformance())try{window.performance.mark(this.startMark)}catch{}}endMeasurement(){if(a.supportsBrowserPerformance())try{window.performance.mark(this.endMark),window.performance.measure(this.measureName,this.startMark,this.endMark)}catch{}}flushMeasurement(){if(a.supportsBrowserPerformance())try{let e=window.performance.getEntriesByName(this.measureName,"measure");if(e.length>0){let r=e[0].duration;return window.performance.clearMeasures(this.measureName),window.performance.clearMarks(this.startMark),window.performance.clearMarks(this.endMark),r}}catch{}return null}};export{N as a,B as b,E as c,$ as d,g as e,P as f,M as g};
