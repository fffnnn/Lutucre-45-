//lower case
var persoName = "Nadeem";
console.log("lowercase:", persoName.toLowerCase());
//upper case
console.log("uppercase:", persoName.toUpperCase());
//Title case
console.log("titlecase:", persoName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
