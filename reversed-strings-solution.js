function solution(str){
  //.split breaks up string into separate letters
  return str.split('').reverse().join('');
  //.reverse flips the order of separate letters
  //.join then brings together those flipped separate letters
}
