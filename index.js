const express = require('express')
const app = express()
const port = 3000
const cors= require('cors');

app.use(cors({
  origin:'*'
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.send('Cyberwarfare node backend'); 
});
app.post('/timedifference', (req, res) => {
  let start_date= new Date(req.body.start_date);
  let end_date= new Date(req.body.end_date);
  let diff= (end_date.getTime()-start_date.getTime())/1000;
  if(diff<0){
     diff= -diff;
  }
  res.send({'difference': diff});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})