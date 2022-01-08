import MyAceEditor from "./my-ace-editor";
import Description from "./description";

export default function CodeEditor() {
    return (
        <div className="col-md-12 row">
            <Description></Description>
            <MyAceEditor></MyAceEditor>
        </div>
    )
}