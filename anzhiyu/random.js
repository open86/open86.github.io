var posts=["wenzhang/这是另一篇新的博文/","wenzhang/hello-world/","wenzhang/风格哥哥/","wenzhang/这是一篇新的博文000/","wenzhang/这是一篇新的文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };