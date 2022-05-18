import styled from "styled-components";

export const Contact = styled.div`
    .button {
        height: 30px;
        width: 30px;
        background-color: #797A81;
        float: right;
        margin: -10px 10px 15px;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        padding-top: 5px 
    }

    p {
        margin-bottom: 10px
    }
    
    .sep--new--contact1 {
        width: 800px;
        margin: auto;
        margin-top: 20px;
        padding-bottom: 10px;
    }
    .sep--new--contact {
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(2,0fr);
        justify-content: center;
        
    }

    .center {
        display: flex;
        justify-content: center;
    }

    input {
        width: 190px;
        border: 1px solid #555;
        border-radius: 10px;
        padding-left: 8px;
        background-color: transparent;
        outline: 0;
        color: #FFF;
        margin-bottom: 10px
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }

    
    border-bottom: 1px solid #444;
    padding-bottom: 25px

`; 