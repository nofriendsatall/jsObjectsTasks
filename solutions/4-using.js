// BEGIN
export default function getDomainInfo(url){
    let scheme = 'http';
    let name = url;
  
    if (url.startsWith('https://')) {
      scheme = 'https';
      name = url.slice(8); 
    } else if (url.startsWith('http://')) {
      scheme = 'http';
      name = url.slice(7); 
    }
  
    return { scheme, name };
  };
// END
