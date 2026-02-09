exports.handler = async (event) => {
    // Nur POST-Requests erlauben
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // User-Nachricht aus Request extrahieren
        const { message } = JSON.parse(event.body);

        // Claude API-Key aus Environment Variables holen
        const apiKey = process.env.CLAUDE_API_KEY;

        if (!apiKey) {
            throw new Error('API Key nicht konfiguriert');
        }

        // Request an Claude API
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-sonnet-4-20250514',
                max_tokens: 1024,
                messages: [{
                    role: 'user',
                    content: message
                }]
            })
        });

        const data = await response.json();

        // Antwort zurück ans Frontend
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                reply: data.content[0].text
            })
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};