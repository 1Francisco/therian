import fs from 'fs';
import https from 'https';
import http from 'http';
import path from 'path';

const queries = {
    wolf: ['moon moon gif', 'funny wolf gif'],
    fox: ['funny fox gif', 'laughing fox gif', 'derp fox gif'],
    cat: ['cat falling gif', 'funny cat gif'], // we already have 6 but let's grab if needed
    dragon: ['funny dragon gif', 'dragon fail gif', 'dragon meme gif'],
    dog: ['funny golden retriever gif', 'derp dog gif', 'funny dog gif'],
    deer: ['funny deer gif', 'derp deer gif']
};

const dir = path.join(process.cwd(), 'public', 'gifs');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function searchReddit(query) {
    return new Promise((resolve) => {
        const url = `https://www.reddit.com/search.json?q=${encodeURIComponent(query)}&sort=relevance&t=all&limit=100`;
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
            let raw = '';
            res.on('data', chunk => raw += chunk);
            res.on('end', () => {
                try {
                    const data = JSON.parse(raw);
                    if (!data.data || !data.data.children) return resolve([]);

                    let urls = data.data.children
                        .map(c => c.data.url)
                        .filter(u => u && (u.endsWith('.gif') || u.endsWith('.gifv') || u.includes('imgur.com/')))
                        .map(u => u.replace('.gifv', '.gif'))
                        .map(u => {
                            if (u.includes('imgur.com') && !u.endsWith('.gif') && !u.endsWith('.png') && !u.endsWith('.jpg')) {
                                return u + '.gif';
                            }
                            return u;
                        })
                        .filter(u => u.endsWith('.gif'));
                    resolve(urls);
                } catch (e) { resolve([]); }
            });
        }).on('error', () => resolve([]));
    });
}

function download(url, filePath) {
    return new Promise((resolve) => {
        const protocol = url.startsWith('https') ? https : http;
        protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (resGif) => {
            if (resGif.statusCode === 200) {
                const stream = fs.createWriteStream(filePath);
                resGif.pipe(stream);
                stream.on('finish', resolve);
            } else if (resGif.statusCode >= 300 && resGif.statusCode < 400 && resGif.headers.location) {
                const loc = resGif.headers.location.startsWith('http') ? resGif.headers.location : `https://${resGif.req.host}${resGif.headers.location}`;
                const redirProto = loc.startsWith('https') ? https : http;
                redirProto.get(loc, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (resRedir) => {
                    if (resRedir.statusCode === 200) {
                        const stream = fs.createWriteStream(filePath);
                        resRedir.pipe(stream);
                        stream.on('finish', resolve);
                    } else resolve();
                }).on('error', resolve);
            } else { resolve(); }
        }).on('error', resolve);
    });
}

async function main() {
    for (const [animal, animalQueries] of Object.entries(queries)) {
        let allUrls = [];
        for (const q of animalQueries) {
            const urls = await searchReddit(q);
            allUrls.push(...urls);
        }
        allUrls = [...new Set(allUrls)].slice(0, 5); // top 5
        console.log(`Found ${allUrls.length} for ${animal}:`, allUrls);

        for (let i = 0; i < allUrls.length; i++) {
            const filePath = path.join(dir, `${animal}-new-${i + 1}.gif`);
            await download(allUrls[i], filePath);
            console.log(`Downloaded ${animal}-new-${i + 1}.gif`);
        }
    }
}

main();
