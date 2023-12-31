// api/users.js


export default async function handler(req, res) {
  //   console.log('Received Data 12', req.body)

  console.log('first 21', process.env.API_URL)
  //   console.log('first 21', loadEnvConfig())
  const sgMail = require('@sendgrid/mail')

  sgMail.setApiKey(process.env.API_URL)
  const { method } = req
  switch (method) {
    case 'POST':
      try {
        console.log('Received Data', req.body)
        const msg = {
          to: 'amolbhushan@gmail.com', // Change to your recipient
          from: 'prajaktasendemail@gmail.com', // Change to your verified sender
          subject: `Sending with SendGrid is Fun ${req.body.email}`,
          text: 'and easy to do anywhere, even with Node.js',
          html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        }
        console.log('The msessag', msg)
        sgMail
          .send(msg)
          .then(() => {
            console.log('Email sent')
          })
          .catch((error) => {
            console.error(error)
          })
        res.status(200).json({ success: true })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
