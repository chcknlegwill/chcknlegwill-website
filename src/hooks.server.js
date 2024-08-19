//going to have to entirely re-write this... starting at 00:15, 16/08/2024

// logs.txt location (from this file hooks.server.js) -->  (src)/ .logs\logs.txt


import { writeFile } from 'fs/promises';

import { DataTexture } from 'three';
import { format } from "date-fns";

/*
const logEvents = async (message) => {
    const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
    const logItem = `${dateTime}\t${randomUUID}\t${message}\n`;
    const logConsole = `${message}`;
    //console.log(logItem); //logs any requests to the console
	try { //checks if the folder "../logs" exists, if not then makes the folder with .mkdir
		if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
			await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
		};
		await fsPromises.appendFile(path.join(__dirname, "..", "logs", "reqLog.txt"), logItem); //if folder exists, log to the file
	} catch (err) {
		console.log(err);
	};
};
*/

//IMPORTANT fs/promises does not work with cloudflare pages (node js modules aren't availible on serverless systems like cloudflare pages ) 


/** @type {import("@sveltejs/kit").Handle} */
export async function handle({ event, resolve}) {
    //if(event.url.pathname.startsWith("/ruh")){
    //    return new Response("bruh moment");
    //} works!! 

    const reqStartTime = Date.now();
    
    const response = await resolve(event);
    const logItem = `${new Date(reqStartTime).toString()} ${event.request.method} ${event.url.pathname} (${Date.now() - reqStartTime}ms) ${response.status}\n`;
    /*
    try {
        await writeFile("src/logs/logs.txt", logItem, {flag: 'a' }); // logitem, { flag: 'a' }); --> this APPENDS the file rather than overwriting it
    } catch (err) {
        console.error("Error writing to the log file:, ", err);
    }
        //un-comment the above try statement when website is running on something like a VPS
    */ 
    console.log(logItem);

    return response;
}