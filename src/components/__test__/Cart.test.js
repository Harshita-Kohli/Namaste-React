import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"

global.fetch() = jest.fn(()=>{  //fetch returns a promise, which resolves to json() function, which resolves to the data
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})
it("Should load Restaurant Menu component",async()=>{
    await act(async () => render(<RestaurantMenu/>));
})