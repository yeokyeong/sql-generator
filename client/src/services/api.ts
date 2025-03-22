
import axios from 'axios';

const baseUrl = "http://localhost:3000"

async function getBusinessOpenCloseStats(queryString: any) {
   const searchParams = new URLSearchParams(queryString);
   return  await fetch(baseUrl+`/business-open-close-stats?${searchParams.toString()}`);
}


export {getBusinessOpenCloseStats}