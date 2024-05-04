/* eslint-disable prefer-destructuring */

export default function extractDomain(url: string) {
  let domain;

  if (url.includes('//')) {
    // find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf('//') > -1) {
      domain = url.split('/')[2];
    } else {
      domain = url.split('/')[0];
    }

    // find & remove port number
    domain = domain.split(':')[0];
    // find & remove "?"
    domain = domain.split('?')[0];

    // find & remove "www."
    domain = domain.replace(/www./g, '');

    return domain;
  }

  return false;
}
