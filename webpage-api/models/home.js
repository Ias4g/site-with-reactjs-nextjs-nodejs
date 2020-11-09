const mongoose = require('mongoose')
const Schema = mongoose.Schema

const homeSchema = new Schema(
    {

        // SECTION TOP 
        topTitulo: {
            type: String
        },
        topSubTitulo: {
            type: String
        },
        topTextoBtn: {
            type: String
        },
        topLinkBtn: {
            type: String
        },

        // SECTION SERVIÇOS
        servTitle: {
            type: String
        },
        servDescription: {
            type: String
        },
        servIconOne: {
            type: String
        },
        servIconOneDescription: {
            type: String
        },
        servIconTwo: {
            type: String
        },
        servIconTwoDescription: {
            type: String
        },
        servIconThree: {
            type: String
        },
        servIconThreeDescription: {
            type: String
        },

        // SECTION PORTFOLIO
        portTitle: {
            type: String
        },
        portDescription: {
            type: String
        },
        // IMAGE 01
        portImgOneLink: {
            type: String
        },
        portImgOneTitle: {
            type: String
        },
        portImgOneDescription: {
            type: String
        },
        // IMAGE 02
        portImgTwoLink: {
            type: String
        },
        portImgTwoTitle: {
            type: String
        },
        portImgTwoDescription: {
            type: String
        },
        // IMAGE 03
        portImgThreeLink: {
            type: String
        },
        portImgThreeTitle: {
            type: String
        },
        portImgThreeDescription: {
            type: String
        },
        // IMAGE 04
        portImgFourLink: {
            type: String
        },
        portImgFourTitle: {
            type: String
        },
        portImgFourDescription: {
            type: String
        },
        // IMAGE 05
        portImgFiveLink: {
            type: String
        },
        portImgFiveTitle: {
            type: String
        },
        portImgFiveDescription: {
            type: String
        },
        // IMAGE 06
        portImgSixLink: {
            type: String
        },
        portImgSixTitle: {
            type: String
        },
        portImgSixDescription: {
            type: String
        },

        // SECTION SOBRE
        aboutTitle: {
            type: String
        },
        aboutDescription: {
            type: String
        },
        // IMAGE 01
        aboutImgOneLink: {
            type: String
        },
        aboutImgOneTitle: {
            type: String
        },
        aboutImgOneDescription: {
            type: String
        },
        // IMAGE 02
        aboutImgTwoLink: {
            type: String
        },
        aboutImgTwoTitle: {
            type: String
        },
        aboutImgTwoDescription: {
            type: String
        },
        // IMAGE 03
        aboutImgThreeLink: {
            type: String
        },
        aboutImgThreeTitle: {
            type: String
        },
        aboutImgThreeDescription: {
            type: String
        },
        // IMAGE 04
        aboutImgFourLink: {
            type: String
        },
        aboutImgFourTitle: {
            type: String
        },
        aboutImgFourDescription: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

mongoose.model('Home', homeSchema)