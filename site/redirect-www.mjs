export default {
  fetch(request) {
    const { pathname, search } = new URL(request.url);
    const destination = new URL('https://laravel.xyz');
    destination.pathname = pathname;
    destination.search = search;
    return Response.redirect(destination, 301);
  },
};
