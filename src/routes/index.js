const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'First Website'});
 });

 router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact Page'});
 });

 router.get('/deb', (req, res) => {
    res.render('deb.html', { title: 'Esto es solo para Deb.'});
 });

 module.exports = router;