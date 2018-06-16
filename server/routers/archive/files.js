import {readDir} from './../helpers'
import si from "systeminformation";

export default async (ctx,next)=> {
  try {
    // console.log();
    // console.log(ctx.params.file);
    let files = await readDir()
    const data = await si.getStaticData(cb => cb)

    let body = files.map(file => {
      let bd = !(file.search(/\./g) != -1)
        ? `<a href="${file}"><span uk-icon="icon: folder"></span>${file}</a>`
        : `${file}`
      return `<li>${bd}</li>`
    });

    ctx.body = body
  } catch (e) {
    console.error(e)
  }
}
