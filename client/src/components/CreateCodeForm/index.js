import React, { useState } from "react";
import "./createCodeForm.css";
import hljs from "highlight.js"

function CreateCodeForm(){
    var tags = [];
    var language = "";
    var languages = [["1C","1c"],["ABNF","abnf"],["Access logs","accesslog"],["Ada","ada"],["Arduino","arduino"],["ARM Assembler","armasm"],["AVR assembler","avrasm"],["ActionScript","actionscript"],["AngelScript","asc"],["Apache","apache"],["AppleScript","applescript"],["Arcade","arcade"],
    ["AsciiDoc","asciidoc"],["AspectJ","aspectj"],["AutoHotkey","autohotkey"],["AutoIt","autoit"],["Awk","awk"],["Bash","bash"],["Basic","basic"],["BNF","bnf"],["Brainfuck","bf"],["C#","cs"],["C","c"],["C++","cpp"],["C/AL","cal"],["Cache Object Script","cos"],["CMake","cmake"],["Coq","coq"],["CSP","csp"],["CSS","css"],
    ["Cap'n Proto","capnproto"],["Clojure","clojure"],["CoffeeScript","coffeescript"],["Crmsh","crmsh"],["Crystal","crystal"],["D","d"],["DNS Zone file","dns"],["DOS","dos"],["Dart", "dart"],["Delphi","dpr"],["Diff","diff"],["Django","jinja"],["Dockerfile","docker"],["dsconfig","dsconfig"],["DTS","dts"],["Dust","dst"],["EBNF","ebnf"],["Elixir","elixir"],["Elm","elm"],
    ["Erlang","erlang"],["Excel","excel"],["F#","fs"],["FIX","fix"],["Fortran","f90"],["G-Code","nc"],["Gams","gms"],["Gauss","gss"],["Gherkin","gherkin"],["Go","go"],["Golo","golo"],["Gradle","gradle"],["Groovy","groovy"],["HTML, XML","xml"],["Haml","haml"],
    ["Handlebars","hbs"],["Haskell","hs"],["Haxe","hx"],["Hy","hy"],["Ini, TOML","ini"],["Inform7","i7"],["IRPF90","irpf90"],["JSON","json"],["Java","jsp"],["Javascript","js"],["Julia","julia"],["Kotlin","kotlin"],["LaTeX","tex"],["Leaf","leaf"],["Lasso","ls"],["Less","less"],
    ["LDIF,ldif"],["Lisp","lisp"],["LiveCode Server","livecodeserver"],["LiveScript","ls"],["Lua","lua"],["Makefile","mk"],["Markdown","md"],["Mathematica","wl"],["Matlab","matlab"],["Maxima","maxima"],["Maya Embedded Language","mel"],["Mercury","mercury"],["Mizar","mizar"],
    ["Mojolicious","mojolicious"],["Monkey","monkey"],["Moonscript","moon"],["N1QL","n1ql"],["NSIS","nsis"],["Nginx","nginx"],["Nim","nim"],["Nix","nix"],["OCaml,ml"],["Objective C","mm"],["OpenGL Shading Language","glsl"],["Oracle Rules Language","ruleslanguage"],
    ["Oxygene","oxygene"],["PF","pf"],["PHP","php3"],["Parser3","parser3"],["Perl","pl"],["Plaintext","txt"],["Pony","pony"],["PostgreSQL","pgsql"],["PowerShell","ps"],["Processing","processing"],["Prolog","prolog"],["Properties","properties"],["Protocol Buffers","protobuf"],["Puppet","pp"],["Python","py"],["Python profiler results","profile"],
    ["Python REPL","pycon"],["Q","k"],["QML","qml"],["R","r"],["ReasonML","re"],["RenderMan RIB","rib"],["RenderMan RSL","rsl"],["Roboconf","graph"],["Ruby","rb"],["Rust","rs"],["SAS","sas"],["SCSS","scss"],["SQL","sql"],["STEP Part 21","p21"],["Scala","scala"],["Scheme","scheme"],["Scilab","sci"],["Shell","shell"],["Smali","smali"],["Smalltalk","st"],
    ["SML","ml"],["Stan","stan"],["Stata","stata"],["Stylus","stylus"],["SubUnit","subunit"],["Swift","swift"],["Tcl","tcl"],["Test Anything Protocol","tap"],["Thrift","thrift"],["TP","tp"],["Twig","twig"],["Typescript","ts"],["VB.Net","vb"],["VBScript","vbs"],["VHDL","vhdl"],["Vala","vala"],["Verilog","v"],["Vim Script","vim"],["X++","axapta"],["x86 Assembly","x86asm"],["XL","xl"],["XQuery","xq"],["YAML","yml"],["Zephir","zep"]]
    function handleKeyPress(event) {
        event.preventDefault();
        if (event.key === "Enter") {

        }
    }
    return(
        <div className="create-code-background">
            <div className="create-form-container">
                <form className="create-form">
                    <input type="text" name="title" placeholder="title" className="create-code-title"/>
                    <select name="language" placeholder="language">
                        <option value="" disabled selected>language</option>
                        <option value="javascript">Javascript</option>
                        <option value="python">Python</option>
                        <option value="html">HTML</option>
                    </select>
                    <div className="code-preview-container">
                        <textarea name="code-block" />
                        <pre><code className={language}></code></pre>
                    </div>
                    <input type="text" name="tags" placeholder="tags" onKeyPress={handleKeyPress}/>
                    <div className="tags-box">
                        Tags will appear here.
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateCodeForm;