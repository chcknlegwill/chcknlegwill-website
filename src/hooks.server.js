import { writeFile } from "fs/promises";
/** @type {import("@sveltejs/kit").Handle} */
export async function handle({ event, resolve}) {
    /*if(event.url.pathname.startsWith("/ruh")){
        return new Response("bruh moment");
    } */
    const reqStartTime = Date.now();
    
    const response = await resolve(event);
    const logItem = (
        new Date(reqStartTime).toISOString(),
        event.request.method,
        event.url.pathname,
        `(${Date.now() - reqStartTime})`,
        response.status
    );
    console.log(logItem);
    writeFile("src/logs/logs.txt", event.request.method);
    //need to fix this, but working!!!!

    return response;
}
