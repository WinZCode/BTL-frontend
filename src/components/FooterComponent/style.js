import { Col, Row } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 1270px;

    & .copyright {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        padding: 24px 0;
        color: #808089;
    }
    & .copyright div {
        margin-top: 4px;
    }
`;

export const WrapperFooter = styled.div`
    heiht: 100%;
    width: 100%;
    display: flex;
    background: #fff;
    justify-content: center;
    border-top: 3px solid #9255fd;
`;

export const WrapperRow = styled(Row)`
    margin: 32px 0;
`;

export const WrapperCol = styled(Col)`
    width: 20%;
    color: #808089;

    & ul > li > .hotline > a {
        color: #808089;
        font-weight: 600;
    }

    & h3 {
        color: #000;
    }

    & ul {
        list-style: none;
        padding: 0;
    }

    & ul li {
        margin-top: 8px;
    }

    & ul > li > a {
        text-decoration: none;
        color: #808089;
    }

    & a:hover {
        text-decoration: underline;
    }

    & .certificate-group .certificate {
        width: 40px;
        height: 40px;
        margin-right: 12px;
    }

    & .payment-method img {
        margin: 8px 8px 0 0;
    }

    & .social img {
        margin: 8px 8px 18px 0;
    }

    & .social img:hover {
        opacity: 0.8;
        cursor: pointer;
    }

    & .download {
        display: flex;
    }

    & .download .qrcode {
        width: 80px;
        height: 80px;
    }

    & .download .download-app img {
        height: 36px;
        margin-left: 8px;
        margin-bottom: 8px;
    }
`;
