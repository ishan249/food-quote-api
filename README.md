
# Food quote API

This is the api which will generate new quote related to food everytime on a call. This api contains different food quotes from different authors, chefs and films so you can use this in your projects.

## API Link

```bash
https://food-quote-api.vercel.app
```

## API Reference

#### Get all items

```bash
  GET /api/foodquote
```

## Example

```javascript
 app.get("/getfoodquote", (req,res)=>{
  axios.get("https://food-quote-api.vercel.app/api/foodquote")
  .then((response)=>{
    res.send(response.data);
  })
  .catch((error)=>{
    console.log(error);
  })
})
```
## Response


```http
 {
  "quote": "I watch cooking change the cook, just as it transforms the food.",
  "author": "Laura Esquivel"
}
```


## Contributing

Contributions are always welcome! Feel free to create PR to add more quotes and suggest any other changes.


