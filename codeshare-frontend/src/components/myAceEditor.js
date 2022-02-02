import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/mode/python';
import 'brace/mode/javascript'
import 'brace/theme/monokai';
import 'brace/theme/dracula'
import 'brace/theme/github'

import { useState } from 'react';


export default function MyAceEditor() {
    
    const AVAILABLE_LANGS = [{ name: 'Java', value: 'java'},
                             { name: 'Python', value: 'python'},
                             { name: 'JavaScript', value: 'javascript' }];
    const AVAILABLE_THEMES = [{name: 'monokai'},{name: 'github'},
                              {name: 'dracula'}];

    const [currentLang, setCurrentLang] = useState(AVAILABLE_LANGS[0].value);
    const [currentTheme, setCurrentTheme] = useState(AVAILABLE_THEMES[0].name);

    return (
        <div id="my-ace-editor" className="col-md-6 mt-2">
            <div className="modify-editor mb-2">
                <label className="select-option">
                    Language:
                    <select className="form-control"
                            onChange={(e) => setCurrentLang(e.target.value)}>
                        {
                            AVAILABLE_LANGS.map(item =>
                                <option key={item.value} value={item.value}>
                                    {item.name}
                                </option>
                            )
                        }
                    </select>
                </label>

                <label className="select-option">
                    Theme:
                    <select className="form-control select-option" onChange={(e) => setCurrentTheme(e.target.value)}>
                        {
                            AVAILABLE_THEMES.map(item=>
                                <option key={item.name} value={item.name}>
                                    {item.name}
                                </option>
                                )
                        }
                    </select>
                </label>
            </div>

            <AceEditor
                mode={currentLang}
                theme={currentTheme}
                fontSize={16}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                height={'530px'}
                width={'650px'}
                enableLiveAutocompletion={true} // auto completion not working
            />
        </div>
    );
}
