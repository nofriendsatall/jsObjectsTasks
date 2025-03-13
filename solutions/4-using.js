// BEGIN
export default function getDomainInfo(url){
    let scheme = 'http';
    let name = url;
  
    if (url.startsWith('https://')) {
      scheme = 'https';
      name = url.slice(8); // Удаляем 'https://' (8 символов)
    } else if (url.startsWith('http://')) {
      scheme = 'http';
      name = url.slice(7); // Удаляем 'http://' (7 символов)
    }
  
    return { scheme, name };
  };
// END