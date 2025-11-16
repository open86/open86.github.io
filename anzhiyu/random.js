var posts=["2025/11/16/这是一篇新的博文66666/","2025/11/16/你好啊/","2025/11/16/hello-world/","2025/11/16/这是一篇新的博文8888/","2025/11/16/这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };