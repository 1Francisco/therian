import https from 'https';

const key = 'dc6zaTOxFJmzC';
const queries = ['wolf funny', 'fox funny', 'cat funny', 'dragon funny', 'golden retriever funny', 'deer funny'];

queries.forEach(q => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(q)}&api_key=${key}&limit=2`;
    https.get(url, res => {
        let raw = '';
        res.on('data', chunk => raw += chunk);
        res.on('end', () => {
            try {
                const data = JSON.parse(raw);
                const urls = data.data.map(d => d.images.original.url);
                console.log(`"${q.split(' ')[0]}":`, JSON.stringify(urls, null, 2) + ',');
            } catch (e) {
                console.error(e);
            }
        });
    });
});
