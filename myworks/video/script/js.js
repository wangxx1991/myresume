function getByClass(oParent, sClass)
{
 var aEle=oParent.getElementsByTagName('*');
 var aResult=[];
 var re=new RegExp('\\b'+sClass+'\\b', 'i');
 var i=0;
 
 for(i=0;i<aEle.length;i++)
 {
  //if(aEle[i].className==sClass)
  //if(aEle[i].className.search(sClass)!=-1)
  if(re.test(aEle[i].className))
  {
   aResult.push(aEle[i]);
  }
 }
 
 return aResult;
}

function getElementsClass(classnames) {
    var classobj = new Array(); //定义数组 

    var classint = 0; //定义数组的下标 

    var tags = document.getElementsByTagName("*"); //获取HTML的所有标签 

    for (var i in tags) { //对标签进行遍历 

        if (tags[i].nodeType == 1) { //判断节点类型 

            if (tags[i].getAttribute("class") == classnames) //判断和需要CLASS名字相同的，并组成一个数组 

            {

                classobj[classint] = tags[i];

                classint++;

            }

        }

    }

    return classobj; //返回组成的数组 

}



window.onload = function(){
    var omenuTxt = getElementsClass('menuTxt');
    var i;
    for(i=0;i<omenuTxt.length;i++){
        omenuTxt[i].onclick = function{
            this.className += '_active';
        }
    }

}