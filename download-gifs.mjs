import fs from 'fs';
import https from 'https';
import path from 'path';

const data = {
    wolf: ["hzpn4rIxysA7471IwF", "WfNNRpsw3wDWE"],
    fox: ["B1aXGj2iX1QIM", "xT3i1554m87fQ"], // alternative "h9i6KeMGniosU"
    cat: ["JIX9t2j0ZTN9S", "GeimqsH0TLDt4tScGw"],
    dragon: ["3o7TKGy6TIGGwnimf6", "l1J9I0Q8MioFpAiyc"],
    dog: ["4Zo41lhzKt6iZ8xff9", "3oz8xyqQobGqZgAovK"],
    deer: ["Lp5R0l8r0iJ0c", "xT0xeQ1ZUc0TvuXzxu"]
};

const dir = path.join(process.cwd(), 'public', 'gifs');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

function handleRedirectsAndDownload(url, filePath, callback) {
    https.get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            // follow redirect
            handleRedirectsAndDownload(res.headers.location, filePath, callback);
        } else if (res.statusCode === 200) {
            const stream = fs.createWriteStream(filePath);
            res.pipe(stream);
            stream.on('finish', () => {
                stream.close();
                callback(null, filePath);
            });
        } else {
            callback(new Error(`Failed to download ${url}: HTTP ${res.statusCode}`));
        }
    }).on('error', callback);
}

let pending = 0;

Object.entries(data).forEach(([animal, ids]) => {
    ids.forEach((id, i) => {
        pending++;
        const url = `https://media.giphy.com/media/${id}/giphy.gif`;
        const filePath = path.join(dir, `${animal}-${i + 1}.gif`);

        handleRedirectsAndDownload(url, filePath, (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`Downloaded ${animal}-${i + 1}.gif`);
            }
            pending--;
            if (pending === 0) {
                console.log('All downloads finished');
            }
        });
    });
});
