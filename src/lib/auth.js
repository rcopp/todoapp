module.exports = {

    isLoggedIn(req, res, next){
        if (req.isAuthenticated()){
            return next();
        }
        req.flash('delete', 'Inicie sesión para poder ver su perfil');
        return res.redirect('/signin');
    },

    isNotLoggedIn(req, res, next){
        if(!req.isAuthenticated()){
            return next();
        }
        return res.redirect('/profile');
    }

};