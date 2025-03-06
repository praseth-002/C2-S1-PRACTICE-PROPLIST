/* Your data here */
import bey from "./assets/bey.jpg"
import car from "./assets/car.jpg"
import gdm from "./assets/gdm.jpg"
import uno from "./assets/uno.jpg"

export const Toys = [
    {
        id: "1",
        name: "Beyblade",
        image: {
            src: bey,
            alt: "picture of a beyblade"
        },
        desc: "The new generation of beyblade"
    },
    {
        id: "2",
        name: "RC Car",
        image: {
            src: car,
            alt: "picture of a rc car"
        },
        desc: "Rc car for offroading"
    },
    {
        id: "3",
        name: "Gundam",
        image: {
            src: gdm,
            alt: "picture of a gundam"
        },
        desc: "High grade gundam good for beginners"
    },
    {
        id: "4",
        name: "UNO",
        image: {
            src: uno,
            alt: "picture of a uno"
        },
        desc: "The classic game for family and friends"
    }
]