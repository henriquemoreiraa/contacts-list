import styled from "styled-components";

export const AddContact = styled.div`
    .add {
        background-color: #797A81;
        width: 30px;
        height: 30px;
        text-align: center;
        border: none;
        cursor: pointer;
        color: #17181F;
        font-size: 20px;
        border-radius: 50%;
        margin-left: 10px;
        margin-right: 5px
    }
    
    .sep {
        display: flex;
        justify-content: space-between;
        margin: 5px 5px 0;
        padding-bottom: 10px;
        border-bottom: 1px solid #444;
    }

    .add--button {
        display: flex;
        align-items: center;
    }

    .sep--new--contact1 {
        padding-bottom: 10px;
        border-bottom: 1px solid #444;
    }

    .sep--new--contact {
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(2,0fr);
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

    .center {
        display: flex;
        justify-content: center;
    }

    .addConct {
        display: flex;
        align-items: center;
        margin-bottom: 10px
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }
`;