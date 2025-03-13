
import axios from 'axios';

const baseUrl = "http://localhost:3000"

async function getBusinessOpenCloseStats() {
   return  await fetch(baseUrl+'/business-open-close-stats')
}


export {getBusinessOpenCloseStats}