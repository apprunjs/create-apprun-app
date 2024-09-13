import action from 'apprun-site/action.js'

const comic = async () => {
  //#if Server
  let response = await fetch('https://xkcd.com/info.0.json');
  const current = await response.json();
  const num = Math.floor(Math.random() * current.num) + 1;
  response = await fetch(`https://xkcd.com/${num}/info.0.json`);
  return response.json();
  //#endif
}

export default action(comic, 'comic');