import './styles/base.css'
import {getSettings, getPages} from "./api";
import { renderBlocks } from './render';

const app = document.querySelector('#app');



async function start(){
  try {
    const [settings, page] = await Promise.all([
      getSettings(),
      getPages(location.pathname)
    ])

    document.title = ` ${page.title} - ${settings.siteName}`;
    app.innerHTML = `<main>${renderBlocks(page.blocks)}</main>`;


  } catch (error) {
    app.textContent = `something went wrong: ${error.message}`
  }
}

start();