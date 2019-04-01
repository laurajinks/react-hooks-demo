import React, { Component } from "react";
import ClassForm from './components/Forms/ClassForm'
import HookForm from './components/Forms/HookForm';
import CustomHookForm1 from "./components/Forms/CustomHookForm1";
import CustomHookForm2 from "./components/Forms/CustomHookForm2";
import "./SCSS/index.css"

class App extends Component {
    render() {
        return (
            <div className="App">
                <ClassForm />
                <HookForm />
                <CustomHookForm1 />
                <CustomHookForm2 />
            </div>
        );
    }
}

export default App;
