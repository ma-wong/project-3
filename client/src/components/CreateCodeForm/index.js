import React, { useState, useEffect } from "react";
import "./createCodeForm.css";
import hljs from "highlight.js"
import { render } from "react-dom";
import API from "../../utils/API.js";

function CreateCodeForm(){
    var userSelectedLanguage = "";
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

    const renderedTags = tags.map((tag)=>
    <div className="create-code-tag" name={tag}>
        <p>{tag}</p>
        <button name={tag} onClick={handleDeleteTag}>X</button>
    </div>);

    useEffect(() => {
    }, [tags]);

    function handleLanguageSelect(event) {
        setSelectedLanguage(event.target.value);
    };

    function keyUpFunction(event) {
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

    function keyDownFunction(event) {
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

    function validateContent (event) {
        event.preventDefault();
        console.log(event.target.parentNode);
    };

    function handleIndent(event) {
        if (event.key == "Tab") {
            event.preventDefault();
            var start = event.target.selectionStart;
            var end = event.target.selectionEnd;

            event.target.value = event.target.value.substring(0, start) +
                "\t" + event.target.value.substring(end);

            event.target.selectionStart = 
                event.target.selectionEnd = start + 1;
        }
    };

    return(
        <div className="create-code-background">
            <div className="create-form-container">
                <form className="create-form" autoComplete="off">
                    <input type="text" name="title" placeholder="title" className="create-code-title"/>
                    <label for="language">Select the coding language:</label>
                    <select name="language" placeholder="language" onClick={handleLanguageSelect}>{languageOptions}</select>
                    <div className="code-preview-container">
                        <textarea name="code-block" onKeyDown={handleIndent}/>
                        <pre><code className={selectedLanguage}></code></pre>
                    </div>
                    <input type="text" name="tags" placeholder="tags" onKeyDown={keyDownFunction} onKeyUp={keyUpFunction} className="tag-input"/>
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