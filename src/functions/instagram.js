require('isomorphic-fetch');

const url = `https://www.instagram.com/graphql/query/?query_hash=003056d32c2554def87228bc3fd9668a&variables={"id":"40852332971", "first": 4}`;
 
const cache = {
  lastFetch: 0,
  posts: [],
}

async function getPosts() {
  // first see if we have a cache in 30 mins
  const timeSinceLastFetch = Date.now() - cache.lastFetch;
  if(timeSinceLastFetch <= 1800000) {
    return cache.posts;
  }
  const data = await fetch(url).then(res => res.json());
  console.log(data);
  return data;
}

exports.handler = async (event, context, callback) => {
   const posts = await getPosts();
   callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(posts),
   })
  };