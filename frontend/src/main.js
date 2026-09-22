import {getSettings, getPages} from "./api";

const app = document.querySelector('#app');



async function start(){
  try {
      // const settings = await getSettings();
    const [settings, page] = await Promise.all([
      getSettings(),
      getPages(location.pathname)
    ])

    document.title = ` ${page.title} - ${settings.siteName}`;


    console.log(settings,page);
  } catch (error) {
    app.textContent = `something went wrong: ${error.message}`
  }
}

start();