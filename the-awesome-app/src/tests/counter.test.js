import { render,screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';


test("Counter1", () => {

    render(<Counter/>);
    screen.debug();
    expect(screen.getByText("Counter: 10")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Inc"), {});
    expect(screen.getByText("Counter: 11")).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText("Count"), {target: {value: "200"}});
    expect(screen.getByText("Counter: 200")).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText("Update Count"), {target: {value: 25}});
    expect(screen.getByText("Counter: 200")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Update"), {});
    expect(screen.getByText("Counter: 25")).toBeInTheDocument();
});