
# Nagwa-task words test backend

the server side for the words test task asked by Nagwa company


## running project

run the srver with npm

```bash
  npm run start
```
    
## API Reference

#### Get random words

```http
  GET /words/randomWords
```

#### post score and get rank

```http
  POST /scores/getRank
```

|request body parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `totalScore`      | `number` | **Required**. client's score |



## Appendix

This server side app is hosted localy on
```http
  http://localhost:4000
```

