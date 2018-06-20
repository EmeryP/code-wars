var string = "The-Stealth-Warrior";

function toCamelCase(string){
  return string.replace(/(_|-)([a-zA-Z])/g, toUpperCase)
}

function toUpperCase(string){
  return string[1].toUpperCase();
}
toCamelCase(string)