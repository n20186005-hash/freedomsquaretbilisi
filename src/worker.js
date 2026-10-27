const canonicalHost = 'freedomsquaretbilisi.com';
function finish(response, method) {
  return new Response(method === 'HEAD' ? null : response.body, response);
}
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.' + canonicalHost || (url.hostname === canonicalHost && url.protocol === 'http:')) {
      url.protocol = 'https:';
      url.hostname = canonicalHost;
      url.port = '';
      return new Response(null, { status:308, headers:{ Location:url.href } });
    }
    if (/^\/(?:en\/|ru\/)?index(?:\.html)?$/.test(url.pathname)) {
      url.pathname = url.pathname.startsWith('/en/') ? '/en/' : url.pathname.startsWith('/ru/') ? '/ru/' : '/';
      return new Response(null, {status:308, headers:{Location:url.href}});
    }
    if (!['GET','HEAD'].includes(request.method)) return new Response(null,{status:405,headers:{Allow:'GET, HEAD','Cache-Control':'no-store'}});
    if (['/en','/ru'].includes(url.pathname)) { url.pathname += '/'; return new Response(null,{status:308,headers:{Location:url.href}}); }
    const errors = ['/404', '/404/', '/404.html','/en/404','/en/404/','/en/404.html','/ru/404','/ru/404/','/ru/404.html'];
    const response = errors.includes(url.pathname) ? null : await env.ASSETS.fetch(request);
    if (response && response.status !== 404) return finish(response,request.method);
    // Cloudflare canonicalizes /404.html to /404; fetch its actual canonical asset.
    const errorURL = new URL('/404',url);
    const asset = await env.ASSETS.fetch(new Request(errorURL,{method:'GET'}));
    const headers = new Headers(asset.headers);
    headers.delete('Location');
    headers.set('Content-Type','text/html; charset=utf-8');
    headers.set('X-Robots-Tag','noindex, follow');
    headers.set('Cache-Control','no-store');
    return new Response(request.method === 'HEAD' ? null : asset.body,{status:404,headers});
  }
};
