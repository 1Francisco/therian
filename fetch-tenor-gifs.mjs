import fs from 'fs';
import https from 'https';
import path from 'path';

const API_KEY = "LIVDSRZULELA"; // Public Tenor API Key
const queries = {
    wolf: "funny wolf derp",
    fox: "funny fox derp",
    cat: "cat meme funny",
    dragon: "funny dragon cgi",
    dog: "derp golden retriever",
    deer: "funny deer meme"
};

const dir = path.join(process.cwd(), 'public', 'gifs');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

Object.entries(queries).forEach(([animal, q]) => {
    const url = `https://api.tenor.com/v1/search?q=${encodeURIComponent(q)}&key=${API_KEY}&limit=5`;
    https.get(url, res => {
        let raw = '';
        res.on('data', chunk => raw += chunk);
        res.on('end', () => {
            try {
                const data = JSON.parse(raw);
                if (!data.results) return;
                data.results.forEach((r, i) => {
                    const mediaUrl = r.media[0].gif.url;
                    const filePath = path.join(dir, `${animal}-tenor-${i + 1}.gif`);
                    https.get(mediaUrl, resGif => {
                        const stream = fs.createWriteStream(filePath);
                        resGif.pipe(stream);
                        stream.on('finish', () => console.log(`Downloaded ${animal}-tenor-${i + 1}.gif`));
                    });
                });
            } catch (e) { console.error("Error for", animal); }
        });
    });
});
