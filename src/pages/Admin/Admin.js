import React from 'react';
import Header from "../../components/Header/Header";
import Aside from "../../components/Asside/Asside";
import Content from "../../components/Content/Content";

const Admin = () => {
    return (
        <div style={{
            height: "100vh"
        }}>
            <Header />
            <div className={"flex"}>
                <Aside />
                <Content />
            </div>

        </div>
    );
};

export default Admin;