var r=function(r,t,a,o){var e=n(a-r),u=n(o-t),h=Math.sin(e/2)*Math.sin(e/2)+Math.cos(n(r))*Math.cos(n(a))*Math.sin(u/2)*Math.sin(u/2);return 2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h))*6371},n=function(r){return r*(Math.PI/180)},t=function(n,t,a){var o=n.lat,e=n.long;return void 0===a&&(a=!0),new Promise(function(n,u){try{!function(r,n,t,a){if(!r||!n||!t)throw new Error("Invalid arguments");if("number"!=typeof r||"number"!=typeof n)throw new Error("lat and long should be numbers");if(!Array.isArray(t))throw new Error("Second argument should be an array");if("boolean"!=typeof a)throw new Error("Asc argument should be a boolean")}(o,e,t,a),n(t.sort(function(n,t){var u=r(o,e,n.lat,n.long),h=r(o,e,t.lat,t.long);return a?u-h:h-u}))}catch(r){u(r)}})};export{t as default};
//# sourceMappingURL=sort.module.js.map