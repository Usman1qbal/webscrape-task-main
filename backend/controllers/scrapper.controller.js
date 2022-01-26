const Xray = require('x-ray')
var x = Xray()
const Media = require("../model/media.model")


const scrapeImg = async (req, res) =>{
    try {
        let links = req.body.links
        let images = []
        let videos = []
        // links?.map(async (link)=> {
        //     let response =await x(link, 'img', [
        //         {
        //           img: '',
        //           src: '@src'
        //         }
        //       ])
        //       let response1 =await x(link, 'video', [
        //         {
        //             video: '',
        //           src: '@src'
        //         }
        //       ])
        //       console.log("response",response)
        //       console.log("response1",response1)
              
        //       response.map((item)=>{
        //           images.push(item)
        //       })
        //     res.status(200).json("images") 
        // })
        for (let index = 0; index < links.length; index++) {
          const link = links[index]
          let response =await x(link, 'img', [
              {
                img: '',
                src: '@src'
              }
          ])
          let response1 =await x(link, 'video', [
            {
              video: '',
              src: '@src'
            }
          ])
          console.log(response, response1)
          response.map((item)=>{
            images.push(item)
          })
          response1.map((item)=>{
            videos.push(item)
          })
        }
        let media = new Media ({
          images,
          videos,
        })
        let savedMedia = await media.save()
        console.log(savedMedia)
        res.status(200).json({images,videos})
            
    }
    catch (err){
        res.status(500).json({errors: [{msg: "Server Error"}]})
    }
}

module.exports ={
    scrapeImg
}