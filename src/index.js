/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
	  const url = new URL(request.url);
	  const city = url.searchParams.get("city") || "New York";
	  const key = env.OPENWEATHER_API_KEY;
  
	  const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${key}`);
	  const data = await weatherRes.json();
  
	  return new Response(JSON.stringify(data), {
		headers: {
		  "Content-Type": "application/json",
		  "Access-Control-Allow-Origin": "*"
		}
	  });
	}
  };
  


// export default {
// 	async fetch(request, env, ctx) {
// 		const url = new URL(request.url);
// 		switch (url.pathname) {
// 			case '/message':
// 				return new Response('Hello, World!');
// 			case '/random':
// 				return new Response(crypto.randomUUID());
// 			default:
// 				return new Response('Not Found', { status: 404 });
// 		}
// 	},
// };
