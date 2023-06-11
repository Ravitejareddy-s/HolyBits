const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
const jwt=require('jsonwebtoken')
app.use(express.json());

let users=[{email:"default",pass:"default"}]

app.get('/', (req, res) => {
  res.send('Hello Worl!')
})

const PROBLEMS = [
    {
      problemId: "1",
      title: "401. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "42%",
      description:
        "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
      exampleIn: "left = 5, right = 7",
      exampleOut: "4",
    },
    {
      problemId: "2",
      title: "205. Add two numbers",
      difficulty: "Medium",
      acceptance: "41%",
      description:
        "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
      exampleIn: "a = 100 , b = 200",
      exampleOut: "300",
    },
    {
      problemId: "3",
      title: "202. Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%",
      description: "Write an algorithm to determine if a number n is happy.",
      exampleIn: "n = 19",
      exampleOut: "true",
    },
    {
      problemId: "4",
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%",
      description: "Given number k , removed kth element",
      exampleIn: "list: 1->2->3 , k=2",
      exampleOut: "1->3",
    },
    {
      problemId: "5",
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "42%",
      description:
        "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
      exampleIn: "left = 5, right = 7",
      exampleOut: "4",
    },
    {
      problemId: "6",
      title: "205. Add two numbers",
      difficulty: "Medium",
      acceptance: "41%",
      description:
        "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
      exampleIn: "a = 100 , b = 200",
      exampleOut: "300",
    },
    {
      problemId: "7",
      title: "202. Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%",
      description: "Write an algorithm to determine if a number n is happy.",
      exampleIn: "n = 19",
      exampleOut: "true",
    },
    {
      problemId: "8",
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%",
      description: "Given number k , removed kth element",
      exampleIn: "list: 1->2->3 , k=2",
      exampleOut: "1->3",
    },
    {
      problemId: "9",
      title: "204. add an array element",
      difficulty: "Hard",
      acceptance: "42%",
      description: "Given number k , removed kth element",
      exampleIn: "list: 1->2->3 , k=2",
      exampleOut: "1->3",
    },
  ];
  

app.post('/signup',(req,res)=>{
    let email=req.body.name
    let pass=req.body.pass
    if(users.find((x)=>x.email===email)){
        res.send("email already exist")
    }
    else{
        users.push({email,pass})
        res.send("Signup successful\n pls login")
    }
    console.log(users);


})

app.post('/login',(req,res)=>{
    let email=req.body.name
    let pass=req.body.pass
    if(users.find((x)=>x.email===email)){
        if(users.find((x)=>x.email===email && x.pass===pass)){
            res.send('Bearer '+(jwt.sign(req.body,'raviteja7')))
        }
        else{
            res.send("password does not match")
        }
    }
    else{
        res.send("email dosent exist")
    }
})

let mw=(req,res,next)=>{
    let auth=req.headers['authorization']
    if(!auth){
        res.send("pls login")
        console.log(!auth)
    }
    else
    {
      try{
        let x=jwt.verify((req.headers.authorization).split(' ')[1],'raviteja7')
        next()
      }catch{
        res.send("token tampered")
      }

    }
}

app.get('/problems',(req,res)=>{
    res.json(PROBLEMS)
    console.log("triggered")
})

app.get('/problems/:id',mw,(req,res)=>{
    let id=(req.params.id)
    let l_problem=PROBLEMS.find(x=>x.problemId===id)
    
    if(!l_problem){
        res.send("no such problem")
    }
    else{
        res.send(l_problem)
    }

})
let submissions=[]
app.post('/submissions',mw,(req,res)=>{
    submissions.push({
        question: req.body.question,
        user: req.body.user,
        code:req.body.code
    })
    console.log(submissions)
    res.send("sucess")

})

app.get('/submissions/:id',mw,(req,res)=>{
    let id=req.params.id
    let usr=req.body.user
    let temp=submissions.find(x=>x.question===id && x.user===usr)
    if(!temp){
        res.send("no sumissions")
    }
    else{
        res.send(temp.code)

    }
})


app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})