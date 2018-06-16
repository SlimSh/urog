// import passport from 'passport'
// import MailruStrategy from 'passport-mail'
//
// passport.use(new MailruStrategy({
//     clientID: MAIL_APP_ID,
//     clientSecret: MAIL_APP_SECRET,
//     callbackURL: "http://localhost:3000/auth/mail/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ mailId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));
