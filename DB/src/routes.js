const express = require('express')
const mongoose = require('mongoose');
const users = require('../models/usuarios');
const db = require('./db');

const routes = express.Router();

routes.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await users.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error })
  }
});

routes.post('/', async (req, res) => {
  try {
    const { nome, senha } = req.body;

    // Verifica se o usuário existe
    const usuario = await users.findOne({ nome });
    
    if (!usuario) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    // Verifica se a senha corresponde
    if (usuario.senha !== senha) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    // Se o login for bem-sucedido, retornamos uma resposta clara
    res.status(200).json({ message: 'Login bem-sucedido', sucesso: true });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});





module.exports = routes;