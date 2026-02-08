export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
  const path = url.pathname;

  // 匹配 /editor 路径
  if (path.startsWith('/editor')) {
    return context.env.ASSETS.fetch(new URL('/editor.html', url));
  }
  
  // 匹配 /widget 路径
  if (path.startsWith('/widget')) {
    return context.env.ASSETS.fetch(new URL('/widget.html', url));
  }
  
  // 匹配 /docs 路径
  if (path.startsWith('/docs')) {
    return context.env.ASSETS.fetch(new URL('/docs.html', url));
  }
  
  // 其他情况
  return context.env.ASSETS.fetch(new URL('/index.html', url));
};