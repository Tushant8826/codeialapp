const nodeMailer = require('../config/nodemailer');


exports.newComment = (comment)=> {
    let htmlString =nodeMailer.renderTemplate({comment:comment},'/comments/new_comment.ejs');

    nodeMailer.transporter.sendMail({
       from :'tushantrock841@gmail.com',
       to :  comment.user.email,
       subject :"new Comment Publised",
       html: htmlString
    },(err,info) => {
        if(err) {
            console.log('Error in sending mail',err);
            return;
        }
        // console.log('Messge sent',info);
        return;
    });
}