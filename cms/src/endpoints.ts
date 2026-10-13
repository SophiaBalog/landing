import { equal } from 'assert';
import type { PayloadRequest , Endpoint} from 'payload'
import { title } from 'process';

function blockCleaner(block:Record<string,any>){
    const {id,blockName,blockType,image,...rest} = block;
    const clean: Record< string,any> = {type:blockType,...rest};
    if (image && typeof image == 'object'){
        clean.image = {src:image.url, alt:image.alt}
    }
    return clean;
}

export const commonEndpoint: Endpoint = {
    path:'/common',
    method: 'get',
    handler: async(req: PayloadRequest) => {
        const common = await req.payload.findGlobal({slug:'common'})
        return Response.json({
            siteName: common.siteName,
            menu: (common.menu??[]).map(({label,link}: any)=>({
                label,link
            })),
            footer: {
                text: common.footer?.text ?? ''
            },
        })
}}

export const pageEndpoint: Endpoint={
    path: '/page',
    method: 'get',
    hadler: async (req:PayloadRequest)=>{
        const path=req.query.path;
        const result = await req.payload.find({
            collection: 'pages',
            where: {path: {equals:path}},
            depth:2,
            limit:1
        })
        const page = result.docs[0];

        if (!page){
            return Response.json({error:'not exist'},{status:404})
            path:page.path;
            title:page.title;
            blocks: (page.blocks?? []).map(blockCleaner);
        }
    }
}