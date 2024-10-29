import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import ExpenseList from './components/Expense/ExpenseList';
import AddExpenseForm from './components/Expense/AddExpenseForm';
import ExpenseTotal from './components/Expense/ExpenseTotal';
import Remaining from './components/Remaining';
import exp from 'constants';
/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

describe("Create ExpenseItem", () => {
  test("new expense correctly added to expense list", () => {
    render(<ExpenseList/>);
    render(<AddExpenseForm/>);

    fireEvent.change(screen.getByLabelText("Name"), {target: {value: "test expense"}});
    fireEvent.change(screen.getByLabelText("Cost"), {target: {value: "800"}});
    fireEvent.click(screen.getByText("Save"));

    const newExpenseName = screen.getByDisplayValue("test expense");
    const newExpenseCost = screen.getByDisplayValue("800");

    expect(newExpenseName).toBeInTheDocument();
    expect(newExpenseCost).toBeInTheDocument();
  });

  test("Spent so far and Remaining update accordingly", () => {
    render(<ExpenseTotal />)
    render(<ExpenseList/>);
    render(<AddExpenseForm/>);
    render(<Remaining/>);

    fireEvent.change(screen.getByLabelText("Name"), {target: {value: "test expense"}});
    fireEvent.change(screen.getByLabelText("Cost"), {target: {value: "800"}});
    fireEvent.click(screen.getByText("Save"));

    const newExpenseName = screen.getByDisplayValue("test expense");
    const newExpenseCost = screen.getByDisplayValue("800");

    expect(newExpenseName).toBeInTheDocument();
    expect(newExpenseCost).toBeInTheDocument();

    const remaining = screen.getByDisplayValue("800");

    expect(remaining).toBeInTheDocument();
  });

});

describe("Delete ExpenseItem", () => {
  test("expense succesfully removed from ExpenseList", () => {
    render(<ExpenseList/>);
    render(<AddExpenseForm/>);

    fireEvent.change(screen.getByLabelText("Name"), {target: {value: "test expense"}});
    fireEvent.change(screen.getByLabelText("Cost"), {target: {value: "800"}});
    fireEvent.click(screen.getByText("Save"));

    const newExpenseName = screen.getByDisplayValue("test expense");
    const newExpenseCost = screen.getByDisplayValue("800");

    expect(newExpenseName).toBeInTheDocument();
    expect(newExpenseCost).toBeInTheDocument();
  });

  test("spent so far and remaining updated accordingly", () => {
    render(<ExpenseTotal />)
    render(<ExpenseList/>);
    render(<AddExpenseForm/>);
    render(<Remaining/>);

    fireEvent.change(screen.getByLabelText("Name"), {target: {value: "test expense"}});
    fireEvent.change(screen.getByLabelText("Cost"), {target: {value: "800"}});
    fireEvent.click(screen.getByText("Save"));

    const newExpenseName = screen.getByDisplayValue("test expense");
    const newExpenseCost = screen.getByDisplayValue("800");

    expect(newExpenseName).toBeInTheDocument();
    expect(newExpenseCost).toBeInTheDocument();

    const remaining = screen.getByDisplayValue("800");

    expect(remaining).toBeInTheDocument();
  });
});

describe("Budget Balance Verification", () => {
  test("budget balanced after going over budget", () => {
    render(<ExpenseList/>);
    render(<AddExpenseForm/>);

    fireEvent.change(screen.getByLabelText("Name"), {target: {value: "test expense"}});
    fireEvent.change(screen.getByLabelText("Cost"), {target: {value: "800"}});
    fireEvent.click(screen.getByText("Save"));

    const newExpenseName = screen.getByDisplayValue("test expense");
    const newExpenseCost = screen.getByDisplayValue("800");

    expect(newExpenseName).toBeInTheDocument();
    expect(newExpenseCost).toBeInTheDocument();
  });

  test("budget balanced after removing all expenses and then adding new expenses", () => {
    render(<ExpenseTotal />)
    render(<ExpenseList/>);
    render(<AddExpenseForm/>);
    render(<Remaining/>);

    fireEvent.change(screen.getByLabelText("Name"), {target: {value: "test expense"}});
    fireEvent.change(screen.getByLabelText("Cost"), {target: {value: "800"}});
    fireEvent.click(screen.getByText("Save"));

    const newExpenseName = screen.getByDisplayValue("test expense");
    const newExpenseCost = screen.getByDisplayValue("800");

    expect(newExpenseName).toBeInTheDocument();
    expect(newExpenseCost).toBeInTheDocument();

    const remaining = screen.getByDisplayValue("800");

    expect(remaining).toBeInTheDocument();
  });
});