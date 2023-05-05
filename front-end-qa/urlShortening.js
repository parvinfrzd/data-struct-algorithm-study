 /*
  Description: https://www.geeksforgeeks.org/how-to-design-a-tiny-url-or-url-shortener/

 */

var idToShortURL = function(n) {
  let map = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'; 
  let shorturl = []; 
  while (n) {
    shorturl.push(map[n % 62]); 
    n = Math.floor(n / 62); 
  }
  shorturl.reverse(); 
  return shorturl.join(" ");
}

var shortURLToId = function (shortUrl) {
  let id = 0; 
  for (let i = 0; i < shortUrl.length; i++) {
    if ('a' <= shortUrl[i] && shortUrl[i] <= 'z')
        id = id * 62 + shortUrl[i].charCodeAt(0) - 'a'.charCodeAt(0);
    if ('A' <= shortUrl[i] && shortUrl[i] <= 'Z')
        id = id * 62 + shortUrl[i].charCodeAt(0) - 'A'.charCodeAt(0) + 26;
    if ('0' <= shortUrl[i] && shortUrl[i] <= '9')
        id = id * 62 + shortUrl[i].charCodeAt(0) - '0'.charCodeAt(0) + 52;
  }
  return id;
}

