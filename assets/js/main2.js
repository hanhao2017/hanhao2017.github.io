
        window.onload = function () {
            // 动态的添加content 
            addContent();
            // 点赞
            // doLike();
 
            // 动态的添加content
            function addContent() {
                var address = ["张子枫", "鞠婧祎", "赵丽颖", "蒂法", "成德善", "PTY", "PTY", "江西省南昌市", "福建省厦门市", "湖北省武汉市",]
                for (var i = 0; i < 6; i++) {
                    // 获取节点class="row"
                    var row = document.getElementsByClassName("row")[10];
                    // 创建div元素节点，并设置其class="col-xs-6"
                    var contentDiv = document.createElement('div');
                    contentDiv.className = "col-xs-6 col-md-3 col-sm-6";
                    // 创建img节点,设置其src及class
                    var contentImg = document.createElement("img");
                    contentImg.src = "../images/" + (i + 1) + ".jpg";
                    contentImg.className = "img2";
                    // 1.创建title
                    // 创建div元素节点，设置class
                    var titleDiv = document.createElement("div");
                    titleDiv.className = "title2";
                    // 1.1创建title-left，设置class
                    var titleLeftDiv = document.createElement("div");
                    titleLeftDiv.className = "title-left2";
                    // 创建p元素节点，设置文本内容，textContent
                    var p1 = document.createElement("p");
                    p1.textContent = "编号:" + (i + 1);
                    // 创建p元素节点，设置文本内容，textContent，class
                    var p2 = document.createElement("p");
                    var textP2 = document.createTextNode(address[i]);
                    p2.appendChild(textP2);
                    p2.className = "title-left-address2";
                    // 添加子节点
                    titleLeftDiv.appendChild(p1);
                    titleLeftDiv.appendChild(p2);
 
                    // 1.2 创建title-right
                    var titleRightDiv = document.createElement("div");
                    titleRightDiv.className = "title-right2";
                    var titleRightImg = document.createElement("img");
                    titleRightImg.src = "../images/dianzan1.png";
                    titleRightImg.className = "title-right-like2";
                    var p3 = document.createElement("p");
                    p3.textContent = randomNum(1, 20);
                    p3.className = "title-right-numLike2";
                    titleRightDiv.appendChild(titleRightImg);
                    titleRightDiv.appendChild(p3);
                    // 点赞功能
                    titleRightImg.onclick = function () {
                        this.src = "../images/dianzan2.png";
                       // 将点赞图片下方的p节点的文本值加1，通过nextSibling关联当前的点赞位置
                        this.nextSibling.textContent = parseInt(this.nextSibling.textContent) + 1;
                    }
                    // 为titleDiv添加子节点
                    titleDiv.appendChild(titleLeftDiv);
                    titleDiv.appendChild(titleRightDiv);
                    contentDiv.appendChild(contentImg);
                    contentDiv.appendChild(titleDiv)
                    row.appendChild(contentDiv);
                }
            }
            // function doLike() {
            //     var imgLike = document.getElementsByClassName("title-right-like");
            //     for (var i = 0; i < imgLike.length; i++) {
            //         imgLike[i].onclick = function () {
            //             //注意涉及到这个对象不能使用imgLike[i],要用this代替
            //             this.src = "../images/like3.png";
            //             // 将点赞图片下方的p节点的文本值加1，通过nextSibling关联当前的点赞位置
            //             this.nextSibling.textContent = parseInt(this.nextSibling.textContent) + 1;
            //         };
            //     }
            // }
            // 删除节点
            function deleteContent() {
                var row = document.getElementById("row");
                var childs = row.childNodes;
                for (var i = childs.length - 1; i >= 0; i--) {
                    row.removeChild(childs[i]);
                }
            }
 
            searchImg();
            // }
            function searchImg() {
                var myInput = document.getElementById("myInput");
                // 为输入框添加onchange事件
                myInput.onchange = function () {
 
                    deleteContent();
                    console.log(myInput.value)
                    //    搜索功能未写完，待完善
                }
                // myInput.addEventListener(e){ }
            }
 
            //生成从minNum到maxNum的随机数
            function randomNum(minNum, maxNum) {
                switch (arguments.length) {
                    case 1:
                        return parseInt(Math.random() * minNum + 1, 10);
                        break;
                    case 2:
                        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                        break;
                    default:
                        return 0;
                        break;
                }
            }
 
        }
 
