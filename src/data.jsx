import snow from "../src/assets/snow.png"
import bridge from "../src/assets/bridge.png"
import stream from "../src/assets/stream.png"



export const data = [
    {id:1,
         country:"JAPAN",
          title:"Mount Fuju",
          period:"12 Jan 2021 - 24 Jan 2021",
        desc: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",

        image: <img src={snow} alt="snow"/>
          
    },
    {id:2,
         country:"AUSTRALIA",
          title:"Sydney Opera House",
          period:"27 May, 2021 - 8 Jun, 2021",
        desc: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",

        image: <img src={bridge} alt="bridge"/>
          
    },
    {id:3,
         country:"NORWAY",
          title:"Geirangerfjord",
          period:"12 Jan 2021 - 24 Jan 2021",
        desc: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
        image: <img src={stream} alt="stream"/>
    },
]