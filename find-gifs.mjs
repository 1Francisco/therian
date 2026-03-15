import https from 'https';

const animals = ['wolf', 'fox', 'cat', 'dragon', 'golden retriever', 'deer'];

animals.forEach(animal => {
    const url = `https://www.reddit.com/search.json?q=${encodeURIComponent(animal + ' gif')}&sort=relevance&t=all`;
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
        let raw = '';
        res.on('data', chunk => raw += chunk);
        res.on('end', () => {
            try {
                const data = JSON.parse(raw);
                if (!data.data) return;
                const urls = data.data.children
                    .map(c => c.data.url)
                    .filter(u => u && u.endsWith('.gif'));
                console.log(`"${animal}":`, urls.slice(0, 4));
            } catch (e) { }
        });
    }).on('error', console.error);
});
