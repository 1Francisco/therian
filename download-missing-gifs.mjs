import fs from 'fs';
import https from 'https';
import http from 'http';
import path from 'path';

const data = {
    dragon: [
        'https://i.redd.it/6f692yfrk3jf1.gif',
        'https://i.redd.it/jk78ok34f9k91.gif'
    ],
    fox: [
        'https://i.redd.it/wrl1nw6bx0l71.gif',
        'https://i.redd.it/c6a226ktvnwf1.gif'
    ],
    wolf: [
        'https://i.redd.it/6ys6s7j7oqqf1.gif',
        'https://i.redd.it/p4r4ctdsykif1.gif'
    ],
    deer: [
        'http://i.imgur.com/0COomeS.gif',
        'http://i.imgur.com/0COomeS.gif'
    ],
    dog: [
        'https://i.redd.it/uop7a6xyjsab1.gif',
        'https://i.redd.it/5adp67ks7f2g1.gif'
    ]
};

const dir = path.join(process.cwd(), 'public', 'gifs');

Object.entries(data).forEach(([animal, urls]) => {
    urls.forEach((url, i) => {
        // Note: We skip cat because it was already successfully downloaded from Giphy 
        const filePath = path.join(dir, `${animal}-${i + 1}.gif`);
        const protocol = url.startsWith('https') ? https : http;
        protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            if (res.statusCode !== 200) {
                console.error(`Failed ${url} with status ${res.statusCode}`);
                return;
            }
            const stream = fs.createWriteStream(filePath);
            res.pipe(stream);
            stream.on('finish', () => console.log(`Downloaded ${filePath} from ${url}`));
        }).on('error', console.error);
    });
});
