import axios from 'axios'

const KEY = 'AIzaSyDgZr6MP5tZVtNo6ocpimFYeTPp7wPkMPY';
//const KEY = 'AIzaSyBMzbvwj9Gj1jzDS_OxG7tyMs-zMPVhLWQ'; 

export const baseParams = {
    part: 'snippet',
    maxResults: 20,
    key: KEY
};

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});