import React, {Component } from 'react';
import { Container, Row, Col, Card, CardTitle, CardBody, Button, Form, FormGroup, Label, Input } 
from 'reactstrap';
 
class AddMeal extends Component {
 
    constructor(props) {
        super(props);
        this.defaultOption = { "Meal": "", "i_name": "","i_quant":"" };
        this.state = {
            question: "",
            options: [this.defaultOption]
        }
    }
 
    handleChange = (e) => {
        let { Meal, i_name,i_quant } = e.target;
        this.setState({ [Meal]: i_name,
                        [Meal]: i_quant })
    }
 
    handleOptionsChange = (index, e) => {
        
        let {i_name} = e.target;
        let stateOptionsClone = JSON.parse(JSON.stringify(this.state.options));
        stateOptionsClone[index].i_name = i_name;
        ///stateOptionsClone[index].i_quant = i_quant;
        this.setState({ options: stateOptionsClone });
    }
 
    handleSave = (options,Meal) => {
        ///ADD CODE TO PUSH TO DB
       
        options.preventDefault()
        alert(options,Meal)
    }
 
    resetMeal = () => {
        let emptyMeal = "";
        return emptyMeal
    }
 
    resetOptions = (options) => {
        let emptyOptions = options.map(
            (data) => {
                data.value = '';
                return data;
            }
        )
        return emptyOptions;
    }
 
    handleReset = (e) => {
        let stateClone = JSON.parse(JSON.stringify(this.state));
        let emptyMeal = this.resetMeal();
        let emptyOptions = this.resetOptions(stateClone.options);
        this.setState({ Meal: emptyMeal, options: emptyOptions });
        e.preventDefault();
    }
 
    handleDelete = (index, e) => {
        let stateClone = JSON.parse(JSON.stringify(this.state.options));
        stateClone.splice(index, 1);
        this.setState({ options: stateClone });
        e.preventDefault();
    }
 
    handleClick = (e) => {
        let stateClone = JSON.parse(JSON.stringify(this.state));
        stateClone.options.push(this.defaultOption);
        this.setState({ options: stateClone.options });
        e.preventDefault();
    }
 
    customRow = (options) => {
        const listItems = options.map((cusRow, index) =>
            <FormGroup row key={index}>
                <Label for="Ingredient" sm={3} className="text-right">Ingredient&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Label>

                <Label for="quantity" sm={3} className="text-right">&nbsp;Quantity</Label>

                <Col sm={7}>
                    <Input type="text" name="i_name" id="i_name" value={cusRow.value} 
onChange={(i_name) => this.handleOptionsChange(index, i_name)} />
                    <Label for="space" sm={3} className="text-right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Label>
                
                    <Input type="number" name="i_quant" id="i_quant" value={cusRow.value} 
onChange={(i_quant) => this.handleOptionsChange(index, i_quant)} />
                </Col>
                <Col sm={1}>
                    <Button color="primary" onClick={(e) => this.handleDelete(index, e)}>X</Button>
                </Col>
 
            </FormGroup>
        );
        return (
            listItems
        )
        
    }
    
 
    render() {
        let { Meal, options } = this.state;
        return (
            <Container>
                <Row>
                    <Col sm="10">
                        <Card>
                            <CardBody>
                                <CardTitle className="text-center">
                                        Add Meal
                                </CardTitle>
                            </CardBody>
                            <CardBody>
                                <Form>
                                    <FormGroup row>
                                        <Label for="Meal" sm={3} className="text-right">Meal ID</Label>
                                        <Col sm={7}>
                                            <Input type="text" name="Meal" id="Meal" 
value={Meal} onChange={this.handleChange} />
                                        </Col>
                                    </FormGroup>
 
                                    {this.customRow(options)}
 
                                    <FormGroup row>
                                        <Col sm={{ size: 10 }}>
                                            <Button color="primary" className="float-right" 
onClick={this.handleClick} >Add</Button>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="options" sm={3}></Label>
                                        <Col sm={7}>
                                            <Button color="primary" onClick={this.handleSave}>
Save</Button> &nbsp;
                            <Button color="primary" onClick={this.handleReset}>Reset</Button>
                                        </Col>
                                    </FormGroup>
 
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

 
export default AddMeal;