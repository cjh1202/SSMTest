$(function(){

    load();


})

function reLoad(){
    $("#myTable").bootstrapTable("refresh");
}

function load(){
    let url="http://localhost:8080/SpringMVC_1/userSelect"
    $("#myTable").bootstrapTable({
        url:url,
        method:'POST',
        dataType:"JSON",
        sidePagination:'client',
        columns:[
            {
                title:'行号',
                align:"center",//水平居中
                halign:"center",//垂直居中
                formatter:function(value,row,index){
                    return index+1;
                }
            },
            {
                title:'账号',
                field:'acc'

            },
            {
                title:'手机号',
                field:'phone',
                formatter:function(value,row,index){
                    console.log(value)
                    console.log(row)
                    console.log(index)

                    // return "<h2>"+value+"</h2><img src='https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'/>";
                    return "<button onclick='bitMe("+value+")'>"+value+"</button>"
                }
            },
            {
                title:'地址',
                field:'address'
            },
            {
                title:'操作',
                formatter:function(value,row,index){
                    let url= 'http://localhost:8080/SpringMVC_1/removeData/'+index;
                    let deleteRow="<a href='javascript:remove(\'"+url+"\')'>删除</a>";


                    let update="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='javascript:remove(\'"+url+"\')'>修改</a>";

                    return deleteRow+update;
                }
            }
            ,
            {
                title:'操作2'
            }
        ],
        onDblClickRow:function(row, $element){
                console.log(row)
            console.log($element.innerHTML)
            // console.log(field)
        }
    })
}

function bitMe(content){
    alert(content);
}

function remove(url){


  $.ajax({
      url:url,
      type:"get",
      success:function(mark){
          console.log(mark)
            if(mark){
                reLoad();
            }
      }



  })

}