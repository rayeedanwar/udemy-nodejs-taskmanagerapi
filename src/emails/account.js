const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from:'_rayeed@live.com',
        subject: 'Thanks for signing up!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: '_rayeed@live.com',
        subject: 'Cancelled your account :(',
        text: `Sorry to see ya go ${name}. All the best. If you have any feedback, let us know and we'll see what we can do :)`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
