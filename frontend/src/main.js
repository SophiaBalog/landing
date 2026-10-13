import './styles/base.css'
import {getSettings, getPages} from "./api";
import { renderBlocks } from './render';
import { footer } from '../../cms/src/layout/footer';
import { header } from '../../cms/src/layout/header';
const app = document.querySelector('#app');



async function start(){
  try {
    const [settings, page] = await Promise.all([
      getSettings(),
      getPages(location.pathname)
    ])

    document.title = ` ${page.title} - ${settings.siteName}`;
    app.innerHTML = `
      ${header(settings)}
      <main>${renderBlocks(page.blocks)}</main>
      ${footer(settings)}`;


  } catch (error) {
    app.textContent = `something went wrong: ${error.message}`
  }
}

start();