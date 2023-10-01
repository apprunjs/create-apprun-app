## My AppRun Site

This site is built with [AppRun-Site](https://github.com/yysun/apprun-site), a command-line tool for building modern web applications with [AppRun](https://github.com/yysun/apprun).

It has the following structure:
```
/components
  /comic.tsx        <- demo component
  /layout.tsx       <- layout component
/pages              <- pages of the website
  /index.html       <- index page
  /index.md         <- home page
  /main.tsx         <- start up code (registers web component and renders the layout)
/contact
  /index.tsx        <- contact page
/about
  /index.md         <- about page
/public             <- static website
```

You can add pages to the directory `pages`; they can be HTML files, markdown files, and tsx/jsx files (AppRun components).

Then, you can use:

* _npm start_ to start the preview server
* _npm run dev_ to start the dev server
* _npm run build_ to build for production
* _npm run render_ to build a static website