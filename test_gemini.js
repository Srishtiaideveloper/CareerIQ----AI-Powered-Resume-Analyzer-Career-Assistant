// Quick Gemini API test
const API_KEY = 'AIzaSyAIIfehvoDiLkoRiuCJz7WVY8RnHuCVUcQ';

async function test() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: 'Say hello in one word' }] }] })
    });
    const data = await resp.json();
    console.log('Status:', resp.status);
    console.log('Response:', JSON.stringify(data, null, 2));
  } catch (e) {
    console.error('Error:', e.message);
  }
}
test();
