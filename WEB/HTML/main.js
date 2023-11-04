
<html>
    <head>
        <style>
            .menu{
                display: inline-block;
                padding: 10px;
                margin: 5px;
                border: solid 2px red;
            }
            #intro{
                border: solid 2px red;
                width: fit-content;
                padding: 10px;
            }
        </style>
        <script>alert("hello");</script>
    </head>
    <body>
    <p id="the_p" onClick="thaydoinoidung()">Thay doi noi dung</p>
    <input type="button" value="outerHTML" id="outerHTML"/>
    <input type="button" value="innerHTML" id="innerHTML"/>
    <div id="content">
        <div>MOT</div>
        <div>HAI</div>
        <div>BA</div>
    </div>
    <button onClick="alert('hello');">DemoJS</button>
    <button id="classNameBtn">Lay theo className</button>
    <button id="TagNameBtn">Lay theo TagName</button>
    <button id="addTagLi">Them the moi</button>
    <ul id="topmenu">
        <li class="menu">Trang chu</li>
        <li class="menu">Gioi thieu</li>
        <li class="menu">Thong tin tuyen sinh</li>
        <li class="menu">Thong tin dao tao</li>
    </ul>
    <script type="text/javascript">
        const elementClassName = document.getElementById("classNameBtn");
        elementClassName.addEventListener("click",laytheoclassName);

        const elementTagName = document.getElementById("TagNameBtn");
        elementTagName.addEventListener("click",laytheoTagName);
 
        const insertTag = document.getElementById("addTagLi");
        insertTag.addEventListener("click",addTagLi);

        function thaydoinoidung(){
            var obj=document.getElementById("the_p");
            obj.innerHTML=obj.innerHTML+"Thiet ke web";
            console.log("The co ID hien"+obj.nodeName);
            console.log("The co cha hien tai"+obj.parentNode);
        }

        function laytheoclassName(){
            var obj=document.getElementsByClassName("menu");
            obj[1].innerHTML="Lay noi dung theo ClassName";
        }

        function laytheoTagName(){
            var objTN=document.getElementsByTagName("li");
            objTN[2].innerHTML="Lay theo TagName";
        }
        function InsertTag(){

        }

        var button=document.getElementById("innerHTML");

        //them su kien click cho button
        button.addEventListener("click",function(){
            //lay node con dau tien cua node hien tai
            var Node_innerHTML=document.getElementById("content");
            Node_innerHTML.innerHTML="<p>Noi dung da duoc thay doi hoan toan</p>"
        });

        var button=document.getElementById("outerHTML");

        //them su kien click cho button
        button.addEventListener("click",function(){
            //lay node con dau tien cua node hien tai
            var Node_outerHTML=document.getElementById("content");
            Node_outerHTML.outerHTML="<p>Noi dung da duoc thay doi hoan toan</p>"
        });

        function addTagLi(){
            var node = document.getElementById('topmenu');
            //Tao mot the p theo yeu cau.
            var li=document.createElement('li');
            //li.$(selected).attr('"your attribute"','"value you want to set"');
            li.setAttribute("class","menu");
            li.CREA="Hoc javascript tai free tuts mien phi";
            
            //Thme no vao node
            node.appendChild(li);
        }
    </script>
    </body>
</html>
