var r=function(r,t,o,a){var e=n(o-r),u=n(a-t),h=Math.sin(e/2)*Math.sin(e/2)+Math.cos(n(r))*Math.cos(n(o))*Math.sin(u/2)*Math.sin(u/2);return 2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h))*6371},n=function(r){return r*(Math.PI/180)};module.exports=function(n,t,o){var a=n.lat,e=n.long;return void 0===o&&(o=!0),new Promise(function(n,u){try{!function(r,n,t,o){if(!r||!n||!t)throw new Error("Invalid arguments");if("number"!=typeof r||"number"!=typeof n)throw new Error("lat and long should be numbers");if(!Array.isArray(t))throw new Error("Second argument should be an array");if("boolean"!=typeof o)throw new Error("Asc argument should be a boolean")}(a,e,t,o),n(t.sort(function(n,t){var u=r(a,e,n.lat,n.long),h=r(a,e,t.lat,t.long);return o?u-h:h-u}))}catch(r){u(r)}})};
//# sourceMappingURL=sort.cjs.map