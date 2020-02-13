import React, { Component } from 'react'
import { Row, Col, Button } from "react-bootstrap";
import "./Calculator.css"

class Calculator extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sum: 0,
            input: '',
            operator: '',
            operators: ['+', '-', '*', '/', '%', '='],
        };
        this._onChange = this._onChange.bind(this)
    }

    _onChange(e) {
        let { sum, input, operators, operator } = this.state;
        let key = e;
 
        if (key == 'clear') {
            this.setState({
                input: '',
                sum: 0
            })
        }
        else if (key == 'del') {
            input = input.substring(0, input.length - 1)
            this.setState({
                input,
            })
        } else {
            if (operators.includes(key) || key == '=') {
                if (operator != '') {
                    sum = this.calculate(parseFloat(sum), operator, parseFloat(input))

                    this.setState({
                        sum,
                        operator: '',
                        input: sum
                    })
                } else {
                    this.setState({
                        operator: key,
                        sum: input,
                        input: ''
                    })
                }


            } else {
                key = input.concat(e)
                this.setState({
                    input: key,
                })

            }
        }

    }

    calculate(n1, operator, n2) {
        let result = 0;
        switch (operator) {
            case '+':
                result = n1 + n2;
                break;
            case '-':
                result = n1 - n2;
                break;
            case '*':
                result = n1 * n2;
                break;
            case '/':
                result = n1 / n2;
                break;
            case '%':
                result = n1 % n2;
                break;
            default:
                result = 0
        }
        return result.toString();
    }





    render() {
        const { input } = this.state;
        return (
            <div className="calculate">
                <div className="display">
                    <input
                        type="text"
                        className="sum"
                        disabled
                        value={input}
                        maxLength={20}
                    />
                </div>
                <div className="number-group ">
                    <Button name className="button operation" variant="outline-info" onClick={() => this._onChange('+')}>
                        +
                    </Button>
                    <Button className="button operation" variant="outline-info" onClick={() => this._onChange('-')}>
                        -
                    </Button>
                    <Button className="button operation" variant="outline-info" onClick={() => this._onChange('*')}>
                        x
                    </Button>
                    <Button className="button operation" variant="outline-info" onClick={() => this._onChange('/')}>
                        ÷
                    </Button>
                    <Button className="button" variant="outline-info" onClick={() => this._onChange('7')}>
                        7
                    </Button>
                    <Button className="button" variant="outline-info" onClick={() => this._onChange('8')}>
                        8
                    </Button>
                    <Button className="button" variant="outline-info" onClick={() => this._onChange('9')}>
                        9
                    </Button>
                    <Button className="button operation" variant="outline-info" onClick={() => this._onChange('%')}>
                        %
                    </Button>
                    <Button className="button" variant="outline-info" onClick={() => this._onChange('4')}>
                        4
                    </Button>
                    <Button className="button" variant="outline-info" onClick={() => this._onChange('5')}>
                        5
                    </Button>
                    <Button className="button" variant="outline-info" onClick={() => this._onChange('6')}>
                        6
                    </Button>
                    <Button className="button operation" variant="outline-info" onClick={() => this._onChange('clear')}>
                        C
                    </Button>
                    <Button className="button" variant="outline-info" onClick={() => this._onChange('1')}>
                        1
                    </Button>
                    <Button className="button" variant="outline-info" onClick={() => this._onChange('2')}>
                        2
                    </Button>
                    <Button className="button" variant="outline-info" onClick={() => this._onChange('3')}>
                        3
                    </Button>
                    <Button className="button operation" variant="outline-info" onClick={() => this._onChange('del')}>
                        {"<-"}
                    </Button>

                    <Button className="button zero" variant="outline-info" onClick={() => this._onChange('0')}>
                        0
                    </Button>
                    <Button className="button" variant="outline-info" onClick={() => this._onChange('.')}>
                        .
                    </Button>
                    <Button className="button operation" variant="outline-info" onClick={() => this._onChange('=')}>
                        =
                    </Button>
                </div>
            </div>
        );
    }
}

export default Calculator;