import React, {useState, useEffect} from 'react';

const url = `https://www.instagram.com/graphql/query/?query_hash=003056d32c2554def87228bc3fd9668a&variables={"id":"40852332971", "first": 4}`;

function useGramz() {
  const [gramz, setGramz] = useState([]);
  useEffect(() => {
    console.log('fetching the gramz');
    fetch(url)
      .then(data => data.json())
      .then(({ data}) => {
        console.log('back!');

        const thumbs = data.user.edge_owner_to_timeline_media.edges.map( edge => ({url: edge.node}))
      })
  })
}