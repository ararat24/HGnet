const express = require('express');
const app = new express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/admin', (req, res)=>{
    res.render('admin/admin')
})

app.get('/admin/tarifs', (req, res)=>{
    res.render('admin/tarifs')
})

app.get('/admin/accounts', (req, res) =>{
    res.render('admin/accounts')
})
app.listen(3000)