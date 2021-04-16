const express = require('express');
const router = express.Router();

const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

// "To-do" ITEM CRUD

router.get('/add', isLoggedIn, (req, res) => {
    res.render('items/add');
});

router.post('/add', isLoggedIn, async (req, res) => {
    const {title} = req.body;
    const done = null;
    const newItem = {
        title,
        done,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO items set ?', [newItem]);
    req.flash('success', 'Ítem creado satisfactoriamente');
    res.redirect('/items');
});

router.get('/', isLoggedIn, async (req, res) => {
    const items = await pool.query('SELECT * FROM items WHERE user_id = ?', [req.user.id]);
    res.render('items/list', {items});
});

router.get('/delete/:id', isLoggedIn, async (req, res) =>{
    const { id } = req.params;
    await pool.query('DELETE FROM items WHERE ID = ?', [id]);
    req.flash('delete', 'Ítem eliminado satisfactoriamente');
    res.redirect('/items');
});

router.get('/edit/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const items = await pool.query('SELECT * FROM items WHERE id = ?', [id]);
    res.render('items/edit', {item: items[0]});
});

router.post('/edit/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const { title, done } = req.body;
    const newItem = {
        title,
        done
    };
    await pool.query('UPDATE items set ? WHERE id = ?', [newItem, id]);
    req.flash('edit', 'Ítem editado satisfactoriamente');
    res.redirect('/items');
});


module.exports = router;