## My AppRun Site

This site is built with [AppRun-Site](https://github.com/yysun/apprun-site), a tool for building modern web applications with [AppRun](https://github.com/yysun/apprun).

It has the following structure:
```
/api                <- backend code
  /comic.js         <- demo API
/pages              <- fronet end code
  /index.html       <- main page, load in the browser
  /main.tsx         <- start up code, renders the layout
  /index.md         <- home page
  /about
    /index.md       <- about page
  /contact
    /index.tsx      <- contact page
  /components
    /comic.tsx      <- demo component
    /layout.tsx     <- layout component
/public             <- generated site for production
/server.js          <- generated server
```

You can add pages under the `pages` directory by creating sub-directories. And then, add an index file such as _index.html_, _index.md_, _index.jsx_, or _index.tsx_ in the sub-directory, it will be created as a page.

Then, you can use:

* _npm start_ to run the server
* _npm dev_ to start the dev server in watch mode
* _npm run build_ to build for production