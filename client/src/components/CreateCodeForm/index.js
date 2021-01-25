import React, { useState, useEffect } from "react";
import "./createCodeForm.css";
import hljs from "highlight.js"
import { render } from "react-dom";
import API from "../../utils/API.js";
import { set } from "local-storage";

function CreateCodeForm(){

    const languages = [["1C","1c"],["ABNF","abnf"],["Access logs","accesslog"],["Ada","ada"],["Arduino","arduino"],["ARM Assembler","armasm"],["AVR assembler","avrasm"],["ActionScript","actionscript"],["AngelScript","asc"],["Apache","apache"],["AppleScript","applescript"],["Arcade","arcade"],
    ["AsciiDoc","asciidoc"],["AspectJ","aspectj"],["AutoHotkey","autohotkey"],["AutoIt","autoit"],["Awk","awk"],["Bash","bash"],["Basic","basic"],["BNF","bnf"],["Brainfuck","bf"],["C#","cs"],["C","c"],["C++","cpp"],["C/AL","cal"],["Cache Object Script","cos"],["CMake","cmake"],["Coq","coq"],["CSP","csp"],["CSS","css"],
    ["Cap'n Proto","capnproto"],["Clojure","clojure"],["CoffeeScript","coffeescript"],["Crmsh","crmsh"],["Crystal","crystal"],["D","d"],["DNS Zone file","dns"],["DOS","dos"],["Dart", "dart"],["Delphi","dpr"],["Diff","diff"],["Django","jinja"],["Dockerfile","docker"],["dsconfig","dsconfig"],["DTS","dts"],["Dust","dst"],["EBNF","ebnf"],["Elixir","elixir"],["Elm","elm"],
    ["Erlang","erlang"],["Excel","excel"],["F#","fs"],["FIX","fix"],["Fortran","f90"],["G-Code","nc"],["Gams","gms"],["Gauss","gss"],["Gherkin","gherkin"],["Go","go"],["Golo","golo"],["Gradle","gradle"],["Groovy","groovy"],["HTML, XML","xml"],["Haml","haml"],
    ["Handlebars","hbs"],["Haskell","hs"],["Haxe","hx"],["Hy","hy"],["Ini, TOML","ini"],["Inform7","i7"],["IRPF90","irpf90"],["JSON","json"],["Java","jsp"],["Javascript","js"],["Julia","julia"],["Kotlin","kotlin"],["LaTeX","tex"],["Leaf","leaf"],["Lasso","ls"],["Less","less"],
    ["LDIF,ldif"],["Lisp","lisp"],["LiveCode Server","livecodeserver"],["LiveScript","ls"],["Lua","lua"],["Makefile","mk"],["Markdown","md"],["Mathematica","wl"],["Matlab","matlab"],["Maxima","maxima"],["Maya Embedded Language","mel"],["Mercury","mercury"],["Mizar","mizar"],
    ["Mojolicious","mojolicious"],["Monkey","monkey"],["Moonscript","moon"],["N1QL","n1ql"],["NSIS","nsis"],["Nginx","nginx"],["Nim","nim"],["Nix","nix"],["OCaml,ml"],["Objective C","mm"],["OpenGL Shading Language","glsl"],["Oracle Rules Language","ruleslanguage"],
    ["Oxygene","oxygene"],["PF","pf"],["PHP","php3"],["Parser3","parser3"],["Perl","pl"],["Plaintext","txt"],["Pony","pony"],["PostgreSQL","pgsql"],["PowerShell","ps"],["Processing","processing"],["Prolog","prolog"],["Properties","properties"],["Protocol Buffers","protobuf"],["Puppet","pp"],["Python","py"],["Python profiler results","profile"],
    ["Python REPL","pycon"],["Q","k"],["QML","qml"],["R","r"],["ReasonML","re"],["RenderMan RIB","rib"],["RenderMan RSL","rsl"],["Roboconf","graph"],["Ruby","rb"],["Rust","rs"],["SAS","sas"],["SCSS","scss"],["SQL","sql"],["STEP Part 21","p21"],["Scala","scala"],["Scheme","scheme"],["Scilab","sci"],["Shell","shell"],["Smali","smali"],["Smalltalk","st"],
    ["SML","ml"],["Stan","stan"],["Stata","stata"],["Stylus","stylus"],["SubUnit","subunit"],["Swift","swift"],["Tcl","tcl"],["Test Anything Protocol","tap"],["Thrift","thrift"],["TP","tp"],["Twig","twig"],["Typescript","ts"],["VB.Net","vb"],["VBScript","vbs"],["VHDL","vhdl"],["Vala","vala"],["Verilog","v"],["Vim Script","vim"],["X++","axapta"],["x86 Assembly","x86asm"],["XL","xl"],["XQuery","xq"],["YAML","yml"],["Zephir","zep"]];
    const languageOptions = languages.map((language) =>
        <option value={language[1]}>{language[0]}</option>
    );

    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [tags, setTags] = useState([]);
    const [userCode, setUserCode] = useState("");
    const [username, setUserName] = useState("");

    const renderedTags = tags.map((tag)=>
    <div className="create-code-tag" name={tag}>
        <p>{tag}</p>
        <button name={tag} onClick={handleDeleteTag}>X</button>
    </div>);

    useEffect(() => {
        getUser();
    }, [tags]);

    useEffect(() => {
        document.querySelectorAll("pre code").forEach(e => {
            hljs.highlightBlock(e);
          });
    }, [userCode,selectedLanguage]);

    const getUser = () => {
        API.getUser().then((response) => {
            console.log(response)
            setUserName(response.data.username)
        })
    }

    function handleLanguageSelect(event) {
        setSelectedLanguage(event.target.value);
    };

    function tagsKeyUpFunction(event) {
        if (event.key === "Enter" && tags.length === 6) {
            alert("No more than 6 tags.")
            event.target.value = "";
            return false;
        } if (event.key === "Enter" && /\s/.test(event.target.value) === true) {
            alert("Tags must contain zero spaces.");
            event.target.value = "";
            return false;
        } else if (event.key === "Enter") {
            setTags([...tags, event.target.value]);
            event.target.value = "";
        };
    };

    function tagsKeyDownFunction(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            return false;
        }
    };

    function handleDeleteTag(event) {
        event.preventDefault();
        var tagArray = tags;
        var newTagArray = tagArray.filter(a => a !== event.target.name);
        setTags(newTagArray);
    };

    function handleIndent(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            var start = event.target.selectionStart;
            var end = event.target.selectionEnd;

            event.target.value = event.target.value.substring(0, start) +
                "    " + event.target.value.substring(end);

            event.target.selectionStart = 
                event.target.selectionEnd = start + 4;
        }
    };

    function handleUserCodeInput(event) {
        setUserCode(event.target.value);
    };  

    function validateContent (event) {
        event.preventDefault();
        var codeTitle = document.getElementById("code-title").value.trim();
        var codeDesc = document.getElementById("code-desc").value.trim();
        if ((codeTitle === "") === false && (codeDesc === "") === false && (userCode.trim() === "") === false && (selectedLanguage.trim() === "") === false) {
            createNewCodeBlock(codeTitle, codeDesc);
        } else {
            alert("submission has failed verification.");
        }
    };

    function getFullLanguageString (abbreviation) {
        var i;
        for (i=0;i<languages.length;i++) {
            if (abbreviation === languages[i][1]) {
                return(languages[i][0]);
            };
        };
    };

    function createNewCodeBlock (title, desc) {
        console.log("storing data...");
        var postData = {
            title: title,
            code: userCode,
            description: desc,
            tags: tags.toString(),
            language: getFullLanguageString(selectedLanguage),
            user: username
        };

        console.log(postData);
    };

    return(
        <div className="create-code-background">
            <div className="create-form-container">
                <form className="create-form" autoComplete="off">
                    <input type="text" id="code-title" name="title" placeholder="Title" className="create-code-title"/>
                    <label htmlFor="language">Select the coding language:</label>
                    <select name="language" placeholder="language" onClick={handleLanguageSelect} onKeyUp={handleLanguageSelect}>{languageOptions}</select>
                    <div className="code-preview-container" name="code-preview-container">
                        <textarea name="code-block" onKeyDown={handleIndent} onKeyUp={handleUserCodeInput} placeholder="//Code goes here..."/>
                        <pre><code className={selectedLanguage}>{userCode}</code></pre>
                    </div>
                    <textarea name="code-desc" id="code-desc" className="code-desc" placeholder="Description goes here..."/>
                    <input type="text" name="tags" placeholder="Tags" onKeyDown={tagsKeyDownFunction} onKeyUp={tagsKeyUpFunction} className="tag-input"/>
                    <div className="tags-box">
                        {renderedTags}
                    </div>
                    <button onClick={validateContent}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreateCodeForm;