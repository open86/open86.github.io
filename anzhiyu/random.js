var posts=["2025/11/25/这是一片新的博文/","2025/11/17/反倒是/","2025/11/16/你好啊/","2025/11/16/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };