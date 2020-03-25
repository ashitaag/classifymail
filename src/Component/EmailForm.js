import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import $ from 'jquery';


class  FormPage extends React.Component{
    constructor() {
        super();
        this.state = {
            email: '',
        };
    }
    onChange = (e) => {

        this.setState({email : e.target.value });
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log(this.state.email);
        $.ajax({
            type: "POST",
            url: " http://ashita079.pythonanywhere.com/classify",
            data: {email: this.state.email},
            success: function(response) {
               if(response.response_code == 1){
                   $("#div1").css({"display":'block'});
                   $('#div1').html("<h4 style = {{color: 'red'}}><b>The mail is SPAM</b></h4>");

               }
               else{
                   $("#div1").css({"display":'block'});
                   $('#div1').html("<h4 style = {{color: 'red'}}><b>The mail is HAM</b></h4>");
    }
            }
        });
    }
    render(){
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md = '3'></MDBCol>
                <MDBCol md="6">
                    <form  onSubmit={this.handleClick}>
                        <p className="h4 text-center mb-4">Enter your Email</p>
                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                            Your email
                        </label>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                name="email"
                                value={this.email}
                                onChange={this.onChange}
                                rows="5"
                            />
                        </div>
                        <div style={{display: 'none'}} id = "div1"></div>
                        <div className="text-center mt-4">
                            <MDBBtn color="indigo" type="submit">Submit</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );}
};

export default FormPage;