const express = require('express');
const passport = require('passport');
const keys = require('./conf/kesy')

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();



const PORT = process.env.PORT || 5000;

app.listen(PORT);