import { writefile } from "fs/promises";
import { format } from "date-fns";


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
      //writefile does not work with cloudflare pages - will work on a VPS though.
  */
  console.log(logItem);

  return response;
}
