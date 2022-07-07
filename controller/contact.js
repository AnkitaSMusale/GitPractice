exports.getContact = (req,res,next)=>{
    res.render('ContactUs', {
        pageTitle: 'Contact Us',
        path: '/ContactUs',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true})
    //res.sendFile(path.join(rootDir,'views','ContactUs.html'))
 }

exports.postContact = (req,res,next)=>{
    console.log(req.body);
    res.redirect('/success');
}

exports.getsuccessmsg = (req,res,next)=>{
    res.render('success', {
        pageTitle: 'Success',
        path: '/success',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true})
    //res.sendFile(path.join(rootDir,'views','success.html'));
 }