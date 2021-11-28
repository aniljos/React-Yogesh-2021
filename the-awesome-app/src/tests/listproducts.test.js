import { render,screen, fireEvent, waitFor } from '@testing-library/react';
import ListProducts from '../components/ListProducts';
import { Provider } from 'react-redux';
import {store} from '../redux/store';
import axios from 'axios';

jest.mock('axios');



test("ListProducts", async ()=> {

    axios.get.mockResolvedValueOnce({data: [{id: 1, name: "p1", price: 1000, decription: ""}, {id: 2, name: "p2", price: 2000, decription: ""}]});
    render(<Provider store={store}><ListProducts/></Provider>);
   
    expect(axios.get).toBeCalledTimes(1);

    // await waitFor(() => {
    //     screen.debug();
    // });
    await waitFor(() =>  screen.getAllByTestId("product"));
    screen.debug();
    expect(screen.getAllByTestId("product")).toHaveLength(2);

    
})