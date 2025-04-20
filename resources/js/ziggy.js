const Ziggy = {"url":"http:\/\/127.0.0.1:8000","port":8000,"defaults":{},"routes":{"users.index":{"uri":"users","methods":["GET","HEAD"]},"users.create":{"uri":"users\/create","methods":["GET","HEAD"]},"users.store":{"uri":"users","methods":["POST"]},"users.show":{"uri":"users\/{user}","methods":["GET","HEAD"],"parameters":["user"]},"users.edit":{"uri":"users\/{user}\/edit","methods":["GET","HEAD"],"parameters":["user"]},"users.update":{"uri":"users\/{user}","methods":["PUT","PATCH"],"parameters":["user"]},"users.destroy":{"uri":"users\/{user}","methods":["DELETE"],"parameters":["user"]},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
