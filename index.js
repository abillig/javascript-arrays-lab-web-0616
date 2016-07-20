const app = "I don't do much."


var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop(-1);
}

function destructivelyRemoveFirstKitten(){
  kittens.shift(0);
}

function appendKitten(name){
  kittens = [...kittens, name];
  return kittens;
}

function prependKitten(name){
  kittens = [name, ...kittens];
  return kittens;
}

function removeLastKitten(){
  kittens = kittens.slice(0, kittens.length - 1);
  return kittens;
}

function removeFirstKitten(){
  kittens = kittens.slice(1);
  return kittens;
}