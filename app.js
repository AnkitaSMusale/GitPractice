const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const errorController = require('./controller/error')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const ContactUsRouter = require('./routes/ContactUs')
const SuccessRouter = require('./routes/success')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(ContactUsRouter);
app.use(SuccessRouter);

app.use(errorController.get404errorpage);

app.listen(8000);