// your-app-name/src/fetchGraphQL.js
async function fetchGraphQL(text, variables) {
  
    // Fetch data from GitHub's GraphQL API:
    const response = await fetch("https://graphqlzero.almansi.me/api", {
        "method": "POST",
        "headers": {
            "content-type": "application/json" 
        },
        "body": JSON.stringify({
          query: text,
          variables
        })
      })
    // Get the response as JSON
    return await response.json();
  }
  
  export default fetchGraphQL;