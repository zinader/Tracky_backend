import User from "../models/user_model.js"

export const getUserDetails = (req, res) => {
  const {email} = req.body
  User.findOne({email})
    .then(response => {
      if(response){
        res.json({
          status: true,
          data: response
        })
      }else{
        res.json({
          status: false,
          message: "User not found!"
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.json({
        status: false,
        message: "Error occured, please try later"
      })
    })
}

export const createUser = (req, res) => {
  const {email, fullName} = req.body

  let newUser = new User({
    email,
    fullName,
    opportunities: []
  })

  // console.log(User.findOne({email}))


  newUser.save()
  .then(response => {
    if(response){
      res.json({
        status: true,
        data: response,
        message: "User created"
      })
    }
  })
  .catch(err => {
    // console.log(err)
    res.json({
      status: false,
      message: err._message? err._message: error
    })
  })
}