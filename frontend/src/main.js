import './styles/base.css'
import {getSettings, getPages} from "./api";
import {hero} from "./blocks/hero/hero"

const app = document.querySelector('#app');



async function start(){
  try {
      // const settings = await getSettings();
    const [settings, page] = await Promise.all([
      getSettings(),
      getPages(location.pathname)
    ])

    document.title = ` ${page.title} - ${settings.siteName}`;
    const heroBlock = page.blocks.find((block)=> block.type ==='hero');
    app.innerHTML = hero(heroBlock);


  } catch (error) {
    app.textContent = `something went wrong: ${error.message}`
  }
}

start();