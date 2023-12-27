const AccModel = require('../models/accModel')

module.exports = {
    reg: async (req, res) => {
        // console.log(req.body)
        const {accname, accphn, accemail, accpass, accaddrss, accpincode, company, empcode, dept, desig, roles} = req.body

        try {
            const Acc = await AccModel.create({accname, accphn, accemail, accpass, accaddrss, accpincode, company, empcode, dept, desig, roles})
            if (Acc) {
                res.json({success:'New Account Created Successfully.', statuscode:200})
            }
            else {
                res.json({error:'New Account Creation Failed.', statuscode:400})
            }
        } catch (error) {
            console.error(error)
        }
    },
    log: async (req, res) => {
        // console.log(req.body)
        const {accemail, accpass} = req.body

        try {
            const Accntexst = await AccModel.findOne({accemail})
            if (!Accntexst) {
                res.json({error:`Account doesn't Exist !!!`, statuscode: 400})
            }
            else {
                // const accnt = await Account.findOne({accemail, accpass})
                // console.log(accnt)
                if (accpass!==Accntexst.accpass) {
                    res.json({error: `Wrong Password !!!`, statuscode: 401})
                }
                else {
                    res.json({success:`Account Successfully Logged In...`, statuscode: 200, data:Accntexst})
                }
            }
        } catch (error) {
            console.error(error)
        }
    },
    fetch: async (req, res) => {
        // console.log(req.body)

        try {
            const Acc = await AccModel.find()
            res.json({success:`All Account details Fetched Successfully.`, statuscode:200, data:Acc})
        } catch (error) {
            console.error(error)
        }
    }
}